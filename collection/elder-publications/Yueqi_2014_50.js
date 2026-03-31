module.exports = [
  {
    "title": "Symbolic State Validation through Runtime Data",
    "date": "2014",
    "authors": [
      "Yueqi Li", "Shing-Chi Cheung"
    ],
    "venue": "29th IEEE/ACM International Conference on Automated Software Engineering (ASE 2014), Vasteras, Sweden, September 2014",
    "venueShort": "ASE",
    "tags": [],
    "abstract": `
    Real world programs are typically built on top of many library functions. Symbolic analysis of these programs generally requires precise models of these functions? Application Programming Interfaces (APIs), which are mostly unavailable because these models are costly to construct. A variant approach of symbolic analysis is to over-approximate the return values of those APIs that have not been modeled. However, such approximation can induce many unreachable symbolic states, which are expensive to validate manually. In this paper, we propose a static approach to automatically validating the reported anomalous symbolic states. The validation makes use of the available runtime data of the un-modeled APIs collected from previous program executions. We show that the symbolic state validation problem can be cast as a MAX-SAT problem and solved by existing constraint solvers.

Our approach is motivated by two observations. We may bind the symbolic parameters in un-modeled APIs based on observations made in former executions by other programs. The binding enables us to use the corresponding observed concrete return values of APIs to validate the symbolic states arising from the over-approximated return values of the un-modeled APIs. Second, some symbolic constraints can be accurately evaluated despite the imprecision of the over-approximated symbolic values.

Our technique found 80 unreported bugs when it was applied to 10 popular programs with a total of 1.5 million lines of code. All of them can be confirmed by test cases. Our technique presents a promising way to apply the big data paradigm to software engineering. It provides a mechanism to validate the symbolic states of a project by leveraging the many concrete input-output values of APIs collected from other projects.
    `,
    "paperUrl": "http://dl.acm.org/citation.cfm?doid=2642937.2642973",
    
    
    "bibtex": `
@inproceedings{DBLP:conf/kbse/LiC14,
  author    = {Yueqi Li and
               Shing{-}Chi Cheung},
  title     = {Symbolic state validation through runtime data},
  booktitle = {{ACM/IEEE} International Conference on Automated Software Engineering,
               {ASE} '14, Vasteras, Sweden - September 15 - 19, 2014},
  pages     = {187--198},
  year      = {2014},
  crossref  = {DBLP:conf/kbse/2014},
  url       = {http://doi.acm.org/10.1145/2642937.2642973},
  doi       = {10.1145/2642937.2642973},
  timestamp = {Fri, 07 Nov 2014 12:44:47 +0100},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/kbse/LiC14},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]