module.exports = [
  {
    "title": "Coverage-Driven Test Code Generation for Concurrent Classes",
    "date": "2016",
    "authors": [
      "Valerio Terragni", "Shing-Chi Cheung"
    ],
    "venue": "38th International Conference on Software Engineering (ICSE 2016), Austin, TX, USA, May 2016",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    Previous techniques on concurrency testing have mainly focused on exploring the interleaving space of manually written test code to expose faulty interleavings of shared memory accesses. These techniques assume the availability of failure-inducing tests. In this paper, we present AutoConTest, a coverage-driven approach to generate effective concurrent test code that achieve high interleaving coverage. AutoConTest consists of three components. First, it computes the coverage requirements dynamically and iteratively during sequential test code generation, using a coverage metric that captures the execution context of shared memory accesses. Second, it smartly selects these sequential codes based on the computed result and assembles them for concurrent tests, achieving increased context-sensitive interleaving coverage. Third, it explores the newly covered interleavings. We have implemented AutoConTest as an automated tool and evaluated it using 6 real-world concurrent Java subjects. The results show that AutoConTest is able to generate effective concurrent tests that achieve high interleaving coverage and expose concurrency faults quickly. AutoConTest took less than 65 seconds (including program analysis, test generation and execution) to expose the faults in the program subjects.
    `,
    "paperUrl": "http://www.cse.ust.hk/~vterragni/files/Terragni_ICSE2016.pdf",
    
    
    "bibtex": `
@inproceedings{Terragni_ICSE16,
  author    = {Valerio Terragni and
               Shing{-}Chi Cheung},
  title     = {Coverage-driven test code generation for concurrent classes},
  booktitle = {Proceedings of the 38th International Conference on Software Engineering,
               {ICSE} 2016, Austin, TX, USA, May 14-22, 2016},
  pages     = {1121--1132},
  year      = {2016},
  url       = {http://doi.acm.org/10.1145/2884781.2884876}
}
    `
  }
]