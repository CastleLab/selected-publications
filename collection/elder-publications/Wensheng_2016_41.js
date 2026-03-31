module.exports = [
  {
    "title": "VEnron: A Versioned Spreadsheet Corpus and Related Evolution Analysis",
    "date": "2016",
    "authors": [
      "Wensheng Dou", "Liang Xu", "Shing-Chi Cheung", "Chushu Gao", "Jun Wei", "Tao Huang"
    ],
    "venue": "38th International Conference on Software Engineering (ICSE 2016 - SEIP), Companion Volume, Austin, TX, USA, May 2016",
    "venueShort": "ICSE SEIP",
    "tags": [],
    "abstract": `
    In this paper, we propose a semi-automated approach that leverages spreadsheets’ contexts (e.g., attached emails) and contents to identify evolved spreadsheets and recover the embedded version information. We apply it to the released email archive of the Enron Corporation and build an industrial-scale, versioned spreadsheet corpus VEnron. Our approach first clusters spreadsheets that likely evolved from one to another into evolution groups based on various fragmented information, such as spreadsheet filenames, spreadsheet contents, and spreadsheet-attached emails. Then, it recovers the version information of the spreadsheets in each evolution group. VEnron enables us to identify interesting issues that can arise from spreadsheet evolution. For example, the versioned spreadsheets popularly exist in the Enron email archive; changes in formulas are common; and some groups (16.9%) can introduce new errors during evolution.
According to our knowledge, VEnron is the first spreadsheet corpus with version information. It provides a valuable resource to understand issues arising from spreadsheet evolution.
    `,
    "paperUrl": "http://delivery.acm.org/10.1145/2890000/2889238/p162-dou.pdf?ip=175.159.126.8&id=2889238&acc=ACTIVE%20SERVICE&key=CDD1E79C27AC4E65%2EFC30B8D6EF32B758%2E4D4702B0C3E38B35%2E4D4702B0C3E38B35&CFID=836117825&CFTOKEN=34377724&__acm__=1473671848_9a79ceac0a81a74ac3ee0d6561cb8330",
    "projectUrl": "http://sccpu2.cse.ust.hk/venron/",
    
    "bibtex": `
@inproceedings{Dou_ICSE2016,
  author    = {Wensheng Dou and
               Liang Xu and
               Shing{-}Chi Cheung and
               Chushu Gao and
               Jun Wei and
               Tao Huang},
  title     = {VEnron: a versioned spreadsheet corpus and related evolution analysis},
  booktitle = {Proceedings of the 38th International Conference on Software Engineering,
               {ICSE} 2016, Austin, TX, USA, May 14-22, 2016 - Companion Volume},
  pages     = {162--171},
  year      = {2016},
  crossref  = {DBLP:conf/icse/2016c},
  url       = {http://doi.acm.org/10.1145/2889160.2889238},
  doi       = {10.1145/2889160.2889238},
  timestamp = {Sun, 15 May 2016 12:23:10 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/icse/DouXCGWH16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]