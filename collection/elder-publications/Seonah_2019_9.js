module.exports = [
  {
    "title": "Automatic Detection and Update Suggestion for Outdated API Names in Documentation",
    "date": "2021",
    "authors": [
      "Seonah Lee", "Rongxin Wu", "Shing-Chi Cheung", "Sungwon Kang"
    ],
    "venue": "IEEE Transactions on Software Engineering 2021",
    "venueShort": "TSE",
    "tags": ["Software Analytics", "API Misuse"],
    "abstract": `
    Application programming interfaces (APIs) continually evolve to meet ever-changing user needs, and documentation provides an authoritative reference for their usage. However, API documentation is commonly outdated because nearly all of the associated updates are performed manually. Such outdated documentation, especially with regard to API names, causes major software development issues. In this paper, we propose a method for automatically updating outdated API names in API documentation. Our insight is that API updates in documentation can be derived from API implementation changes between code revisions. To evaluate the proposed method, we applied it to four open source projects. Our evaluation results show that our method, FreshDoc, detects outdated API names in API documentation with 48% higher accuracy than the existing state-of-the-art methods do. Moreover, when we checked the updates suggested by FreshDoc against the developers? manual updates in the revised documentation, FreshDoc addressed 82% of the outdated names. When we reported 40 outdated API names found by FreshDoc via issue tracking systems, developers accepted 75% of the suggestions. These evaluation results indicate that FreshDoc can be used as a practical method for the detection and updating of API names in the associated documentation.
    `,
    "paperUrl": "materials/TSE19-lee.pdf",
    
    
    "bibtex": `
@article{DBLP:journals/tse/LeeWCK21,
  author    = {Seonah Lee and
               Rongxin Wu and
               Shing{-}Chi Cheung and
               Sungwon Kang},
  title     = {Automatic Detection and Update Suggestion for Outdated {API} Names
               in Documentation},
  journal   = {{IEEE} Trans. Software Eng.},
  volume    = {47},
  number    = {4},
  pages     = {653--675},
  year      = {2021},
  url       = {https://doi.org/10.1109/TSE.2019.2901459},
  doi       = {10.1109/TSE.2019.2901459},
  timestamp = {Thu, 29 Apr 2021 15:14:58 +0200},
  biburl    = {https://dblp.org/rec/journals/tse/LeeWCK21.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `
  }
]