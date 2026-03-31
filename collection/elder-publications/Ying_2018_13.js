module.exports = [
  {
    "title": "Automatic Software Refactoring via Weighted Clustering in Method-level Networks",
    "date": "2018",
    "authors": [
      "Ying Wang", "Hai Yu", "Zhiliang Zhu", "Wei Zhang", "Yuli Zhao"
    ],
    "venue": "IEEE Transactions on Software Engineering (TSE)",
    "venueShort": "TSE",
    "tags": [],
    "abstract": `
    In this study, we describe a system-level multiple refactoring algorithm, which can identify the move method, move field, and extract class refactoring opportunities automatically according to the principle of “high cohesion and low coupling.” The algorithm works by merging and splitting related classes to obtain the optimal functionality distribution from the system-level. Furthermore, we present a weighted clustering algorithm for regrouping the entities in a system based on merged method-level networks. Using a series of preprocessing steps and preconditions, the “bad smells” introduced by cohesion and coupling problems can be removed from both the non-inheritance and inheritance hierarchies without changing the code behaviors. We rank the refactoring suggestions based on the anticipated benefits that they bring to the system. Based on comparisons with related research and assessing the refactoring results using quality metrics and empirical evaluation, we show that the proposed approach performs well in different systems and is beneficial from the perspective of the original developers. Finally, an open source tool is implemented to support the proposed approach.
    `,
    "paperUrl": "materials/TSE18-ying.pdf",
    "projectUrl": "https://github.com/wangying8052/REsolution_runnable-JAR-File",
    
    "bibtex": `
@article{wang2018automatic,
  title={Automatic Software Refactoring via Weighted Clustering in Method-Level Networks},
  author={Ying, Wang and Hai, Yu and Zhiliang, Zhu and Wei, Zhang and Yuli, Zhao},
  journal={IEEE Transactions on Software Engineering},
  volume={44},
  number={3},
  pages={202--236},
  year={2018},
  publisher={IEEE}
}
    `
  }
]