module.exports = [
  {
    "title": "Automatic Spreadsheet Cell Clustering and Smell Detection Using Strong and Weak Features",
    "date": "2016",
    "authors": [
      "Shing-Chi Cheung", "Wanjun Chen", "Yepang Liu", "Chang Xu"
    ],
    "venue": "38th International Conference on Software Engineering (ICSE 2016), Austin, TX, USA, May 2016",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    Various techniques have been proposed to detect smells in spreadsheets, which are susceptible to errors. These techniques typically detect spreadsheet smells through a mechanism based on a fixed set of patterns or metric thresholds. Unlike conventional programs, tabulation styles vary greatly across spreadsheets. Smell detection based on fixed patterns or metric thresholds, which are insensitive to the varying tabulation styles, can miss many smells in one spreadsheet while reporting many spurious smells in another. In this paper, we propose CUSTODES to effectively cluster spreadsheet cells and detect smells in these clusters. The clustering mechanism can automatically adapt to the tabulation styles of each spreadsheet using strong and weak features. These strong and weak features capture the invariant and variant parts of tabulation styles, respectively. As smelly cells in a spreadsheet normally occur in minority, they can be mechanically detected as clusters' outliers in feature spaces. We implemented and applied CUSTODES to 70 spreadsheets files randomly sampled from the EUSES corpus. These spreadsheets contain 1,610 formula cell clusters. Experimental results confirmed that CUSTODES is effective. It successfully detected harmful smells that can induce computation anomalies in spreadsheets with an F-measure of 0.72, outperforming state-of-the-art techniques.
    `,
    "paperUrl": "http://doi.acm.org/10.1145/2884781.2884796",
    "projectUrl": "http://sccpu2.cse.ust.hk/custodes/",
    "slidesUrl": "http://sccpu2.cse.ust.hk/castle/materials/Custodes.4.pdf",
    "bibtex": `
@inproceedings{Cheung_ICSE2016,
  author    = {Shing{-}Chi Cheung and
               Wanjun Chen and
               Yepang Liu and
               Chang Xu},
  title     = {{CUSTODES:} automatic spreadsheet cell clustering and smell detection
               using strong and weak features},
  booktitle = {Proceedings of the 38th International Conference on Software Engineering,
               {ICSE} 2016, Austin, TX, USA, May 14-22, 2016},
  pages     = {464--475},
  year      = {2016},
  crossref  = {DBLP:conf/icse/2016},
  url       = {http://doi.acm.org/10.1145/2884781.2884796},
  doi       = {10.1145/2884781.2884796},
  timestamp = {Sun, 15 May 2016 11:55:22 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/icse/CheungCLX16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]