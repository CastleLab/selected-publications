module.exports = [
  {
    "title": "CrashLocator: Locating Crashing Faults based on Crash Stacks",
    "date": "2014",
    "authors": [
      "Rongxin Wu", "Hongyu Zhang", "Shing-Chi Cheung", "Sunghun Kim"
    ],
    "venue": "International Symposium on Software Testing and Analysis (ISSTA 2014), San Jose, California, USA, July 2014",
    "venueShort": "ISSTA",
    "tags": ["Fault Localization"],
    "awards": ["Distinguished Paper"],
    "abstract": `
    Software crash is common. When a crash occurs, software developers can receive a report upon user permission. A crash report typically includes a call stack at the time of crash. An important step of debugging a crash is to identify faulty functions, which is often a tedious and labor-intensive task. In this paper, we propose CrashLocator, a method to locate faulty functions using the crash stack information in crash reports. It deduces possible crash traces (the failing execution traces that lead to crash) by expanding the crash stack with functions in static call graph. It then calculates the suspiciousness of each function in the approximate crash traces. The functions are then ranked by their suspiciousness scores and are recommended to developers for further investigation. We evaluate our approach using real-world Mozilla crash data. The results show that our approach is effective: we can locate 50.6%, 63.7% and 67.5% of crashing faults by examining top 1, 5 and 10 functions recommended by CrashLocator, respectively. Our approach outperforms the conventional stack-only methods significantly.
    `,
    "paperUrl": "http://dl.acm.org/citation.cfm?doid=2610384.2610386",
    
    
    "bibtex": `
@inproceedings{DBLP:conf/issta/WuZCK14,
  author    = {Rongxin Wu and
               Hongyu Zhang and
               Shing{-}Chi Cheung and
               Sunghun Kim},
  title     = {CrashLocator: locating crashing faults based on crash stacks},
  booktitle = {International Symposium on Software Testing and Analysis, {ISSTA}
               '14, San Jose, CA, {USA} - July 21 - 26, 2014},
  pages     = {204--214},
  year      = {2014},
  crossref  = {DBLP:conf/issta/2014},
  url       = {http://doi.acm.org/10.1145/2610384.2610386},
  doi       = {10.1145/2610384.2610386},
  timestamp = {Sun, 13 Jul 2014 13:49:26 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/issta/WuZCK14},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]