module.exports = [
  {
    "title": "Hybrid CPU-GPU Constraint Checking: Towards Efficient Context Consistency",
    "date": "2016",
    "authors": [
      "Jun Sui", "Chang Xu", "Shing-Chi Cheung", "Wang Xi", "Yanyan Jiang", "Chun Cao", "Xiaoxing Ma", "Jian Lu"
    ],
    "venue": "Information and Software Technology (IST) 2016",
    "venueShort": "IST",
    "tags": [],
    "abstract": `
    Context: modern software increasingly relies on contexts about computing environments to provide adaptive and smart services. Such contexts, captured and derived from environments of uncontrollable noises, can be inaccurate, incomplete or even in conflict with each other. This is known as the context inconsistency problem, and should be addressed by checking contexts in time to prevent abnormal behavior to applications. One popular way is to check application contexts against consistency constraints before their uses, but this can bring heavy computation due to tremendous amount of contexts in changing environments. Existing efforts improve the checking performance by incremental or concurrent computation, but they rely on CPU computing only and can consume valuable CPU capabilities that should otherwise be used by applications themselves.

Objective: in this article, we propose GAIN, a GPU-supported technique to checking consistency constraints systematically and efficiently.

Method: GAIN can automatically recognize a constraint’s parallel units and associate these units and their runtime instances with matched contexts under checking. GAIN coordinates CPU and GPU and utilizes their capabilities for task preparation and context checking, respectively.

Result: we evaluate GAIN experimentally with millions of real-life context data. The evaluation results show that GAIN can work at least 2–7 × faster and requires much less CPU usage than CPU-based techniques. Besides, GAIN can also work stably for different and varying workloads.

Conclusion: our experience with GAIN suggests its high efficiency in constraint checking for context consistency as well as its wide applicability to different application workloads.
    `,
    "paperUrl": "http://www.sciencedirect.com/science/article/pii/S095058491500169X",
    
    
    "bibtex": `
@article{Sui_IST2016,
  author    = {Jun Sui and
               Chang Xu and
               Shing{-}Chi Cheung and
               Wang Xi and
               Yanyan Jiang and
               Chun Cao and
               Xiaoxing Ma and
               Jian Lu},
  title     = {Hybrid {CPU-GPU} constraint checking: Towards efficient context consistency},
  journal   = {Information {\&} Software Technology},
  volume    = {74},
  pages     = {230--242},
  year      = {2016},
  url       = {http://dx.doi.org/10.1016/j.infsof.2015.10.003},
  doi       = {10.1016/j.infsof.2015.10.003},
  timestamp = {Mon, 25 Apr 2016 19:47:34 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/infsof/SuiXCX0CML16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]