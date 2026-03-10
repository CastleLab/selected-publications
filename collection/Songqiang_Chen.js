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
    }
]