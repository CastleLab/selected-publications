module.exports = [
  {
    "title": "CHECKERDROID: Automated Quality Assurance for Smartphone Applications",
    "date": "2014",
    "authors": [
      "Yepang Liu", "Chang Xu", "Shing-Chi Cheung", "Wenhua Yang"
    ],
    "venue": "International Journal of Software and Informatics (IJSI)",
    "venueShort": "IJSI",
    "tags": [],
    "abstract": `
    Smartphone applications’ quality is vital. However, many smartphone applications on market suffer from various bugs. One major reason is that developers lack viable techniques to help expose potential bugs in their applications. This paper presents a practical dynamic analysis tool, CheckerDroid, to help developers automatically detect both functional and non-functional bugs in their Android applications. CheckerDroid currently supports the detection of the following three types of bugs: null pointer exception, resource leak and sensor listener misusage. We built CheckerDroid by extending Java PathFinder (JPF), a widely-used model checker for general Java programs. Our extension addresses two technical challenges. First, Android applications are event-driven and lack explicit control flow information between event handlers. Second, Android applications closely hinge on native framework libraries, whose implementations are platform-dependent. To address these challenges, we derive event handler scheduling policies from Android documentations, and encode them to guide CheckerDroid to realistically execute Android applications. Besides, we modeled the side effects for a critical set of Android APIs such that CheckerDroid can conduct bug detection precisely. To evaluate CheckerDroid, we conducted experiments with seven popular real-world Android applications. CheckerDroid analyzed these applications in a few minutes, and successfully located real bugs in them.
    `,
    "paperUrl": "http://sccpu2.cse.ust.hk/andrewust/files/IJSI2014.pdf",
    
    
    "bibtex": `
@article{DBLP:journals/ijsi/LiuXCY14,
  author    = {Yepang Liu and
               Chang Xu and
               S. C. Cheung and
               Wenhua Yang},
  title     = {{CHECKERDROID} : Automated Quality Assurance for Smartphone Applications},
  journal   = {Int. J. Software and Informatics},
  volume    = {8},
  number    = {1},
  pages     = {21--41},
  year      = {2014},
  url       = {http://www.ijsi.org/ch/reader/view_abstract.aspx?file_no=i181},
  timestamp = {Sun, 14 Aug 2016 14:06:59 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/ijsi/LiuXCY14},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]