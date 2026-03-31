module.exports = [
  {
    "title": "Exposing Library API Misuses via Mutation Analysis",
    "date": "2019",
    "authors": [
      "Ming Wen", "Yepang Liu", "Rongxin Wu", "Xuan Xie", "Shing-Chi Cheung", "Zhendong Su"
    ],
    "venue": "International Conference on Software Engineering 2019, Technical Research Paper, Montréal, QC, Canada, 25 May - 31 May",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    Misuses of library APIs are pervasive and often lead to software crashes and vulnerability issues. Various static analysis tools have been proposed to detect library API misuses. They often involve mining frequent patterns from a large number of correct API usage examples, which can be hard to obtain in practice. They also suffer from low precision due to an over-simplified assumption that a deviation from frequent usage patterns indicates a misuse.
				We make two observations on the discovery of API misuse patterns. First, API misuses can be represented as mutants of the corresponding correct usages. Second, whether a mutant will introduce a misuse can be validated via executing it against a test suite and analyzing the execution information. Based on these observations, we propose MUTAPI, the first approach to discovering API misuse patterns via mutation analysis. To effectively mimic API misuses based on correct usages, we first design eight effective mutation operators inspired by the common characteristics of API misuses. MUTAPI generates mutants by applying these mutation operators on a set of client projects and collects mutant-killing tests as well as the associated stack traces. Misuse patterns are discovered from the killed mutants that are prioritized according to their likelihood of causing API misuses based on the collected information. We applied MUTAPI on 16 client projects with respect to 73 popular Java APIs. The results show that MUTAPI is able to discover substantial API misuse patterns with a high precision of 0.78. It also achieves a recall of 0.49 on the MUBENCH benchmark, which outperforms the state-of-the-art techniques.
    `,
    "paperUrl": "materials/ICSE19-ming.pdf",
    
    
    "bibtex": `
@inproceedings {WEN2019API,
  title = {{Exposing Library API Misuses via Mutation Analysis}},
  author = {Ming, Wen and Yepang, Liu and Rongxin, Wu and Xuan, Xie and Shing-Chi, Cheung and Zhendong, Su},
  booktitle = {{Proceedings of the 41th International Conference on Software Engineering}},
  series = {ICSE 2019},
  year = {2019},
}
    `
  }
]