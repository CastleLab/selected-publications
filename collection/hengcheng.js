module.exports = [
    {
        "title": "StubCoder: Automated Generation and Repair of Stub Code for Mock Objects",
        "date": "2023",
        "authors": [
            "Hengcheng Zhu",
            "Lili Wei",
            "Valerio Terragni",
            "Yepang Liu", "Shing-Chi Cheung",
            "Jiarong Wu",
            "Qin Sheng",
            "Bing Zhang",
            "Lihong Song"
        ],
        "venue": "ACM Transactions on Software Engineering and Methodology",
        "venueShort": "TOSEM",
        "tags": [
            "Mocking",
            "Unit Test"
        ],
        "abstract": "Mocking is an essential unit testing technique for isolating the class under test (CUT) from its dependencies. Developers often leverage mocking frameworks to develop stub code that specifies the behaviors of mock objects. However, developing and maintaining stub code is labor-intensive and error-prone. In this paper, we present StubCoder to automatically generate and repair stub code for regression testing. StubCoder implements a novel evolutionary algorithm that synthesizes test-passing stub code guided by the runtime behavior of test cases. We evaluated our proposed approach on 59 test cases from 13 open-source projects. Our evaluation results show that StubCoder can effectively generate stub code for incomplete test cases without stub code and repair obsolete test cases with broken stub code.",
        "paperUrl": "https://doi.org/10.1145/3617171",
        "projectUrl": "https://github.com/henryhchchc",
        "bibtex": `
        @article{10.1145/3617171,
        author = {Zhu, Hengcheng and Wei, Lili and Terragni, Valerio and Liu, Yepang and Cheung, Shing-Chi and Wu, Jiarong and Sheng, Qin and Zhang, Bing and Song, Lihong},
        title = {StubCoder: Automated Generation and Repair of Stub Code for Mock Objects},
        year = {2023},
        publisher = {Association for Computing Machinery},
        address = {New York, NY, USA},
        issn = {1049-331X},
        url = {https://doi.org/10.1145/3617171},
        doi = {10.1145/3617171},
        abstract = {Mocking is an essential unit testing technique for isolating the class under test (CUT) from its dependencies. Developers often leverage mocking frameworks to develop stub code that specifies the behaviors of mock objects. However, developing and maintaining stub code is labor-intensive and error-prone. In this paper, we present StubCoder to automatically generate and repair stub code for regression testing. StubCoder implements a novel evolutionary algorithm that synthesizes test-passing stub code guided by the runtime behavior of test cases. We evaluated our proposed approach on 59 test cases from 13 open-source projects. Our evaluation results show that StubCoder can effectively generate stub code for incomplete test cases without stub code and repair obsolete test cases with broken stub code.},
        note = {Just Accepted},
        journal = {ACM Trans. Softw. Eng. Methodol.},
        month = {aug},
        keywords = {Test Generation and Repair, Genetic Programming, Software Testing, Mocking, Evolutionary Computation, Program Analysis}
        }
        `
    },
    {
        "title": "MockSniffer: Characterizing and Recommending Mocking Decisions for Unit Tests",
        "date": "2020",
        "authors": [
            "Hengcheng Zhu", "Lili Wei", "Ming Wen", "Yepang Liu", "Shing-Chi Cheung", "Qin Sheng", "Cui Zhou"
        ],
        "venue": "IEEE/ACM International Conference on Automated Software Engineering",
        "venueShort": "ASE",
        "tags": [
            "Mocking",
            "Unit Test"
        ],
        "abstract": "In unit testing, mocking is popularly used to ease test effort, reduce test flakiness, and increase test coverage by replacing the actual dependencies with simple implementations. However, there are no clear criteria to determine which dependencies in a unit test should be mocked. Inappropriate mocking can have undesirable consequences: under-mocking could result in the inability to isolate the class under test (CUT) from its dependencies while over-mocking increases the developers' burden on maintaining the mocked objects and may lead to spurious test failures. According to existing work, various factors can determine whether a dependency should be mocked. As a result, mocking decisions are often difficult to make in practice. Studies on the evolution of mocked objects also showed that developers tend to change their mocking decisions: 17% of the studied mocked objects were introduced sometime after the test scripts were created and another 13% of the originally mocked objects eventually became unmocked. In this work, we are motivated to develop an automated technique to make mocking recommendations to facilitate unit testing. We studied 10,846 test scripts in four actively maintained open-source projects that use mocked objects, aiming to characterize the dependencies that are mocked in unit testing. Based on our observations on mocking practices, we designed and implemented a tool, MockSniffer, to identify and recommend mocks for unit tests. The tool is fully automated and requires only the CUT and its dependencies as input. It leverages machine learning techniques to make mocking recommendations by holistically considering multiple factors that can affect developers' mocking decisions. Our evaluation of MockSniffer on ten open-source projects showed that it outperformed three baseline approaches, and achieved good performance in two potential application scenarios.",
        "paperUrl": "https://doi.org/10.1145/3324884.3416539",
        "projectUrl": "https://github.com/henryhchchc/MockSniffer",
        "bibtex": `
        @inproceedings{10.1145/3324884.3416539,
            author = {Zhu, Hengcheng and Wei, Lili and Wen, Ming and Liu, Yepang and Cheung, Shing-Chi and Sheng, Qin and Zhou, Cui},
            title = {MockSniffer: Characterizing and Recommending Mocking Decisions for Unit Tests},
            year = {2020},
            isbn = {9781450367684},
            publisher = {Association for Computing Machinery},
            address = {New York, NY, USA},
            url = {https://doi.org/10.1145/3324884.3416539},
            doi = {10.1145/3324884.3416539},
            abstract = {In unit testing, mocking is popularly used to ease test effort, reduce test flakiness, and increase test coverage by replacing the actual dependencies with simple implementations. However, there are no clear criteria to determine which dependencies in a unit test should be mocked. Inappropriate mocking can have undesirable consequences: under-mocking could result in the inability to isolate the class under test (CUT) from its dependencies while over-mocking increases the developers' burden on maintaining the mocked objects and may lead to spurious test failures. According to existing work, various factors can determine whether a dependency should be mocked. As a result, mocking decisions are often difficult to make in practice. Studies on the evolution of mocked objects also showed that developers tend to change their mocking decisions: 17% of the studied mocked objects were introduced sometime after the test scripts were created and another 13% of the originally mocked objects eventually became unmocked. In this work, we are motivated to develop an automated technique to make mocking recommendations to facilitate unit testing. We studied 10,846 test scripts in four actively maintained open-source projects that use mocked objects, aiming to characterize the dependencies that are mocked in unit testing. Based on our observations on mocking practices, we designed and implemented a tool, MockSniffer, to identify and recommend mocks for unit tests. The tool is fully automated and requires only the CUT and its dependencies as input. It leverages machine learning techniques to make mocking recommendations by holistically considering multiple factors that can affect developers' mocking decisions. Our evaluation of MockSniffer on ten open-source projects showed that it outperformed three baseline approaches, and achieved good performance in two potential application scenarios.},
            booktitle = {Proceedings of the 35th IEEE/ACM International Conference on Automated Software Engineering},
            pages = {436–447},
            numpages = {12},
            keywords = {unit testing, dependencies, recommendation system, mocking},
            location = {Virtual Event, Australia},
            series = {ASE '20}
        }
        `
    },
    {
        "title": "How Do Python Framework APIs Evolve? An Exploratory Study",
        "date": "2020",
        "authors": [
            "Zhaoxu Zhang", "Hengcheng Zhu", "Ming Wen", "Yida Tao", "Yepang Liu", "Yingfei Xiong"
        ],
        "venue": "International Conference on Software Analysis, Evolution and Reengineering",
        "venueShort": "SANER",
        "tags": [
            "Python",
            "API Evolution"
        ],
        "abstract": "Python is a popular dynamic programming language. In recent years, many frameworks implemented in Python have been widely used for data science and web development. Similar to frameworks in other languages, the APIs provided by Python frameworks often evolve, which would inevitably induce compatibility issues in client applications. While existing work has studied the evolution of frameworks in static programming languages such as Java, little is known on how Python framework APIs evolve and the characteristics of the compatibility issues induced by such evolution. To bridge this gap, we take a first look at the evolution of Python framework APIs and the resulting compatibility issues in client applications. We analyzed 288 releases of six popular Python frameworks from three different domains and 5,538 open-source projects built on these frameworks. We investigated the evolution patterns of Python framework APIs and found that they largely differ from those of Java framework APIs. We also investigated the compatibility issues in client applications and identified common strategies that developers adopt to fix these issues. Based on the empirical findings, we designed and implemented a tool, PYCOMPAT , to automatically detect compatibility issues caused by misusing evolved framework APIs in Python applications. Experiments on 10 real-world projects show that our tool can effectively detect compatibility issues of developers' concern.",
        "paperUrl": "https://doi.org/10.1109/SANER48275.2020.9054800",
        "projectUrl": "https://github.com/sqlab-sustech/PyCompat",
        "bibtex": `
        @INPROCEEDINGS{9054800,
            author={Zhang, Zhaoxu and Zhu, Hengcheng and Wen, Ming and Tao, Yida and Liu, Yepang and Xiong, Yingfei},
            booktitle={2020 IEEE 27th International Conference on Software Analysis, Evolution and Reengineering (SANER)},
            title={How Do Python Framework APIs Evolve? An Exploratory Study},
            year={2020},
            volume={},
            number={},
            pages={81-92},
            doi={10.1109/SANER48275.2020.9054800}
        }
        `
    }
]
