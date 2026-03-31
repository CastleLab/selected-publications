module.exports = [
  {
    "title": "Casper: An Efficient Approach to Call Trace Collection",
    "date": "2016",
    "authors": [
      "Rongxin Wu", "Xiao Xiao", "Shing-Chi Cheung", "Hongyu Zhang", "Charles Zhang"
    ],
    "venue": "43rd ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages (POPL 2016)",
    "venueShort": "POPL",
    "tags": [],
    "abstract": `
    Call traces, i.e., sequences of function calls and returns, are fundamental to a wide range of program analyses such as bug reproduction, fault diagnosis, performance analysis, and many others. The conventional approach to collect call traces that instruments each function call and return site incurs large space and time overhead. Our approach aims at reducing the recording overheads by instrumenting only a small amount of call sites while keeping the capability of recovering the full trace. We propose a call trace model and a logged call trace model based on an LL(1) grammar, which enables us to define the criteria of a feasible solution to call trace collection. Based on the two models, we prove that to collect call traces with minimal instrumentation is an NP-hard problem. We then propose an efficient approach to obtaining a suboptimal solution. We implemented our approach as a tool Casper and evaluated it using the DaCapo benchmark suite. The experiment results show that our approach causes significantly lower runtime (and space) overhead than two state-of-the-arts approaches.
    `,
    "paperUrl": "http://home.cse.ust.hk/~wurongxin/files/wurongxin_popl2016.pdf",
    
    
    "bibtex": `
@inproceedings{Wu_POPL2016,
  author    = {Rongxin Wu and
               Xiao Xiao and
               Shing{-}Chi Cheung and
               Hongyu Zhang and
               Charles Zhang},
  title     = {Casper: an efficient approach to call trace collection},
  booktitle = {Proceedings of the 43rd Annual {ACM} {SIGPLAN-SIGACT} Symposium on
               Principles of Programming Languages, {POPL} 2016, St. Petersburg,
               FL, USA, January 20 - 22, 2016},
  pages     = {678--690},
  year      = {2016},
  crossref  = {DBLP:conf/popl/2016},
  url       = {http://doi.acm.org/10.1145/2837614.2837619},
  doi       = {10.1145/2837614.2837619},
  timestamp = {Wed, 09 Mar 2016 08:11:59 +0100},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/popl/WuXCZZ16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]