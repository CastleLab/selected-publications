module.exports = [
    {
        title: "Will Dependency Conflicts Affect My Program's Semantics?",
        date: "2021",
        authors: [
            "Ying Wang", "Rongxin Wu", "Chao Wang", "Ming Wen", "Yepang Liu", "Shing-Chi Cheung", "Hai Yu", "Chang Xu", "Zhiliang Zhu"
        ],
        venue: "IEEE Transactions on Software Engineering",
        venueShort: "TSE",
        tags: [
            "Third-Party Libraries", "Java", "Dependency Management"
        ],
        abstract: `
        Java projects are often built on top of various third-party libraries. If multiple versions of a library exist on the classpath, JVM will only load one version and shadow the others, which we refer to as dependency conflicts. This would give rise to semantic conflict (SC) issues, if the library APIs referenced by a project have identical method signatures but inconsistent semantics across the loaded and shadowed versions of libraries. SC issues are difficult for developers to diagnose in practice, since understanding them typically requires domain knowledge. Although adapting the existing test generation technique for dependency conflict issues, Riddle, to detect SC issues is feasible, its effectiveness is greatly compromised. This is mainly because Riddle randomly generates test inputs, while the SC issues typically require specific arguments in the tests to be exposed. To address that, we conducted an empirical study of 316 real SC issues to understand the characteristics of such specific arguments in the test cases that can capture the SC issues. Inspired by our empirical findings, we propose an automated testing technique Sensor, which synthesizes test cases using ingredients from the project under test to trigger inconsistent behaviors of the APIs with the same signatures in conflicting library versions. Our evaluation results show that Sensor is effective and useful: it achieved a Precision of 0.898 and a Recall of 0.725 on open-source projects and a Precision of 0.821 on industrial projects; it detected 306 semantic conflict issues in 50 projects, 70.4% of which had been confirmed as real bugs, and 84.2% of the confirmed issues have been fixed quickly.
        `,
        projectUrl: "https://sensordc.github.io/",
        paperUrl: "https://ieeexplore.ieee.org/document/9350237",
        slidesUrl: "",
        bibtex: `
@article{YingSensor,
  author    = {Ying Wang and
               Rongxin Wu and
               Chao Wang and
               Ming Wen and
               Yepang Liu and
               Shing{-}Chi Cheung
               Hai Yu and
               Chang Xu
               and Zhiliang Zhu},
  title     = {Will Dependency Conflicts Affect My Program's Semantics?},
  journal   = {{IEEE} Transactions on Software Engineering},
  volume    = {99},
  number    = {1},
  pages     = {1--22},
  year      = {2021},
  url       = {https://ieeexplore.ieee.org/document/9350237},
  doi       = {10.1109/TSE.2021.3057767},
  timestamp = {Fri, 08 February 2021 21:56:08 +0200},
  biburl    = {https://dblp.org/rec/journals/tsc/WangHXZC20.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
            }
        `
    },
    {
        title: "Hero: On the Chaos When PATH Meets Modules",
        date: "2021",
        authors: [
            "Ying Wang", "Liang Qiao", "Chang Xu", "Yepang Liu", "Shing-Chi Cheung", "Na Meng", "Hai Yu", "Zhiliang Zhu"
        ],
        venue: "Proceedings of the 43rd International Conference on Software Engineering (ICSE ’21)",
        venueShort: "ICSE",
        tags: [
            "Third-Party Libraries", "Golang", "Dependency Management"
        ],
        awards: [
            "Distinguished Paper",
        ],
        abstract: `
        Ever since its first release in 2009, the Go programming language (Golang) has been well received by software communities. A major reason for its success is the powerful support of library-based development, where a Golang project can be conveniently built on top of other projects by referencing them as libraries. As Golang evolves, it recommends the use of a new library-referencing mode to overcome the limitations of the original one. While these two library modes are incompatible, both are supported by the Golang ecosystem. The heterogeneous use of library-referencing modes across Golang projects has caused numerous dependency management (DM) issues, incurring reference inconsistencies and even build failures. Motivated by the problem, we conducted an empirical study to characterize the DM issues, understand their root causes, and examine their fixing solutions. Based on our findings, we developed Hero, an automated technique to detect DM issues and suggest proper fixing solutions. We applied Hero to 19,000 popular Golang projects. The results showed that Hero achieved a high detection rate of 98.5% on a DM issue benchmark and found 2,422 new DM issues in 2,356 popular Golang projects. We reported 280 issues, among which 181 (64.6%) issues have been confirmed, and 160 of them (88.4%) have been fixed or are under fixing. Almost all the fixes have adopted our fixing suggestions.
        `,
        projectUrl: "http://www.hero-go.com/",
        paperUrl: "https://conf.researchr.org/details/icse-2021/icse-2021-papers/16/Hero-On-the-Chaos-When-PATH-Meets-Modules",
        slidesUrl: "",
        bibtex: `
@inproceedings{YingHero,
  author    = {Ying Wang and
               Liang Qiao and
               Chang Xu and
               Yepang Liu and
               Shing{-}Chi Cheung and
               Na Meng and
               Hai Yu and 
               Zhiliang Zhu},
  title     = {Hero: On the Chaos When PATH Meets Modules},
  booktitle = {{ICSE} '21: 43rd International Conference on Software Engineering, Virtual
               Event, Spain, May 23-29, 2021},
  pages     = {99--111},
  publisher = {{IEEE}},
  year      = {2021},
  url       = {https://ieeexplore.ieee.org/document/9401974},
  doi       = {10.1109/ICSE43902.2021.00022},
  timestamp = {22-30 May 2021 10:58:23 +0100},
  biburl    = {https://dblp.org/rec/conf/sigsoft/ZhangRC0C020.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
        `
    },
    {
        title: "Watchman: Monitoring Dependency Conflicts for Python Library Ecosystem",
        date: "2020",
        authors: [
            "Ying Wang", "Ming Wen", "Yepang Liu", "Yibo Wang", "Zhenming Li", "Chao Wang", "Shing-Chi Cheung", "Hai Yu", "Chang Xu", "Zhiliang Zhu"
        ],
        venue: "Proceedings of the 42rd International Conference on Software Engineering (ICSE ’20)",
        venueShort: "ICSE",
        tags: [
            "Third-Party Libraries", "Python", "Dependency Management"
        ],
        abstract: `
        The PyPI ecosystem has indexed millions of Python libraries to allow developers to automatically download and install dependencies of their projects based on the specified version constraints. Despite the convenience brought by automation, version constraints in Python projects can easily conflict, resulting in build failures. We refer to such conflicts as Dependency Conflict (DC) issues. Although DC issues are common in Python projects, developers lack tool support to gain a comprehensive knowledge for diagnosing the root causes of these issues. In this paper, we conducted an empirical study on 235 real-world DC issues. We studied the manifestation patterns and fixing strategies of these issues and found several key factors that can lead to DC issues and their regressions. Based on our findings, we designed and implemented Watchman, a technique to continuously monitor dependency conflicts for the PyPI ecosystem. In our evaluation, Watchman analyzed PyPI snapshots between 11 Jul 2019 and 16 Aug 2019, and found 117 potential DC issues. We reported these issues to the developers of the corresponding projects. So far, 63 issues have been confirmed, 38 of which have been quickly fixed by applying our suggested patches.
        `,
        projectUrl: "http://www.watchman-pypi.com/",
        paperUrl: "https://dl.acm.org/doi/abs/10.1145/3377811.3380426",
        slidesUrl: "https://blog.acolyer.org/2020/09/21/watchman/",
        bibtex: `
@inproceedings{YingWatchman,
  author    = {Ying Wang and
               Ming Wen and
               Yepang Liu and
               Yibo Wang and
               Zhenming Li and
               Chao Wang and
               Shing{-}Chi Cheung and
               Hai Yu and
               Chang Xu and
               Zhiliang Zhu
            },
  title     = {Watchman: Monitoring Dependency Conflicts for Python Library Ecosystem},
  booktitle = {{ICSE} '20: 42nd International Conference on Software Engineering, Virtual
                Event, Spain, July 6-11, 2020},
  pages     = {125--135},
  publisher = {{ACM}},
  year      = {2020},
  url       = {https://dl.acm.org/doi/abs/10.1145/3377811.3380426},
  doi       = {10.1145/3377811.3380426},
  timestamp = {Mon, 27 July 2020 16:42:27 +0200},
  biburl    = {https://dblp.uni-trier.de/db/conf/icse/icse2020.html},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
        `
    }
]