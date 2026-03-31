module.exports = [
  {
    "title": "Understanding and Detecting Fragmentation-Induced Compatibility Issues for Android Apps",
    "date": "2020",
    "authors": [
      "Lili Wei", "Yepang Liu", "Shing-Chi Cheung", "Huaxun Huang", "Xuan Lu", "Xuanzhe Liu"
    ],
    "venue": "IEEE Transactions on Software Engineering 2020",
    "venueShort": "TSE",
    "tags": ["Android", "Bug Detection"],
    "abstract": `
    Android ecosystem is heavily fragmented. The numerous combinations of different device models and operating system versions make it impossible for Android app developers to exhaustively test their apps, and thus various compatibility issues arise. Unfortunately, little is known on the characteristics of such fragmentation-induced compatibility issues. No mature tools exist to help developers quickly diagnose and fix these issues. To bridge the gap, we conducted an empirical study on 220 real-world compatibility issues collected from five popular open-source Android apps. We further interviewed Android practitioners and conducted an online survey to gain insights from real practices. Via the studies, we characterized compatibility issues, investigated common practices to handle compatibility issues, and disclosed that these issues exhibit common patterns. With these findings, we propose a technique, FicFinder, to automatically detect compatibility issues in Android apps. FicFinder performs static code analysis based on a model that captures Android APIs as well as their associated context by which compatibility issues can be triggered. FicFinder reports actionable debugging information to developers when it detects potential issues. We evaluated FicFinder with 53 large-scale open-source Android apps. The results show that FicFinder can precisely detect compatibility issues in these apps and uncover previously-unknown issues.
    `,
    "paperUrl": "materials/TSE19-lili.pdf",
    
    
    "bibtex": `
@ARTICLE{DBLP:journals/tse/WeiLCHLL20,
  author    = {Lili Wei and
               Yepang Liu and
               Shing{-}Chi Cheung and
               Huaxun Huang and
               Xuan Lu and
               Xuanzhe Liu},
  title     = {Understanding and Detecting Fragmentation-Induced Compatibility Issues
               for Android Apps},
  journal   = {{IEEE} Trans. Software Eng.},
  volume    = {46},
  number    = {11},
  pages     = {1176--1199},
  year      = {2020},
  url       = {https://doi.org/10.1109/TSE.2018.2876439},
  doi       = {10.1109/TSE.2018.2876439},
  timestamp = {Thu, 31 Dec 2020 01:35:38 +0100},
  biburl    = {https://dblp.org/rec/journals/tse/WeiLCHLL20.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `
  }
]