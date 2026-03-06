module.exports = [
    {
        "title": "CodeCleaner: Mitigating Data Contamination for LLM Benchmarking.",
        "date": "2025",
        "authors": [
            "Jialun Cao",
            "Songqiang Chen",
            "Wuqi Zhang",
            "Hau Ching Lo",
            "Yeting Li",
            "Shing-Chi Cheung"
        ],
        "venue": "the 16th International Conference on Internetware",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "",
        "paperUrl": "https://doi.org/10.1145/3755881.3755901",
        "bibtex": "@inproceedings{DBLP:conf/internetware/CaoCZLLC25,\n  author       = {Jialun Cao and\n                  Songqiang Chen and\n                  Wuqi Zhang and\n                  Hau Ching Lo and\n                  Yeting Li and\n                  Shing{-}Chi Cheung},\n  editor       = {Hong Mei and\n                  Jian Lv and\n                  Zhi Jin and\n                  Xuandong Li and\n                  Thomas Zimmermann and\n                  Ge Li and\n                  Lei Bu and\n                  Xin Xia},\n  title        = {CodeCleaner: Mitigating Data Contamination for {LLM} Benchmarking},\n  booktitle    = {Proceedings of the 16th International Conference on Internetware,\n                  Internetware 2025, Trondheim, Norway, June 20-22, 2025},\n  pages        = {71--83},\n  publisher    = {{ACM}},\n  year         = {2025},\n  url          = {https://doi.org/10.1145/3755881.3755901},\n  doi          = {10.1145/3755881.3755901},\n  timestamp    = {Thu, 05 Mar 2026 17:17:59 +0100},\n  biburl       = {https://dblp.org/rec/conf/internetware/CaoCZLLC25.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "LspFuzz: Hunting Bugs in Language Servers.",
        "date": "2025",
        "authors": [
            "Hengcheng Zhu",
            "Songqiang Chen",
            "Valerio Terragni",
            "Lili Wei",
            "Yepang Liu",
            "Jiarong Wu",
            "Shing-Chi Cheung"
        ],
        "venue": "40th IEEE/ACM International Conference on Automated Software Engineering",
        "venueShort": "ASE",
        "tags": [],
        "awards": [],
        "abstract": "The Language Server Protocol (LSP) has revolutionized the integration of code intelligence in modern software development. There are approximately 300 LSP server implementations for various languages and 50 editors offering LSP integration. However, the reliability of LSP servers is a growing concern, as crashes can disable all code intelligence features and significantly impact productivity, while vulnerabilities can put developers at risk even when editing untrusted source code. Despite the widespread adoption of LSP, no existing techniques specifically target LSP server testing. To bridge this gap, we present LspFuzz, a grey-box hybrid fuzzer for systematic LSP server testing. Our key insight is that effective LSP server testing requires holistic mutation of source code and editor operations, as bugs often manifest from their combinations. To satisfy the sophisticated constraints of LSP and effectively explore the input space, we employ a two-stage mutation pipeline: syntax-aware mutations to source code, followed by context-aware dispatching of editor operations. We evaluated LspFuzz on four widely used LSP servers. LspFuzz demonstrated superior performance compared to baseline fuzzers, and uncovered previously unknown bugs in real-world LSP servers. Of the 51 bugs we reported, 42 have been confirmed, 26 have been fixed by developers, and two have been assigned CVE numbers. Our work advances the quality assurance of LSP servers, providing both a practical tool and foundational insights for future research in this domain.",
        "arxivUrl": "",
        "paperUrl": "https://doi.org/10.1109/ASE63991.2025.00183",
        "bibtex": "@inproceedings{DBLP:conf/kbse/ZhuCTWLWC25,\n  author       = {Hengcheng Zhu and\n                  Songqiang Chen and\n                  Valerio Terragni and\n                  Lili Wei and\n                  Yepang Liu and\n                  Jiarong Wu and\n                  Shing{-}Chi Cheung},\n  title        = {LspFuzz: Hunting Bugs in Language Servers},\n  booktitle    = {40th {IEEE/ACM} International Conference on Automated Software Engineering,\n                  {ASE} 2025, Seoul, Korea, Republic of, November 16-20, 2025},\n  pages        = {2209--2221},\n  publisher    = {{IEEE}},\n  year         = {2025},\n  url          = {https://doi.org/10.1109/ASE63991.2025.00183},\n  doi          = {10.1109/ASE63991.2025.00183},\n  timestamp    = {Sun, 08 Feb 2026 15:06:01 +0100},\n  biburl       = {https://dblp.org/rec/conf/kbse/ZhuCTWLWC25.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Isolating Language-Coding from Problem-Solving: Benchmarking LLMs with PseudoEval.",
        "date": "2025-01-01",
        "authors": [
            "Jiarong Wu",
            "Songqiang Chen",
            "Jialun Cao",
            "Hau Ching Lo",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2502.19149",
        "paperUrl": "https://doi.org/10.48550/arXiv.2502.19149",
        "bibtex": "@article{DBLP:journals/corr/abs-2502-19149,\n  author       = {Jiarong Wu and\n                  Songqiang Chen and\n                  Jialun Cao and\n                  Hau Ching Lo and\n                  Shing{-}Chi Cheung},\n  title        = {Isolating Language-Coding from Problem-Solving: Benchmarking LLMs\n                  with PseudoEval},\n  journal      = {CoRR},\n  volume       = {abs/2502.19149},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2502.19149},\n  doi          = {10.48550/ARXIV.2502.19149},\n  eprinttype    = {arXiv},\n  eprint       = {2502.19149},\n  timestamp    = {Thu, 20 Mar 2025 21:38:11 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2502-19149.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "When LLMs Meet API Documentation: Can Retrieval Augmentation Aid Code Generation Just as It Helps Developers?",
        "date": "2025-01-01",
        "authors": [
            "Jingyi Chen",
            "Songqiang Chen",
            "Jialun Cao",
            "Jiasi Shen",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2503.15231",
        "paperUrl": "https://doi.org/10.48550/arXiv.2503.15231",
        "bibtex": "@article{DBLP:journals/corr/abs-2503-15231,\n  author       = {Jingyi Chen and\n                  Songqiang Chen and\n                  Jialun Cao and\n                  Jiasi Shen and\n                  Shing{-}Chi Cheung},\n  title        = {When LLMs Meet {API} Documentation: Can Retrieval Augmentation Aid\n                  Code Generation Just as It Helps Developers?},\n  journal      = {CoRR},\n  volume       = {abs/2503.15231},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2503.15231},\n  doi          = {10.48550/ARXIV.2503.15231},\n  eprinttype    = {arXiv},\n  eprint       = {2503.15231},\n  timestamp    = {Wed, 30 Apr 2025 15:11:25 +0200},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2503-15231.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "MT4DP: Data Poisoning Attack Detection for DL-based Code Search Models via Metamorphic Testing.",
        "date": "2025-01-01",
        "authors": [
            "Gong Chen",
            "Wenjie Liu",
            "Xiaoyuan Xie",
            "Xunzhu Tang",
            "Tegawendé F. Bissyandé",
            "Songqiang Chen"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2507.11092",
        "paperUrl": "https://doi.org/10.48550/arXiv.2507.11092",
        "bibtex": "@article{DBLP:journals/corr/abs-2507-11092,\n  author       = {Gong Chen and\n                  Wenjie Liu and\n                  Xiaoyuan Xie and\n                  Xunzhu Tang and\n                  Tegawend{\\&apos;{e}} F. Bissyand{\\&apos;{e}} and\n                  Songqiang Chen},\n  title        = {{MT4DP:} Data Poisoning Attack Detection for DL-based Code Search\n                  Models via Metamorphic Testing},\n  journal      = {CoRR},\n  volume       = {abs/2507.11092},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2507.11092},\n  doi          = {10.48550/ARXIV.2507.11092},\n  eprinttype    = {arXiv},\n  eprint       = {2507.11092},\n  timestamp    = {Sun, 09 Nov 2025 09:23:02 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2507-11092.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "What Builds Effective In-Context Examples for Code Generation?",
        "date": "2025-01-01",
        "authors": [
            "Dongze Li",
            "Songqiang Chen",
            "Jialun Cao",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2508.06414",
        "paperUrl": "https://doi.org/10.48550/arXiv.2508.06414",
        "bibtex": "@article{DBLP:journals/corr/abs-2508-06414,\n  author       = {Dongze Li and\n                  Songqiang Chen and\n                  Jialun Cao and\n                  Shing{-}Chi Cheung},\n  title        = {What Builds Effective In-Context Examples for Code Generation?},\n  journal      = {CoRR},\n  volume       = {abs/2508.06414},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2508.06414},\n  doi          = {10.48550/ARXIV.2508.06414},\n  eprinttype    = {arXiv},\n  eprint       = {2508.06414},\n  timestamp    = {Sat, 13 Sep 2025 14:46:20 +0200},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2508-06414.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "RulER: Automated Rule-Based Semantic Error Localization and Repair for Code Translation.",
        "date": "2025-01-01",
        "authors": [
            "Shuo Jin",
            "Songqiang Chen",
            "Xiaoyuan Xie",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2509.14829",
        "paperUrl": "https://doi.org/10.48550/arXiv.2509.14829",
        "bibtex": "@article{DBLP:journals/corr/abs-2509-14829,\n  author       = {Shuo Jin and\n                  Songqiang Chen and\n                  Xiaoyuan Xie and\n                  Shing{-}Chi Cheung},\n  title        = {RulER: Automated Rule-Based Semantic Error Localization and Repair\n                  for Code Translation},\n  journal      = {CoRR},\n  volume       = {abs/2509.14829},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2509.14829},\n  doi          = {10.48550/ARXIV.2509.14829},\n  eprinttype    = {arXiv},\n  eprint       = {2509.14829},\n  timestamp    = {Fri, 17 Oct 2025 08:20:35 +0200},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2509-14829.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "LSPFuzz: Hunting Bugs in Language Servers.",
        "date": "2025-01-01",
        "authors": [
            "Hengcheng Zhu",
            "Songqiang Chen",
            "Valerio Terragni",
            "Lili Wei",
            "Yepang Liu",
            "Jiarong Wu",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2510.00532",
        "paperUrl": "https://doi.org/10.48550/arXiv.2510.00532",
        "bibtex": "@article{DBLP:journals/corr/abs-2510-00532,\n  author       = {Hengcheng Zhu and\n                  Songqiang Chen and\n                  Valerio Terragni and\n                  Lili Wei and\n                  Yepang Liu and\n                  Jiarong Wu and\n                  Shing{-}Chi Cheung},\n  title        = {LSPFuzz: Hunting Bugs in Language Servers},\n  journal      = {CoRR},\n  volume       = {abs/2510.00532},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2510.00532},\n  doi          = {10.48550/ARXIV.2510.00532},\n  eprinttype    = {arXiv},\n  eprint       = {2510.00532},\n  timestamp    = {Sat, 08 Nov 2025 10:18:11 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2510-00532.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Can Emulating Semantic Translation Help LLMs with Code Translation? A Study Based on Pseudocode.",
        "date": "2025-01-01",
        "authors": [
            "Songqiang Chen",
            "Congying Xu",
            "Jingyi Chen",
            "Jialun Cao",
            "Jiarong Wu",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2510.00920",
        "paperUrl": "https://doi.org/10.48550/arXiv.2510.00920",
        "bibtex": "@article{DBLP:journals/corr/abs-2510-00920,\n  author       = {Songqiang Chen and\n                  Congying Xu and\n                  Jingyi Chen and\n                  Jialun Cao and\n                  Jiarong Wu and\n                  Shing{-}Chi Cheung},\n  title        = {Can Emulating Semantic Translation Help LLMs with Code Translation?\n                  {A} Study Based on Pseudocode},\n  journal      = {CoRR},\n  volume       = {abs/2510.00920},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2510.00920},\n  doi          = {10.48550/ARXIV.2510.00920},\n  eprinttype    = {arXiv},\n  eprint       = {2510.00920},\n  timestamp    = {Sat, 08 Nov 2025 10:18:14 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2510-00920.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Testing and Enhancing Multi-Agent Systems for Robust Code Generation.",
        "date": "2025-01-01",
        "authors": [
            "Zongyi Lyu",
            "Songqiang Chen",
            "Zhenlan Ji",
            "Liwen Wang",
            "Shuai Wang",
            "Daoyuan Wu",
            "Wenxuan Wang",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2510.10460",
        "paperUrl": "https://doi.org/10.48550/arXiv.2510.10460",
        "bibtex": "@article{DBLP:journals/corr/abs-2510-10460,\n  author       = {Zongyi Lyu and\n                  Songqiang Chen and\n                  Zhenlan Ji and\n                  Liwen Wang and\n                  Shuai Wang and\n                  Daoyuan Wu and\n                  Wenxuan Wang and\n                  Shing{-}Chi Cheung},\n  title        = {Testing and Enhancing Multi-Agent Systems for Robust Code Generation},\n  journal      = {CoRR},\n  volume       = {abs/2510.10460},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2510.10460},\n  doi          = {10.48550/ARXIV.2510.10460},\n  eprinttype    = {arXiv},\n  eprint       = {2510.10460},\n  timestamp    = {Tue, 11 Nov 2025 13:12:33 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2510-10460.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Multi-Agent Systems for Dataset Adaptation in Software Engineering: Capabilities, Limitations, and Future Directions.",
        "date": "2025-01-01",
        "authors": [
            "Jingyi Chen",
            "Xiaoyan Guo",
            "Songqiang Chen",
            "Shing-Chi Cheung",
            "Jiasi Shen"
        ],
        "venue": "",
        "venueShort": "CoRR",
        "tags": [],
        "awards": [],
        "abstract": "",
        "arxivUrl": "https://arxiv.org/abs/2511.21380",
        "paperUrl": "https://doi.org/10.48550/arXiv.2511.21380",
        "bibtex": "@article{DBLP:journals/corr/abs-2511-21380,\n  author       = {Jingyi Chen and\n                  Xiaoyan Guo and\n                  Songqiang Chen and\n                  Shing{-}Chi Cheung and\n                  Jiasi Shen},\n  title        = {Multi-Agent Systems for Dataset Adaptation in Software Engineering:\n                  Capabilities, Limitations, and Future Directions},\n  journal      = {CoRR},\n  volume       = {abs/2511.21380},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2511.21380},\n  doi          = {10.48550/ARXIV.2511.21380},\n  eprinttype    = {arXiv},\n  eprint       = {2511.21380},\n  timestamp    = {Wed, 14 Jan 2026 21:10:58 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2511-21380.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    }
]