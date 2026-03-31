module.exports = [
  {
    "title": "Do the Dependency Conflicts in My Project Matter?",
    "date": "2018",
    "authors": [
      "Ying Wang", "Ming Wen", "Zhenwei Liu", "Rongxin Wu", "Rui Wang", "Bo Yang", "Hai Yu", "Zhiliang Zhu", "Shing-Chi Cheung"
    ],
    "venue": " The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering, Technical Research Paper, Lake Buena Vista, Florida, 4 Nov - 9 Nov 2018",
    "venueShort": "ESEC/FSE",
    "tags": [],
    "abstract": `
    Intensive dependencies of a Java project on third-party libraries can easily lead to the presence of multiple library or class versions on its classpath. When this happens, JVM will load one version and shadows the others. Dependency conflict (DC) issues occur when the loaded version fails to cover a required feature (e.g., method) referenced by the project, thus causing runtime exceptions. However, the warnings of duplicate classes or libraries detected by existing build tools such as Maven can be benign since not all instances of duplication will induce runtime exceptions, and hence are often ignored by developers. In this paper, we conducted an empirical study on real-world DC issues collected from large open source projects. We studied the manifestation and fixing patterns of DC issues. Based on our findings, we designed Decca, an automated detection tool that assesses DC issues' severity and filters out the benign ones. Our evaluation results on 30 projects show that Decca achieves a precision of 0.923 and recall of 0.766 in detecting high-severity DC issues. Decca also detected new DC issues in these projects. Subsequently, 20 DC bug reports were filed, and 11 of them were confirmed by developers. Issues in 6 reports were fixed with our suggested patches.
    `,
    "paperUrl": "materials/fse18-ying.pdf",
    "projectUrl": "https://deccadc.github.io/fse18/",
    "slidesUrl": "materials/fse18-ying-slides.pdf",
    "bibtex": `
@inproceedings{wang2018conflict,
 title={Do the Dependency Conflicts in My Project Matter?},
 author={Wang, Ying and Wen, Ming and Liu, Zhenwei and Wu, Rongxin and Wang, Rui and Yang, Bo and Yu, Hai and Zhu, Zhiliang and Cheung, Shing-Chi},
 booktitle={Proceedings of the 2018 26th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2018)},
 pages={1--12},
 year={2018},
 organization={ACM}
}
    `
  }
]