module.exports = [
  {
    "title": "Testing Multithreaded Programs via Thread Speed Control",
    "date": "2018",
    "authors": [
      "Dongjie Chen", "Yanyan Jiang", "Chang Xu", "Xiaoxing Ma", "Jian Lu"
    ],
    "venue": "26th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2018), Lake Buena Vista, Florida, USA, Nov 2018",
    "venueShort": "ESEC/FSE",
    "tags": [],
    "abstract": `
    Intensive dependencies of a Java project on third-party libraries can easily lead to the presence of multiple library or class versions on its classpath. When this happens, JVM will load one version and shadows the others. Dependency conflict (DC) issues occur when the loaded version fails to cover a required feature (e.g., method) referenced by the project, thus causing runtime exceptions. However, the warnings of duplicate classes or libraries detected by existing build tools such as Maven can be benign since not all instances of duplication will induce runtime exceptions, and hence are often ignored by developers. In this paper, we conducted an empirical study on real-world DC issues collected from large open source projects. We studied the manifestation and fixing patterns of DC issues. Based on our findings, we designed Decca, an automated detection tool that assesses DC issues' severity and filters out the benign ones. Our evaluation results on 30 projects show that Decca achieves a precision of 0.923 and recall of 0.766 in detecting high-severity DC issues. Decca also detected new DC issues in these projects. Subsequently, 20 DC bug reports were filed, and 11 of them were confirmed by developers. Issues in 6 reports were fixed with our suggested patches.
    `,
    "paperUrl": "https://cs.nju.edu.cn/changxu/1_publications/ESECFSE18.pdf",
    "projectUrl": "https://midwinter1993.github.io/Schnauzer/",
    
    "bibtex": `
@inproceedings{chen_testing_2018,
  author    = {Dongjie Chen and Yanyan Jiang and Chang Xu and Xiaoxing Ma and Jian Lu},
  title     = {Testing multithreaded programs via thread speed control},
  pages     = {to appear},
  year      = {2018},
  booktitle = {Proceedings of the 26th Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE)},
  pdf       = {/spar/publication/chen_testing_2018.pdf},
  code      = {https://midwinter1993.github.io/Schnauzer/},
}
    `
  }
]