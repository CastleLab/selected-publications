module.exports = [
  {
    "title": "CINA: Suppressing the Detection of Unstable Context Inconsistency",
    "date": "2015",
    "authors": [
      "Chang Xu", "Wang Xi", "Shing-Chi Cheung", "Xiaoxing Ma", "Chun Cao", "Jian Lu"
    ],
    "venue": "IEEE Transactions of Software Engineering 41(9), September 2015",
    "venueShort": "TSE",
    "tags": [],
    "abstract": `
    Context-aware applications adapt their behavior based on contexts. Contexts can, however, be incorrect. A popular means to build dependable applications is to augment them with a set of constraints to govern the consistency of context values. These constraints are evaluated upon context changes to detect inconsistencies so that they can be timely handled. However, we observe that many context inconsistencies are unstable. They vanish by themselves and do not require handling. Such inconsistencies are detected due to misaligned sensor sampling or improper inconsistency detection scheduling. We call them unstable context inconsistencies (or STINs). STINs should be avoided to prevent unnecessary inconsistency handling and unstable behavioral adaptation to applications. In this article, we study STINs systematically, from examples to theoretical analysis, and present algorithms to suppress their detection. Our key insight is that only certain patterns of context changes can make a consistency constraint subject to the detection of STINs. We derive such patterns and proactively use them to suppress the detection of STINs. We implemented our idea and applied it to real-world applications. Experimental results confirmed its effectiveness in suppressing the detection of numerous STINs with negligible overhead, while preserving the detection of stable context inconsistencies that require inconsistency handling.
    `,
    "paperUrl": "https://www.computer.org/csdl/trans/ts/2015/09/07078871-abs.html",
    
    
    "bibtex": `
@article{DBLP:journals/tse/XuXCMCL15,
  author    = {Chang Xu and
               Wang Xi and
               Shing{-}Chi Cheung and
               Xiaoxing Ma and
               Chun Cao and
               Jian Lu},
  title     = {Cina: Suppressing the Detection of Unstable Context Inconsistency},
  journal   = {{IEEE} Trans. Software Eng.},
  volume    = {41},
  number    = {9},
  pages     = {842--865},
  year      = {2015},
  url       = {http://dx.doi.org/10.1109/TSE.2015.2418760},
  doi       = {10.1109/TSE.2015.2418760},
  timestamp = {Thu, 10 Dec 2015 11:33:07 +0100},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/tse/XuXCMCL15},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]