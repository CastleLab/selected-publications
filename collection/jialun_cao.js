module.exports = [
  {
    "title": "FlashSchema: Achieving High Quality XML Schemas with Powerful Inference Algorithms and Large-scale Schema Data.",
    "date": "2020",
    "authors": [
      "Yeting LI"," Jialun CAO"," Haiming CHEN"," Tingjian GE"," Zhiwu XU"," Qiancheng PENG"
    ],
    "venue": "International Conference on Data Engineering",
    "venueShort": "ICDE",
    "tags": [
      "XML Schemas",
      "Schemas Inference"
    ],
    "abstract": "Getting high quality XML schemas to avoid or reduce application risks is an important problem in practice, for which some important aspects have yet to be addressed satisfactorily in existing work. In this paper, we propose a tool FlashSchema for high quality XML schema design, which supports both one-pass and interactive schema design and schema recommendation. To the best of our knowledge, no other existing tools support interactive schema design and schema recommendation. One salient feature of our work is the design of algorithms to infer k-occurrence interleaving regular expressions, which are not only more powerful in model capacity, but also more efficient. Additionally, such algorithms form the basis of our interactive schema design. The other feature is that, starting from largescale schema data that we have harvested from the Web, we devise a new solution for type inference, as well as propose schema recommendation for schema design. Finally, we conduct a series of experiments on two XML datasets, comparing with 9 state-of-the-art algorithms and open-source tools in terms of running time, preciseness, and conciseness. Experimental results show that our work achieves the highest level of preciseness and conciseness within only a few seconds. Experimental results and examples also demonstrate the effectiveness of our type inference and schema recommendation methods.",
    "paperUrl": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9101818",
  },
  {
    "title": "FlashRegex: Deducing Anti-ReDoS Regexes from Examples.",
    "date": "2020",
    "authors": [
      "Yeting LI"," Zhiwu XU"," Jialun CAO"," Haiming CHEN"," Tingjian GE"," Shing-Chi CHEUNG","Haoren ZHAO"
    ],
    "venue": "International Conference on Automated Software Engineering",
    "venueShort": "ASE",
    "tags": [
      "regular expression",
      "Anti-ReDoS",
      "program synthesis",
      "program repair"
    ],
    "abstract": "Regular expressions (regexes) are widely used in different fields of computer science such as programming languages, string processing and databases. However, existing tools for synthesizing or repairing regexes were not designed to be resilient to Regex Denial of Service (ReDoS) attacks. Specifically, if a regex has super-linear (SL) worst-case complexity, an attacker could provide carefully-crafted inputs to launch ReDoS attacks. Therefore, in this paper, we propose a programming-by-example framework, FlashRegex, for generating anti-ReDoS regexes by either synthesizing or repairing from given examples. It is the first framework that integrates regex synthesis and repair with the awareness of ReDoS-vulnerabilities. We present novel algorithms to deduce anti-ReDoS regexes by reducing the ambiguity of these regexes and by using Boolean Satisfiability (SAT) or Neighborhood Search (NS) techniques. We evaluate FlashRegex with five related state-of-the-art tools. The evaluation results show that our work can effectively and efficiently generate anti-ReDoS regexes from given examples, and also reveal that existing synthesis and repair tools have neglected ReDoS-vulnerabilities of regexes. Specifically, the existing synthesis and repair tools generated up to 394 ReDoS-vulnerable regex within few seconds to more than one hour, while FlashRegex generated no SL regex within around five seconds. Furthermore, the evaluation results on ReDoS-vulnerable regex repair also show that FlashRegex has better capability than existing repair tools and even human experts, achieving 4 more ReDoS-invulnerable regex after repair without trimming and resorting, highlighting the usefulness of FlashRegex in terms of the generality, automation and user-friendliness",
    "paperUrl": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9286092",
  },
  {
    "title": "TransRegex: Multi-modal Regular Expression Synthesis by Generate-and-Repair.",
    "date": "2021",
    "authors": [
      "Yeting LI"," Shuaimin LI"," Zhiwu XU"," Jialun CAO"," Zixuan CHEN"," Yun HU"," Haiming CHEN", "Shing-Chi CHEUNG"
    ],
    "venue": "International Conference on Software Engineering",
    "venueShort": "ICSE",
    "tags": [
      "regular expression",
      "regular expression synthesis",
      "regex synthesis",
      "regex repair",
      "programming by example",
      "programming by natural language"
    ],
    "abstract": "Since regular expressions (abbrev. regexes) are difficult to understand and compose, automatically generating regexes has been an important research problem. This paper introduces Tr ansRegex , lor automatically constructing regexes from both natural language descriptions and examples. To the best of our knowledge, Tr ansRegex is the first to treat the Nl.P-and-example-based regex synthesis problem as the problem of NLP-based synthesis with regex repair. For this purpose, we present novel algorithms for both NLP-based synthesis and regex repair. We evaluate Tr ansRegex with ten relevant state-of-theart tools on three publicly available datasets. The evaluation results demonstrate that the accuracy of our Tr ansRegex is 17.4%, 35.8% and 38.9% higher than that of NLP-hased approaches on the three datasets, respectively. Furthermore, T r ansRegex can achieve higher accuracy than the stateof-the-art multi-modal techniques with 10% to 30% higher accuracy on all three datasets. The evaluation results also indicate Tr ansRegex utilizing natural language and examples in a more effective way.",
    "paperUrl": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9401951",
  },
  {
    "title": "ReDoSHunter: A Combined Static and Dynamic Approach for Regular Expression DoS Detection.",
    "date": "2021",
    "authors": [
      "Yeting Li"," Zixuan Chen"," Jialun Cao"," Zhiwu Xu"," Qiancheng Peng"," Haiming Chen"," Liyuan Chen"," Shing-Chi Cheung"
    ],
    "venue": "USENIX Security Symposium",
    "venueShort": "USENIX Security",
    "tags": [
      "regular expression",
      "Anti-ReDoS",
      "ReDoS detection"
    ],
    "abstract": "Regular expression Denial of Service (ReDoS) is a class of algorithmic complexity attacks where there exist inputs causing the typical backtracking-based matching algorithms to run super-linear time. Considering the widespread use of regular expressions (regexes), ReDoS is a pervasive and serious threat. Thus, early detection of ReDoS-vulnerable regexes in software projects is vital. Existing detection approaches mainly fall into two categories: static and dynamic analysis. However, the static approaches detect more candidate vulnerabilities at the cost of low precision, while dynamic approaches guarantee the precision of detection yet compromise the recall. Detecting ReDos at both high precision and high recall remains unsolved. Furthermore, we observed that a ReDoSvulnerable regex often contains more than one vulnerability in practice. However, existing tools are incapable of detecting multiple vulnerabilities in one regex. To bridge the gaps, we proposes ReDoSHunter, a ReDoSvulnerable regex detection framework that can effectively pinpoint the multiple root causes of a vulnerable regex and generate the associated attack-triggering strings. Driven by our concluded ﬁve vulnerability patterns, ReDoSHunter can not only pinpoint the multiple vulnerabilities in one regex, but also assess the degree (i.e., exponential or polynomial) of vulnerabilities it detects. The experiment results show that ReDoSHunter is able to achieve 100% precision and 100% recall on three large-scale datasets with 37,651 regexes. Furthermore, apart from being able to detect 100% the conﬁrmed ReDoS CVEs (compared with 14.29%-60.00% achieved by existing works), ReDoSHunter also exposed 28 new ReDoSvulnerabilities in intensively-tested projects, resulting in 26 assigned CVEs and 2 ﬁxed by developers.",
  }
]