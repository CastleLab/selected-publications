module.exports = [
  {
    "title": "Characterizing and Detecting Performance Bugs for Smartphone Applications",
    "date": "2014",
    "authors": [
      "Yepang Liu", "Chang Xu", "Shing-Chi Cheung"
    ],
    "venue": "36th International Conference on Software Engineering (ICSE 2014), Hyderabad, India, May-Jun 2014",
    "venueShort": "ICSE",
    "tags": ["Android", "Empirical Study"],
    "awards": [
      "Distinguished Paper",
    ],
    "abstract": `
    Smartphone applications’ performance has a vital impact on user experience. However, many smartphone applications suffer from bugs that cause significant performance degradation, thereby losing their competitive edge. Unfortunately, people have little understanding of these performance bugs. They also lack effective techniques to fight with such bugs. To bridge this gap, we conducted a study of 70 real-world performance bugs collected from eight large-scale and popular Android applications. We studied the characteristics (e.g., bug types and how they manifested) of these bugs and identified their common patterns. These findings can support follow-up research on performance bug avoidance, testing, debugging and analysis for smartphone applications. To demonstrate the usefulness of our findings, we implemented a static code analyzer, PerfChecker, to detect our identified performance bug patterns. We experimentally evaluated PerfChecker by applying it to 29 popular Android applications, which comprise 1.1 million lines of Java code. PerfChecker successfully detected 126 matching instances of our performance bug patterns. Among them, 68 were quickly confirmed by developers as previouslynunknown issues that affect application performance, and 20 were fixed soon afterwards by following our optimization suggestions.
    `,
    "paperUrl": "http://sccpu2.cse.ust.hk/andrewust/files/ICSE2014.pdf",
    "projectUrl": "http://sccpu2.cse.ust.hk/perfchecker",
    
    "bibtex": `
@inproceedings{DBLP:conf/icse/LiuXC14,
  author    = {Yepang Liu and
               Chang Xu and
               Shing{-}Chi Cheung},
  title     = {Characterizing and detecting performance bugs for smartphone applications},
  booktitle = {36th International Conference on Software Engineering, {ICSE} '14,
               Hyderabad, India - May 31 - June 07, 2014},
  pages     = {1013--1024},
  year      = {2014},
  crossref  = {DBLP:conf/icse/2014},
  url       = {http://doi.acm.org/10.1145/2568225.2568229},
  doi       = {10.1145/2568225.2568229},
  timestamp = {Sun, 18 May 2014 16:12:57 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/icse/LiuXC14},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]