import requests
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime
from urllib.parse import urljoin
import time
import os
import sys
import subprocess
import signal

REQUEST_TIMEOUT = 10
REQUEST_RETRIES = 6
RETRY_SLEEP_SECONDS = 2.0
PER_ITEM_SLEEP_SECONDS = 1.0
PER_PUBLICATION_TIMEOUT_SECONDS = 20
MAX_WORKERS = 1
REQUEST_HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; PublicationScraper/1.0; +https://dblp.org)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}


class PublicationTimeout(BaseException):
    pass


def _publication_timeout_handler(signum, frame):
    raise PublicationTimeout()


def run_with_publication_timeout(func, timeout_seconds, *args, **kwargs):
    if not hasattr(signal, "SIGALRM"):
        return func(*args, **kwargs)

    previous_handler = signal.getsignal(signal.SIGALRM)
    signal.signal(signal.SIGALRM, _publication_timeout_handler)
    signal.setitimer(signal.ITIMER_REAL, timeout_seconds)
    try:
        return func(*args, **kwargs)
    finally:
        signal.setitimer(signal.ITIMER_REAL, 0)
        signal.signal(signal.SIGALRM, previous_handler)


def get_url_text(url):
    last_exception = None
    for attempt in range(REQUEST_RETRIES):
        try:
            response = requests.get(url, timeout=REQUEST_TIMEOUT, headers=REQUEST_HEADERS)
            if response.status_code == 200:
                return response.text
        except Exception as exc:
            last_exception = exc
        if attempt < REQUEST_RETRIES - 1:
            time.sleep(RETRY_SLEEP_SECONDS)
    if last_exception:
        return ""
    return ""

def normalize_date(date_str):
    if not date_str:
        return ""
    date_str = date_str.strip()
    for fmt in ("%Y-%m-%d", "%Y/%m/%d", "%Y.%m.%d"):
        try:
            return datetime.strptime(date_str, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    year_match = re.search(r"(19|20)\d{2}", date_str)
    if year_match:
        return f"{year_match.group(0)}-01-01"
    return ""


def parse_human_readable_date(date_str):
    if not date_str:
        return ""
    cleaned = re.sub(r"\s+", " ", date_str).strip()
    for fmt in ("%d %b %Y", "%d %B %Y"):
        try:
            return datetime.strptime(cleaned, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return ""


def extract_arxiv_submitted_date(text):
    if not text:
        return ""

    patterns = [
        r"\[\s*Submitted on\s+(\d{1,2}\s+[A-Za-z]+\s+\d{4})\s*\]",
        r"Submitted on\s+(\d{1,2}\s+[A-Za-z]+\s+\d{4})",
        r"\[\s*v\d+\s*\]\s*(\d{1,2}\s+[A-Za-z]+\s+\d{4})",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if not match:
            continue
        parsed = parse_human_readable_date(match.group(1))
        if parsed:
            return parsed
    return ""


def is_coarse_date(date_str):
    if not date_str:
        return True
    raw = str(date_str).strip()
    if re.fullmatch(r"\d{4}", raw):
        return True
    normalized = normalize_date(raw)
    if not normalized:
        return True
    return bool(re.fullmatch(r"\d{4}-01-01", normalized))


def parse_include_arxiv_input(raw_value):
    value = (raw_value or "").strip().lower()
    if not value:
        return False

    true_values = {
        "y", "yes", "1", "true", "t",
        "是", "要", "需要", "包含", "包括", "包含arxiv", "要arxiv",
    }
    false_values = {
        "n", "no", "0", "false", "f",
        "否", "不要", "不", "不需要", "不包含", "不包括", "不要arxiv",
    }

    if value in true_values:
        return True
    if value in false_values:
        return False
    return False


def is_on_or_after_start_date(date_str, start_date_str):
    if not start_date_str:
        return True

    normalized_start_date = normalize_date(start_date_str)
    if not normalized_start_date:
        return True

    normalized_publication_date = normalize_date(date_str)
    if not normalized_publication_date:
        return False

    try:
        publication_dt = datetime.strptime(normalized_publication_date, "%Y-%m-%d")
        start_dt = datetime.strptime(normalized_start_date, "%Y-%m-%d")
    except ValueError:
        return False

    return publication_dt >= start_dt


def extract_year_from_entry(entry):
    date_tag = entry.find("span", itemprop="datePublished")
    if date_tag and date_tag.get_text(strip=True):
        normalized = normalize_date(date_tag.get_text(strip=True))
        if normalized:
            return normalized

    year_tag = entry.find("span", class_=re.compile(r"year", re.IGNORECASE))
    if year_tag and year_tag.get_text(strip=True):
        normalized = normalize_date(year_tag.get_text(strip=True))
        if normalized:
            return normalized

    entry_text = entry.get_text(" ", strip=True)
    year_match = re.search(r"\b(19|20)\d{2}\b", entry_text)
    if year_match:
        return f"{year_match.group(0)}-01-01"

    return ""


def extract_bibtex_from_view(bibtex_view_url):
    if not bibtex_view_url:
        return ""
    try:
        bibtex_view_text = get_url_text(bibtex_view_url)
        if not bibtex_view_text:
            return ""
        bibtex_text_match = re.search(r"@\w+\{[\s\S]+?\n\}", bibtex_view_text)
        if bibtex_text_match:
            return bibtex_text_match.group(0).strip()
        bibtex_view_soup = BeautifulSoup(bibtex_view_text, "html.parser")
        pre_tag = bibtex_view_soup.find("pre")
        if pre_tag and pre_tag.text.strip():
            return pre_tag.text.strip()

        bibtex_div = bibtex_view_soup.find("div", class_=re.compile(r"bibtex", re.IGNORECASE))
        if bibtex_div and bibtex_div.text.strip():
            return bibtex_div.text.strip()

        bib_url = ""
        biburl_match = re.search(r"biburl\s*=\s*\{(https?://[^}]+\.bib)\}", bibtex_view_soup.get_text("\n"))
        if biburl_match:
            bib_url = biburl_match.group(1)
        else:
            bib_link = bibtex_view_soup.find("a", href=re.compile(r"\.bib(\?|$)"))
            if bib_link and bib_link.get("href"):
                bib_url = urljoin(bibtex_view_url, bib_link["href"])

        if not bib_url:
            return ""

        bib_text = get_url_text(bib_url)
        if not bib_text:
            return ""
        return bib_text.strip()
    except Exception:
        return ""


def extract_year_from_bibtex(bibtex_text):
    if not bibtex_text:
        return ""
    year_match = re.search(r"year\s*=\s*\{(\d{4})\}", bibtex_text, re.IGNORECASE)
    if year_match:
        return year_match.group(1)
    return ""


def extract_venue_from_bibtex(bibtex_text):
    venue = ""
    venue_short = ""
    if not bibtex_text:
        return venue, venue_short

    journal_match = re.search(r"journal\s*=\s*\{([^}]+)\}", bibtex_text, re.IGNORECASE)
    if journal_match:
        venue_short = journal_match.group(1).replace("{", "").replace("}", "").strip()
        return venue, venue_short

    booktitle_match = re.search(r"booktitle\s*=\s*\{([\s\S]+?)\}\s*,", bibtex_text, re.IGNORECASE)
    if booktitle_match:
        raw_booktitle = re.sub(r"\s+", " ", booktitle_match.group(1)).strip()
        short_match = re.search(r"\{\s*([A-Za-z][A-Za-z0-9/\-&]+)\s*\}\s*(?:'\d{2}|\d{4})", raw_booktitle)
        if short_match:
            venue_short = short_match.group(1).strip()
        elif "{" in raw_booktitle and "}" in raw_booktitle:
            brace_match = re.search(r"\{\s*([^}]+)\s*\}", raw_booktitle)
            if brace_match:
                venue_short = brace_match.group(1).strip()
        cleaned_booktitle = raw_booktitle.replace("{", "").replace("}", "")
        venue = cleaned_booktitle.split(",")[0].strip()
        venue = re.sub(r"^Proceedings of\s+", "", venue, flags=re.IGNORECASE).strip()
        if venue_short:
            venue_short = venue_short.replace("{", "").replace("}", "").strip()

    return venue, venue_short


def extract_url_from_bibtex(bibtex_text):
    if not bibtex_text:
        return ""
    url_match = re.search(r"url\s*=\s*\{([^}]+)\}", bibtex_text, re.IGNORECASE)
    if url_match:
        return url_match.group(1).strip()
    return ""


def extract_doi_from_url(url):
    if not url:
        return ""
    doi_match = re.search(r"doi\.org/(10\.[^\s?#]+/[^\s?#]+)", url, re.IGNORECASE)
    if doi_match:
        return doi_match.group(1).strip()
    return ""


def fetch_abstract_from_crossref(paper_url):
    doi = extract_doi_from_url(paper_url)
    if not doi:
        return ""
    crossref_url = f"https://api.crossref.org/works/{doi}"
    try:
        response = requests.get(crossref_url, timeout=REQUEST_TIMEOUT, headers=REQUEST_HEADERS)
        if response.status_code != 200:
            return ""
        data = response.json()
        message = data.get("message", {}) if isinstance(data, dict) else {}
        abstract = message.get("abstract", "")
        if not abstract:
            return ""
        abstract = re.sub(r"<[^>]+>", " ", abstract)
        abstract = re.sub(r"\s+", " ", abstract).strip()
        return abstract
    except Exception:
        return ""


def extract_arxiv_abs_url(publication):
    arxiv_url = publication.get("arxivUrl", "")
    if arxiv_url and "arxiv.org/abs/" in arxiv_url:
        return arxiv_url

    paper_url = publication.get("paperUrl", "")
    if paper_url and "arxiv.org/abs/" in paper_url:
        return paper_url

    if paper_url:
        match = re.search(r"10\.48550/arXiv\.(\d{4}\.\d{4,5}(?:v\d+)?)", paper_url, re.IGNORECASE)
        if match:
            return f"https://arxiv.org/abs/{match.group(1)}"

    bibtex = publication.get("bibtex", "")
    if bibtex:
        eprint_match = re.search(r"eprint\s*=\s*\{(\d{4}\.\d{4,5}(?:v\d+)?)\}", bibtex, re.IGNORECASE)
        if eprint_match:
            return f"https://arxiv.org/abs/{eprint_match.group(1)}"

    return ""


def recover_arxiv_metadata_quick(publication):
    arxiv_abs_url = extract_arxiv_abs_url(publication)
    if not arxiv_abs_url:
        return publication

    try:
        response = requests.get(arxiv_abs_url, timeout=8, headers=REQUEST_HEADERS)
        if response.status_code != 200:
            return publication

        page_text = response.text
        page_soup = BeautifulSoup(page_text, "html.parser")

        if not publication.get("arxivUrl"):
            publication["arxivUrl"] = arxiv_abs_url

        if not publication.get("paperUrl") and publication.get("arxivUrl"):
            publication["paperUrl"] = publication["arxivUrl"]

        if not publication.get("abstract"):
            abstract_text = ""
            abstract_block = page_soup.find("blockquote", class_=re.compile(r"abstract", re.IGNORECASE))
            if abstract_block:
                abstract_text = abstract_block.get_text(" ", strip=True)
            if not abstract_text:
                meta_description = page_soup.find("meta", attrs={"name": "description"})
                if meta_description and meta_description.get("content"):
                    abstract_text = meta_description["content"].strip()
            if abstract_text:
                abstract_text = re.sub(r"^\s*Abstract\s*:\s*", "", abstract_text, flags=re.IGNORECASE).strip()
                publication["abstract"] = abstract_text

        if is_coarse_date(publication.get("date", "")):
            submitted_date = extract_arxiv_submitted_date(page_text)
            if submitted_date:
                publication["date"] = submitted_date

        if not publication.get("tags"):
            subject_meta = page_soup.find("meta", attrs={"name": "citation_keywords"})
            if subject_meta and subject_meta.get("content"):
                publication["tags"] = [x.strip() for x in subject_meta["content"].split(",") if x.strip()]
    except Exception:
        return publication

    return publication


def extract_venue_from_dblp_issue_url(issue_url):
    if not issue_url:
        return ""
    page_text = get_url_text(issue_url)
    if not page_text:
        return ""
    soup = BeautifulSoup(page_text, "html.parser")
    candidate = ""
    header = soup.find("h1")
    if header and header.get_text(strip=True):
        candidate = header.get_text(" ", strip=True)
    if not candidate and soup.title and soup.title.string:
        candidate = soup.title.string.strip()
    if not candidate:
        return ""
    candidate = re.sub(r"^dblp:\s*", "", candidate, flags=re.IGNORECASE)
    candidate = re.sub(r"\s+-\s+dblp.*$", "", candidate, flags=re.IGNORECASE)
    candidate = re.sub(r"\s*\(\s*\d+\s*\)\s*", " ", candidate)
    candidate = re.sub(r",?\s*(Volume|Vol\.|vol\.|Issue|No\.)\b.*$", "", candidate).strip()
    candidate = re.sub(r"\s+\d{4}\s*$", "", candidate).strip()
    return candidate


def fetch_metadata_from_paper_url(paper_url):
    metadata = {"abstract": "", "date": "", "tags": []}
    if not paper_url:
        return metadata
    try:
        paper_text = get_url_text(paper_url)
        if not paper_text:
            return metadata
        paper_soup = BeautifulSoup(paper_text, "html.parser")

        abstract_text = ""
        if not abstract_text:
            for script_tag in paper_soup.find_all("script", attrs={"type": "application/ld+json"}):
                try:
                    json_text = script_tag.string or script_tag.get_text() or ""
                    if not json_text.strip():
                        continue
                    data = json.loads(json_text)
                    if isinstance(data, list):
                        candidates = data
                    else:
                        candidates = [data]
                    for item in candidates:
                        if isinstance(item, dict) and item.get("@type") in ("ScholarlyArticle", "Article"):
                            description = item.get("description")
                            if description:
                                abstract_text = re.sub(r"\s+", " ", description).strip()
                                break
                    if abstract_text:
                        break
                except Exception:
                    continue
        if not abstract_text:
            abstract_tag = paper_soup.find("blockquote", class_="abstract")
            if abstract_tag:
                abstract_text = abstract_tag.text.strip().replace("Abstract:", "").strip()
        if not abstract_text:
            acm_abstract = paper_soup.select_one("div.abstractSection")
            if acm_abstract:
                abstract_text = acm_abstract.get_text(" ", strip=True)
        if not abstract_text:
            acm_abstract = paper_soup.select_one("div.abstractInFull")
            if acm_abstract:
                abstract_text = acm_abstract.get_text(" ", strip=True)
        if not abstract_text:
            acm_abstract = paper_soup.select_one("section#abstract, div#abstract, div.article__abstract, div.abstract")
            if acm_abstract:
                abstract_text = acm_abstract.get_text(" ", strip=True)
        if not abstract_text:
            meta_abstract = paper_soup.find("meta", attrs={"name": "citation_abstract"})
            if meta_abstract and meta_abstract.get("content"):
                abstract_text = meta_abstract["content"].strip()
        if not abstract_text:
            meta_abstract = paper_soup.find("meta", attrs={"property": "og:description"})
            if meta_abstract and meta_abstract.get("content"):
                abstract_text = meta_abstract["content"].strip()
        if not abstract_text:
            meta_abstract = paper_soup.find("meta", attrs={"name": "description"})
            if meta_abstract and meta_abstract.get("content"):
                abstract_text = meta_abstract["content"].strip()
        if not abstract_text:
            meta_abstract = paper_soup.find("meta", attrs={"name": "dc.description"})
            if meta_abstract and meta_abstract.get("content"):
                abstract_text = meta_abstract["content"].strip()
        if not abstract_text:
            abstract_header = paper_soup.find(["h1", "h2", "h3"], string=re.compile(r"^\s*Abstract\s*$", re.IGNORECASE))
            if abstract_header:
                next_block = abstract_header.find_next(["div", "p", "section"])
                if next_block:
                    abstract_text = next_block.get_text(" ", strip=True)
        if not abstract_text:
            page_text = paper_soup.get_text("\n")
            abstract_match = re.search(
                r"\bAbstract\b\s*(.+?)(?:\n\s*(?:Author Tags|Index Terms|Keywords|References|Formats available|Published:|Publication History)|\n\s*1\s+Introduction|\n\s*1\.|\n\s*Introduction)",
                page_text,
                re.IGNORECASE | re.DOTALL,
            )
            if abstract_match:
                abstract_text = re.sub(r"\s+", " ", abstract_match.group(1)).strip()
        if abstract_text:
            abstract_text = re.sub(r"^Abstract\s*", "", abstract_text, flags=re.IGNORECASE).strip()
            abstract_text = re.sub(r"\s*AI Summary\s*", " ", abstract_text, flags=re.IGNORECASE).strip()
        if not abstract_text:
            abstract_text = fetch_abstract_from_crossref(paper_url)
        metadata["abstract"] = abstract_text

        date_text = ""
        lower_url = (paper_url or "").lower()
        if "arxiv.org" in lower_url or "10.48550/arxiv." in lower_url:
            date_text = extract_arxiv_submitted_date(paper_text)
        if not date_text:
            submitted_match = re.search(r"Submitted on (\d{1,2} \w+ \d{4})", paper_text, re.IGNORECASE)
            if submitted_match:
                date_text = parse_human_readable_date(submitted_match.group(1))
        metadata["date"] = date_text

        tags = []
        keywords_meta = paper_soup.find("meta", attrs={"name": "citation_keywords"})
        if keywords_meta and keywords_meta.get("content"):
            tags = [t.strip() for t in keywords_meta["content"].split(",") if t.strip()]
        if not tags:
            keywords_meta = paper_soup.find("meta", attrs={"name": "keywords"})
            if keywords_meta and keywords_meta.get("content"):
                tags = [t.strip() for t in keywords_meta["content"].split(",") if t.strip()]
        if not tags:
            keywords_container = paper_soup.find("div", class_="keywords")
            if keywords_container:
                tags = [kw.text.strip() for kw in keywords_container.find_all("span") if kw.text.strip()]
        metadata["tags"] = tags

        return metadata
    except Exception:
        return metadata


def build_bibtex_view_url(href, base_url):
    if not href:
        return ""
    if href.startswith("//"):
        href = f"https:{href}"
    href = urljoin(base_url, href)
    if "dblp.org/rec/" not in href:
        return ""
    if "view=bibtex" in href:
        return href
    if href.endswith(".html"):
        return f"{href}?view=bibtex"
    if href.endswith("/"):
        href = href[:-1]
    if ".html" not in href and "?" not in href:
        return f"{href}.html?view=bibtex"
    if "?" in href:
        return f"{href}&view=bibtex"
    return ""


def enrich_publication(publication, include_arxiv=False, start_date=""):
    paper_url = publication.get("paperUrl", "")
    if paper_url and "arxiv" in paper_url.lower() and not publication.get("arxivUrl"):
        publication["arxivUrl"] = paper_url

    if not include_arxiv and paper_url and "arxiv" in paper_url.lower():
        publication["skip"] = True
        publication.pop("bibtexViewUrl", None)
        return publication

    bibtex_view_url = publication.get("bibtexViewUrl", "")
    if bibtex_view_url:
        publication["bibtex"] = extract_bibtex_from_view(bibtex_view_url)

    venue, venue_short = extract_venue_from_bibtex(publication.get("bibtex", ""))
    if venue:
        publication["venue"] = venue
    if venue_short:
        publication["venueShort"] = venue_short
    if not publication.get("venue"):
        issue_url = publication.get("dblpIssueUrl", "")
        issue_venue = extract_venue_from_dblp_issue_url(issue_url)
        if issue_venue:
            publication["venue"] = issue_venue

    if not paper_url:
        bibtex_url = extract_url_from_bibtex(publication.get("bibtex", ""))
        if bibtex_url:
            publication["paperUrl"] = bibtex_url
            if "arxiv" in bibtex_url.lower() and not publication.get("arxivUrl"):
                publication["arxivUrl"] = bibtex_url
            paper_url = bibtex_url

    if paper_url and "arxiv" in paper_url.lower() and not publication.get("arxivUrl"):
        publication["arxivUrl"] = paper_url

    if not include_arxiv and paper_url and "arxiv" in paper_url.lower():
        publication["skip"] = True
        publication.pop("bibtexViewUrl", None)
        return publication

    year_text = extract_year_from_bibtex(publication.get("bibtex", ""))
    if year_text:
        publication["date"] = year_text
    if start_date and publication.get("date") and not is_on_or_after_start_date(publication.get("date", ""), start_date):
        publication["skip"] = True
        publication.pop("bibtexViewUrl", None)
        publication.pop("dblpIssueUrl", None)
        return publication

    if paper_url:
        metadata = fetch_metadata_from_paper_url(paper_url)
        publication["abstract"] = metadata.get("abstract", "")
        publication["date"] = metadata.get("date", "")
        publication["tags"] = metadata.get("tags", [])

    if not publication.get("date"):
        year_text = extract_year_from_bibtex(publication.get("bibtex", ""))
        if year_text:
            publication["date"] = year_text

    if start_date and not is_on_or_after_start_date(publication.get("date", ""), start_date):
        publication["skip"] = True

    publication.pop("bibtexViewUrl", None)
    publication.pop("dblpIssueUrl", None)
    return publication


def scrape_dblp_publications(url, include_arxiv=False, start_date=""):
    """
    Scrape publication information from the given DBLP author page URL.

    Args:
        url (str): The URL of the DBLP author page.

    Returns:
        list: A list of dictionaries containing publication information.
    """
    session = requests.Session()
    response = session.get(url, timeout=REQUEST_TIMEOUT)
    if response.status_code != 200:
        raise Exception(f"Failed to fetch URL: {url}, Status Code: {response.status_code}")

    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all publication entries
    publications = []
    bibtex_view_urls = []
    for entry in soup.find_all('li'):
        title_tag = entry.find('span', class_='title')
        if not title_tag:
            continue  # Skip entries without a title

        title = title_tag.text
        authors = [author.text for author in entry.find_all('span', itemprop='author')]

        paper_url = ""
        arxiv_url = ""
        bibtex_view_url = ""

        additional_links = entry.find_all("a")
        issue_url = ""
        for link in additional_links:
            if "href" not in link.attrs:
                continue
            href = link["href"]
            if not issue_url and "dblp.org/db/" in href and ".html#" in href:
                issue_url = href
            if href.startswith("https://doi.org/") and not paper_url:
                paper_url = href
                if "arXiv." in href:
                    arxiv_id_match = re.search(r"arXiv\.(\d{4}\.\d{5}(v\d+)?)", href)
                    if arxiv_id_match:
                        arxiv_id = arxiv_id_match.group(1)
                        arxiv_url = f"https://arxiv.org/abs/{arxiv_id}"
            if not bibtex_view_url:
                candidate_bibtex_url = build_bibtex_view_url(href, url)
                if candidate_bibtex_url:
                    bibtex_view_url = candidate_bibtex_url

        publication = {
            "title": title,
            "authors": authors,
            "date": extract_year_from_entry(entry),
            "venue": "",
            "venueShort": "",
            "tags": [],
            "awards": [],
            "abstract": "",
            "arxivUrl": arxiv_url,
            "paperUrl": paper_url,
            "bibtex": "",
            "bibtexViewUrl": bibtex_view_url,
            "dblpIssueUrl": issue_url,
        }

        if publication.get("paperUrl") and "arxiv" in publication["paperUrl"].lower() and not publication.get("arxivUrl"):
            publication["arxivUrl"] = publication["paperUrl"]

        if start_date and publication.get("date") and not is_on_or_after_start_date(publication.get("date", ""), start_date):
            continue

        publications.append(publication)
        if bibtex_view_url:
            bibtex_view_urls.append(bibtex_view_url)

    for publication in publications:
        title = publication.get("title", "")
        try:
            run_with_publication_timeout(
                enrich_publication,
                PER_PUBLICATION_TIMEOUT_SECONDS,
                publication,
                include_arxiv,
                start_date,
            )
        except PublicationTimeout:
            print(f"抓取超时({PER_PUBLICATION_TIMEOUT_SECONDS}s): {title}")
            recover_arxiv_metadata_quick(publication)
            partial_content = {k: v for k, v in publication.items() if v}
            print("已抓取到的content:")
            print(json.dumps(partial_content, ensure_ascii=False, indent=2))
            publication.pop("bibtexViewUrl", None)
            publication.pop("dblpIssueUrl", None)

        title = publication.get("title", "")
        keys_to_check = ["date", "authors", "venue", "venueShort", "tags", "awards", "abstract", "arxivUrl", "paperUrl", "bibtex"]
        success_keys = []
        empty_keys = []
        for key in keys_to_check:
            value = publication.get(key)
            if value:
                success_keys.append(key)
            else:
                empty_keys.append(key)
        print(f"抓取完成: {title}")
        print(f"成功项: {', '.join(success_keys) if success_keys else '无'}")
        print(f"未成功项: {', '.join(empty_keys) if empty_keys else '无'}")
        time.sleep(PER_ITEM_SLEEP_SECONDS)

    return publications, bibtex_view_urls

def extract_author_name_from_dblp(url):
    page_text = get_url_text(url)
    if not page_text:
        return ""
    soup = BeautifulSoup(page_text, "html.parser")
    name_tag = soup.select_one("span.name")
    if name_tag and name_tag.get_text(strip=True):
        return name_tag.get_text(strip=True)
    header_name = soup.find("h1")
    if header_name and header_name.get_text(strip=True):
        return header_name.get_text(strip=True)
    return ""

def save_to_js(data, filename):
    """
    Save data to a JS file in the required format.

    Args:
        data (list): The data to save.
        filename (str): The name of the JS file.
    """
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("module.exports = ")
        json.dump(data, f, ensure_ascii=False, indent=4)


def build_commit_message(author_name, publications):
    titles = [pub.get("title", "").strip() for pub in publications if pub.get("title", "").strip()]
    if not titles:
        return f"增加了{author_name}的publication"
    preview_count = min(5, len(titles))
    numbered_titles = [f"{index + 1}. {titles[index]}" for index in range(preview_count)]
    suffix = "；..." if len(titles) > preview_count else ""
    return f"增加了{author_name}的publication: {'；'.join(numbered_titles)}{suffix}"


def run_git_auto_flow(repo_root, js_filepath, commit_message):
    js_relpath = os.path.relpath(js_filepath, repo_root)
    subprocess.run(["git", "add", js_relpath], cwd=repo_root, check=True)
    diff_result = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=repo_root)
    if diff_result.returncode == 0:
        print("没有检测到变更，已跳过 git commit / git push --force")
        return
    subprocess.run(["git", "commit", "-m", commit_message], cwd=repo_root, check=True)
    subprocess.run(["git", "push", "--force"], cwd=repo_root, check=True)

def format_publications(publications, include_arxiv=False, start_date=""):
    """
    Format the scraped publications to match the required JSON and JS structure.

    Args:
        publications (list): List of scraped publication dictionaries.

    Returns:
        list: Formatted list of publications.
    """
    def merge_unique_list(first_list, second_list):
        merged = []
        seen = set()
        for item in (first_list or []) + (second_list or []):
            if not item:
                continue
            normalized = str(item).strip()
            if not normalized:
                continue
            key = normalized.lower()
            if key in seen:
                continue
            seen.add(key)
            merged.append(normalized)
        return merged

    def prefer_scalar(existing_value, incoming_value):
        existing_text = (existing_value or "").strip() if isinstance(existing_value, str) else existing_value
        incoming_text = (incoming_value or "").strip() if isinstance(incoming_value, str) else incoming_value
        if not existing_text and incoming_text:
            return incoming_value
        if existing_text and incoming_text and isinstance(existing_text, str) and isinstance(incoming_text, str):
            if len(incoming_text) > len(existing_text):
                return incoming_value
        return existing_value

    def merge_publication_items(existing_item, incoming_item):
        existing_item["authors"] = merge_unique_list(existing_item.get("authors", []), incoming_item.get("authors", []))
        existing_item["tags"] = merge_unique_list(existing_item.get("tags", []), incoming_item.get("tags", []))
        existing_item["awards"] = merge_unique_list(existing_item.get("awards", []), incoming_item.get("awards", []))

        for key in ["date", "venue", "venueShort", "abstract", "bibtex", "paperUrl", "arxivUrl"]:
            existing_item[key] = prefer_scalar(existing_item.get(key, ""), incoming_item.get(key, ""))

        paper_url = existing_item.get("paperUrl", "")
        if paper_url and "arxiv" in paper_url.lower() and not existing_item.get("arxivUrl"):
            existing_item["arxivUrl"] = paper_url

    merged_by_title = {}
    title_order = []
    for pub in publications:
        if pub.get("skip"):
            continue

        normalized_venue = pub.get("venue", "") or ""
        normalized_venue_short = pub.get("venueShort", "") or ""
        if isinstance(normalized_venue, str) and normalized_venue.strip().lower() == "corr":
            normalized_venue = ""
        if isinstance(normalized_venue_short, str) and normalized_venue_short.strip().lower() == "corr":
            normalized_venue_short = ""

        paper_url = pub.get("paperUrl", "")
        if not include_arxiv and paper_url and "arxiv" in paper_url.lower():
            continue
        if not include_arxiv and pub.get("arxivUrl", ""):
            continue
        if not is_on_or_after_start_date(pub.get("date", ""), start_date):
            continue
        item = {
            "title": pub.get("title", ""),
            "date": pub.get("date", ""),
            "authors": pub.get("authors", []),
            "venue": normalized_venue,
            "venueShort": normalized_venue_short,
            "tags": pub.get("tags", []),
            "awards": pub.get("awards", []),
            "abstract": pub.get("abstract", ""),
            "arxivUrl": pub.get("arxivUrl", ""),
            "paperUrl": pub.get("paperUrl", ""),
            "bibtex": pub.get("bibtex", "")
        }

        title_key = (item.get("title", "") or "").strip().lower()
        if not title_key:
            title_key = f"__untitled__{len(title_order)}"

        if title_key not in merged_by_title:
            merged_by_title[title_key] = item
            title_order.append(title_key)
        else:
            merge_publication_items(merged_by_title[title_key], item)

    return [merged_by_title[key] for key in title_order]

def main():
    url = input("请输入DBLP作者网址 (如 https://dblp.org/pid/..../.html): ").strip()
    if not re.match(r"^https://dblp\.org/pid/\d+/\d+\.html$", url):
        print("错误：网址格式不正确，必须为 https://dblp.org/pid/数字/数字.html")
        sys.exit(1)
    print(f"Scraping publications from {url}...")

    include_arxiv_input = input("是否包含 arXiv 论文？(y/N，支持输入“要/不要”): ")
    include_arxiv = parse_include_arxiv_input(include_arxiv_input)

    start_date_input = input("从哪一个时间之后开始（可留空，支持 YYYY 或 YYYY-MM-DD）: ").strip()
    start_date = ""
    if start_date_input:
        start_date = normalize_date(start_date_input)
        if not start_date:
            print("错误：起始时间格式无效，请输入 YYYY 或 YYYY-MM-DD")
            sys.exit(1)

    author_name = extract_author_name_from_dblp(url)
    if not author_name:
        print("错误：无法从该网址提取作者姓名")
        sys.exit(1)
    safe_name = re.sub(r"[^A-Za-z0-9]+", "_", author_name.strip()).strip("_")
    if not safe_name:
        print("错误：作者姓名无法用于生成文件名")
        sys.exit(1)

    try:
        publications, bibtex_view_urls = scrape_dblp_publications(
            url,
            include_arxiv=include_arxiv,
            start_date=start_date,
        )
        print(f"Successfully scraped {len(publications)} publications.")
        if bibtex_view_urls:
            print("BibTeX view URLs found:")
            for bibtex_url in bibtex_view_urls:
                print(bibtex_url)

        # Format publications to match the required JSON and JS structure
        formatted_publications = format_publications(
            publications,
            include_arxiv=include_arxiv,
            start_date=start_date,
        )
        print(f"筛选后保留 {len(formatted_publications)} 条 publication。")

        # Save to JS
        repo_root = os.path.dirname(os.path.abspath(__file__))
        collection_dir = os.path.join(repo_root, "collection")
        os.makedirs(collection_dir, exist_ok=True)
        js_filename = f"{safe_name}.js"
        js_filepath = os.path.join(collection_dir, js_filename)
        save_to_js(formatted_publications, js_filepath)
        print(f"Publications saved to {js_filepath}")

        commit_message = build_commit_message(author_name, formatted_publications)
        run_git_auto_flow(repo_root, js_filepath, commit_message)
        print("已自动执行 git add / git commit / git push --force")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()