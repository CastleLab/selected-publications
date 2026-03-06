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
        "date": "2025-10-01",
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
        "arxivUrl": "https://arxiv.org/abs/2510.00532",
        "paperUrl": "https://doi.org/10.1109/ASE63991.2025.00183",
        "bibtex": "@inproceedings{DBLP:conf/kbse/ZhuCTWLWC25,\n  author       = {Hengcheng Zhu and\n                  Songqiang Chen and\n                  Valerio Terragni and\n                  Lili Wei and\n                  Yepang Liu and\n                  Jiarong Wu and\n                  Shing{-}Chi Cheung},\n  title        = {LspFuzz: Hunting Bugs in Language Servers},\n  booktitle    = {40th {IEEE/ACM} International Conference on Automated Software Engineering,\n                  {ASE} 2025, Seoul, Korea, Republic of, November 16-20, 2025},\n  pages        = {2209--2221},\n  publisher    = {{IEEE}},\n  year         = {2025},\n  url          = {https://doi.org/10.1109/ASE63991.2025.00183},\n  doi          = {10.1109/ASE63991.2025.00183},\n  timestamp    = {Sun, 08 Feb 2026 15:06:01 +0100},\n  biburl       = {https://dblp.org/rec/conf/kbse/ZhuCTWLWC25.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Isolating Language-Coding from Problem-Solving: Benchmarking LLMs with PseudoEval.",
        "date": "2025-02-26",
        "authors": [
            "Jiarong Wu",
            "Songqiang Chen",
            "Jialun Cao",
            "Hau Ching Lo",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Existing code generation benchmarks for Large Language Models (LLMs) such as HumanEval and MBPP are designed to study LLMs' end-to-end performance, where the benchmarks feed a problem description in natural language as input and examine the generated code in specific programming languages. However, the evaluation scores revealed in this way provide a little hint as to the bottleneck of the code generation -- whether LLMs are struggling with their problem-solving capability or language-coding capability. To answer this question, we construct PseudoEval, a multilingual code generation benchmark that provides a solution written in pseudocode as input. By doing so, the bottleneck of code generation in various programming languages could be isolated and identified. Our study yields several interesting findings. For example, we identify that the bottleneck of LLMs in Python programming is problem-solving, while Rust is struggling relatively more in language-coding. Also, our study indicates that problem-solving capability may transfer across programming languages, while language-coding needs more language-specific effort, especially for undertrained programming languages. Finally, we release the pipeline of constructing PseudoEval to facilitate the extension to existing benchmarks. PseudoEval is available at: this https URL .",
        "arxivUrl": "https://arxiv.org/abs/2502.19149",
        "paperUrl": "https://doi.org/10.48550/arXiv.2502.19149",
        "bibtex": "@article{DBLP:journals/corr/abs-2502-19149,\n  author       = {Jiarong Wu and\n                  Songqiang Chen and\n                  Jialun Cao and\n                  Hau Ching Lo and\n                  Shing{-}Chi Cheung},\n  title        = {Isolating Language-Coding from Problem-Solving: Benchmarking LLMs\n                  with PseudoEval},\n  journal      = {CoRR},\n  volume       = {abs/2502.19149},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2502.19149},\n  doi          = {10.48550/ARXIV.2502.19149},\n  eprinttype    = {arXiv},\n  eprint       = {2502.19149},\n  timestamp    = {Thu, 20 Mar 2025 21:38:11 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2502-19149.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "When LLMs Meet API Documentation: Can Retrieval Augmentation Aid Code Generation Just as It Helps Developers?",
        "date": "2025-03-19",
        "authors": [
            "Jingyi Chen",
            "Songqiang Chen",
            "Jialun Cao",
            "Jiasi Shen",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Retrieval-augmented generation (RAG) has increasingly shown its power in extending large language models' (LLMs') capability beyond their pre-trained knowledge. Existing works have shown that RAG can help with software development tasks such as code generation, code update, and test generation. Yet, the effectiveness of adapting LLMs to fast-evolving or less common API libraries using RAG remains unknown. To bridge this gap, we take an initial step to study this unexplored yet practical setting - when developers code with a less common library, they often refer to its API documentation; likewise, when LLMs are allowed to look up API documentation via RAG, to what extent can LLMs be advanced? To mimic such a setting, we select four less common open-source Python libraries with a total of 1017 eligible APIs. We study the factors that affect the effectiveness of using the documentation of less common API libraries as additional knowledge for retrieval and generation. Our intensive study yields interesting findings: (1) RAG helps improve LLMs' performance by 83%-220%. (2) Example code contributes the most to advance LLMs, instead of the descriptive texts and parameter lists in the API documentation. (3) LLMs could sometimes tolerate mild noises (typos in description or incorrect parameters) by referencing their pre-trained knowledge or document context. Finally, we suggest that developers pay more attention to the quality and diversity of the code examples in the API documentation. The study sheds light on future low-code software development workflows.",
        "arxivUrl": "https://arxiv.org/abs/2503.15231",
        "paperUrl": "https://doi.org/10.48550/arXiv.2503.15231",
        "bibtex": "@article{DBLP:journals/corr/abs-2503-15231,\n  author       = {Jingyi Chen and\n                  Songqiang Chen and\n                  Jialun Cao and\n                  Jiasi Shen and\n                  Shing{-}Chi Cheung},\n  title        = {When LLMs Meet {API} Documentation: Can Retrieval Augmentation Aid\n                  Code Generation Just as It Helps Developers?},\n  journal      = {CoRR},\n  volume       = {abs/2503.15231},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2503.15231},\n  doi          = {10.48550/ARXIV.2503.15231},\n  eprinttype    = {arXiv},\n  eprint       = {2503.15231},\n  timestamp    = {Wed, 30 Apr 2025 15:11:25 +0200},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2503-15231.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "MT4DP: Data Poisoning Attack Detection for DL-based Code Search Models via Metamorphic Testing.",
        "date": "2025-07-15",
        "authors": [
            "Gong Chen",
            "Wenjie Liu",
            "Xiaoyuan Xie",
            "Xunzhu Tang",
            "Tegawendé F. Bissyandé",
            "Songqiang Chen"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Recently, several studies have indicated that data poisoning attacks pose a severe security threat to deep learning-based (DL-based) code search models. Attackers inject carefully crafted malicious patterns into the training data, misleading the code search model to learn these patterns during training. During the usage of the poisoned code search model for inference, once the malicious pattern is triggered, the model tends to rank the vulnerability code higher. However, existing detection methods for data poisoning attacks on DL-based code search models remain insufficiently effective. To address this critical security issue, we propose MT4DP, a Data Poisoning Attack Detection Framework for DL-based Code Search Models via Metamorphic Testing. MT4DP introduces a novel Semantically Equivalent Metamorphic Relation (SE-MR) designed to detect data poisoning attacks on DL-based code search models. Specifically, MT4DP first identifies the high-frequency words from search queries as potential poisoning targets and takes their corresponding queries as the source queries. For each source query, MT4DP generates two semantically equivalent follow-up queries and retrieves its source ranking list. Then, each source ranking list is re-ranked based on the semantic similarities between its code snippets and the follow-up queries. Finally, variances between the source and re-ranked lists are calculated to reveal violations of the SE-MR and warn the data poisoning attack. Experimental results demonstrate that MT4DP significantly enhances the detection of data poisoning attacks on DL-based code search models, outperforming the best baseline by 191% on average F1 score and 265% on average precision. Our work aims to promote further research into effective techniques for mitigating data poisoning threats on DL-based code search models.",
        "arxivUrl": "https://arxiv.org/abs/2507.11092",
        "paperUrl": "https://doi.org/10.48550/arXiv.2507.11092",
        "bibtex": "@article{DBLP:journals/corr/abs-2507-11092,\n  author       = {Gong Chen and\n                  Wenjie Liu and\n                  Xiaoyuan Xie and\n                  Xunzhu Tang and\n                  Tegawend{\\&apos;{e}} F. Bissyand{\\&apos;{e}} and\n                  Songqiang Chen},\n  title        = {{MT4DP:} Data Poisoning Attack Detection for DL-based Code Search\n                  Models via Metamorphic Testing},\n  journal      = {CoRR},\n  volume       = {abs/2507.11092},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2507.11092},\n  doi          = {10.48550/ARXIV.2507.11092},\n  eprinttype    = {arXiv},\n  eprint       = {2507.11092},\n  timestamp    = {Sun, 09 Nov 2025 09:23:02 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2507-11092.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "What Builds Effective In-Context Examples for Code Generation?",
        "date": "2025-08-08",
        "authors": [
            "Dongze Li",
            "Songqiang Chen",
            "Jialun Cao",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "In-Context Learning (ICL) has emerged as a promising solution to enhance the code generation capabilities of Large Language Models (LLMs), which incorporates code examples inside the prompt to let LLMs learn from demonstrations. However, despite the substantial effectiveness of the code example-based ICL approach, the specific features (e.g., identifier naming styles, code formatting, solution insight) within the ICL-provided code examples that significantly contribute to the ICL's effectiveness remain unclear. This paper systematically investigates the impact of various code features on ICL with code examples through controlled ablation studies. Our findings reveal that the appropriate naming of variables and functions is crucial for effective code generation, with their elimination leading to performance decreases of up to 30 percentage points. We further demonstrate that LLMs prioritize semantically meaningful identifier names over formatting conventions, with language-specific preferences regarding identifier verbosity. Additionally, our investigation into ICL's potential for enhancing reflection and inference capabilities reveals that current LLMs struggle to extract generalizable problem-solving insights from similar code solutions, despite being capable of utilizing direct information effectively. These findings are expected to provide valuable insights for optimizing ICL systems in code generation applications and highlight fundamental challenges in reflection-based learning for code generation tasks.",
        "arxivUrl": "https://arxiv.org/abs/2508.06414",
        "paperUrl": "https://doi.org/10.48550/arXiv.2508.06414",
        "bibtex": "@article{DBLP:journals/corr/abs-2508-06414,\n  author       = {Dongze Li and\n                  Songqiang Chen and\n                  Jialun Cao and\n                  Shing{-}Chi Cheung},\n  title        = {What Builds Effective In-Context Examples for Code Generation?},\n  journal      = {CoRR},\n  volume       = {abs/2508.06414},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2508.06414},\n  doi          = {10.48550/ARXIV.2508.06414},\n  eprinttype    = {arXiv},\n  eprint       = {2508.06414},\n  timestamp    = {Sat, 13 Sep 2025 14:46:20 +0200},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2508-06414.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "RulER: Automated Rule-Based Semantic Error Localization and Repair for Code Translation.",
        "date": "2025-09-18",
        "authors": [
            "Shuo Jin",
            "Songqiang Chen",
            "Xiaoyuan Xie",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Automated code translation aims to convert programs between different programming languages while maintaining their functionality. Due to the imperfections of code translation models, the generated translations may contain errors that compromise their reliability. Existing automated debugging methods for code translation rely on code alignments and repair patch templates to locate and fix erroneous translations. However, existing methods lack reliable references to construct code alignments and design repair patch templates, which significantly impacts their localization accuracy and repair effectiveness. To address these limitations, we reintroduce code translation rules and propose a rule-based debugging method for code translation, called RulER. RulER automatically derives code translation rules from correct translations generated by LLMs, enabling the efficient collection of diverse translation rules. In addition, RulER dynamically combines the existing rules on expandable nodes like expressions and tokens to further adaptively align more statements. These rules capture clear and detailed structural correspondences between source and target programming languages. Therefore, they can serve as reliable and reusable references for code alignment and repair template design, enabling RulER to locate and fix translation errors effectively. Our evaluation of RulER on Java-to-C++ and Python-to-C++ translations produced by four code translation models demonstrates that RulER outperforms state-of-the-art methods, BatFix and TransMap. Our experimental results show that RulER outperformed the best baseline by 20% and 272% in terms of error localization rates and repair success rates, respectively. RulER exhibits superior repair performance compared to directly prompting LLMs for patch generation, demonstrating a promising methodology for extracting and leveraging coding knowledge from LLMs.",
        "arxivUrl": "https://arxiv.org/abs/2509.14829",
        "paperUrl": "https://doi.org/10.48550/arXiv.2509.14829",
        "bibtex": "@article{DBLP:journals/corr/abs-2509-14829,\n  author       = {Shuo Jin and\n                  Songqiang Chen and\n                  Xiaoyuan Xie and\n                  Shing{-}Chi Cheung},\n  title        = {RulER: Automated Rule-Based Semantic Error Localization and Repair\n                  for Code Translation},\n  journal      = {CoRR},\n  volume       = {abs/2509.14829},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2509.14829},\n  doi          = {10.48550/ARXIV.2509.14829},\n  eprinttype    = {arXiv},\n  eprint       = {2509.14829},\n  timestamp    = {Fri, 17 Oct 2025 08:20:35 +0200},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2509-14829.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Can Emulating Semantic Translation Help LLMs with Code Translation? A Study Based on Pseudocode.",
        "date": "2025-10-01",
        "authors": [
            "Songqiang Chen",
            "Congying Xu",
            "Jingyi Chen",
            "Jialun Cao",
            "Jiarong Wu",
            "Shing-Chi Cheung"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Although large language models (LLMs) show promising potential in code translation, they still struggle to generate accurate translations using the commonly adopted direct code-to-code translation approach, which converts an original program into the target programming language (PL) in a single step. Inspired by the success of incorporating intermediate steps to guide LLMs in resolving challenging tasks, in this study, we explore pseudocode-based code translation. This approach emulates human semantic translation by first interpreting the original program's intent and logic into pseudocode and then implementing it in the target PL. To understand the effectiveness of this underexplored approach, we present a systematic empirical study on pseudocode-based code translation, aiming to investigate its helpfulness in enhancing the direct translation approach, illuminate its effective usage, and identify its limitations. By comparing direct and pseudocode-based translation on 9,690 translation tasks across six PLs with five popular LLMs, we found that pseudocode-based translation can effectively complement direct translation, particularly when translating from flexible to rigid PLs and handling a low-training-resource PL. Based on the findings, we suggest combining the translation results of both approaches for test-based selection to leverage their complementary strengths. We also reveal the advantages of pseudocode-based translation in decoupling the code understanding and generation burden on complicated programs and mitigating distractions from PL-specific implementations in original programs, as well as its limitations due to incorrect, incomplete, or ambiguous pseudocode. Our study sheds light on the effective use of pseudocode-based translation and provides evidence to help enhance LLMs in code translation.",
        "arxivUrl": "https://arxiv.org/abs/2510.00920",
        "paperUrl": "https://doi.org/10.48550/arXiv.2510.00920",
        "bibtex": "@article{DBLP:journals/corr/abs-2510-00920,\n  author       = {Songqiang Chen and\n                  Congying Xu and\n                  Jingyi Chen and\n                  Jialun Cao and\n                  Jiarong Wu and\n                  Shing{-}Chi Cheung},\n  title        = {Can Emulating Semantic Translation Help LLMs with Code Translation?\n                  {A} Study Based on Pseudocode},\n  journal      = {CoRR},\n  volume       = {abs/2510.00920},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2510.00920},\n  doi          = {10.48550/ARXIV.2510.00920},\n  eprinttype    = {arXiv},\n  eprint       = {2510.00920},\n  timestamp    = {Sat, 08 Nov 2025 10:18:14 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2510-00920.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Testing and Enhancing Multi-Agent Systems for Robust Code Generation.",
        "date": "2025-10-12",
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
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Multi-agent systems (MASs) have emerged as a promising paradigm for automated code generation, demonstrating impressive performance on established benchmarks. Despite their prosperous development, the fundamental mechanisms underlying their robustness remain poorly understood, raising critical concerns for real-world deployment. This paper conducts a systematic empirical study to uncover the internal robustness flaws of MASs using a mutation-based methodology. By designing a testing pipeline incorporating semantic-preserving mutation operators and a novel fitness function, we assess mainstream MASs across multiple datasets and LLMs. Our findings reveal substantial robustness flaws: semantically equivalent inputs cause drastic performance drops, with MASs failing to solve 7.9\\%--83.3\\% of problems they initially resolved successfully. Through comprehensive failure analysis, we discover a fundamental cause underlying these robustness issues: the \\textit{planner-coder gap}, which accounts for 75.3\\% of failures. This gap arises from information loss in the multi-stage transformation process where planning agents decompose requirements into underspecified plans, and coding agents subsequently misinterpret intricate logic during code generation. Based on this formulated information transformation process, we propose a \\textit{repairing method} that mitigates information loss through multi-prompt generation and introduces a monitor agent to bridge the planner-coder gap. Evaluation shows that our repairing method effectively enhances the robustness of MASs by solving 40.0\\%--88.9\\% of identified failures. Our work uncovers critical robustness flaws in MASs and provides effective mitigation strategies, contributing essential insights for developing more reliable MASs for code generation.",
        "arxivUrl": "https://arxiv.org/abs/2510.10460",
        "paperUrl": "https://doi.org/10.48550/arXiv.2510.10460",
        "bibtex": "@article{DBLP:journals/corr/abs-2510-10460,\n  author       = {Zongyi Lyu and\n                  Songqiang Chen and\n                  Zhenlan Ji and\n                  Liwen Wang and\n                  Shuai Wang and\n                  Daoyuan Wu and\n                  Wenxuan Wang and\n                  Shing{-}Chi Cheung},\n  title        = {Testing and Enhancing Multi-Agent Systems for Robust Code Generation},\n  journal      = {CoRR},\n  volume       = {abs/2510.10460},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2510.10460},\n  doi          = {10.48550/ARXIV.2510.10460},\n  eprinttype    = {arXiv},\n  eprint       = {2510.10460},\n  timestamp    = {Tue, 11 Nov 2025 13:12:33 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2510-10460.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    },
    {
        "title": "Multi-Agent Systems for Dataset Adaptation in Software Engineering: Capabilities, Limitations, and Future Directions.",
        "date": "2025-11-26",
        "authors": [
            "Jingyi Chen",
            "Xiaoyan Guo",
            "Songqiang Chen",
            "Shing-Chi Cheung",
            "Jiasi Shen"
        ],
        "venue": "",
        "venueShort": "",
        "tags": [],
        "awards": [],
        "abstract": "Automating the adaptation of software engineering (SE) research artifacts across datasets is essential for scalability and reproducibility, yet it remains largely unstudied. Recent advances in large language model (LLM)-based multi-agent systems, such as GitHub Copilot's agent mode, promise to automate complex development workflows through coordinated reasoning, code generation, and tool interaction. This paper presents the first empirical study on how state-of-the-art multi-agent systems perform in dataset adaptation tasks. We evaluate Copilot, backed by GPT-4.1 and Claude Sonnet 4, on adapting SE research artifacts from benchmark repositories including ROCODE and LogHub2.0. Through a five-stage evaluation pipeline (file comprehension, code editing, command generation, validation, and final execution), we measure success rates, analyze failure patterns, and assess prompt-based interventions designed to enhance agent performance. Results show that current systems can identify key files and generate partial adaptations but rarely produce functionally correct implementations. Prompt-level interventions, especially providing execution error messages and reference code, substantially improve structural similarity to ground truth (from 7.25% to 67.14%), highlighting the importance of contextual and feedback-driven guidance. Our findings reveal both the promise and limitations of today's multi-agent LLM systems for dataset adaptation, and suggest concrete directions for building more reliable, self-correcting agents in future SE research.",
        "arxivUrl": "https://arxiv.org/abs/2511.21380",
        "paperUrl": "https://doi.org/10.48550/arXiv.2511.21380",
        "bibtex": "@article{DBLP:journals/corr/abs-2511-21380,\n  author       = {Jingyi Chen and\n                  Xiaoyan Guo and\n                  Songqiang Chen and\n                  Shing{-}Chi Cheung and\n                  Jiasi Shen},\n  title        = {Multi-Agent Systems for Dataset Adaptation in Software Engineering:\n                  Capabilities, Limitations, and Future Directions},\n  journal      = {CoRR},\n  volume       = {abs/2511.21380},\n  year         = {2025},\n  url          = {https://doi.org/10.48550/arXiv.2511.21380},\n  doi          = {10.48550/ARXIV.2511.21380},\n  eprinttype    = {arXiv},\n  eprint       = {2511.21380},\n  timestamp    = {Wed, 14 Jan 2026 21:10:58 +0100},\n  biburl       = {https://dblp.org/rec/journals/corr/abs-2511-21380.bib},\n  bibsource    = {dblp computer science bibliography, https://dblp.org}\n}"
    }
]