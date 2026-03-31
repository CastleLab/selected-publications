module.exports = [
  {
    "title": "Could I Have a Stack Trace to Examine the Dependency Conflict Issue?",
    "date": "2019",
    "authors": [
      "Ying Wang", "Ming Wen", "Rongxin Wu", "Zhenwei Liu", "Shin Hwei Tan", "Zhiliang Zhu", "Hai Yu", "Shing-Chi Cheung"
    ],
    "venue": "International Conference on Software Engineering 2019, Technical Research Paper, Montréal, QC, Canada, 25 May - 31 May",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    Intensive use of libraries in Java projects brings potential risk of dependency conflicts, which occur when a project directly or indirectly depends on multiple versions of the same library or class. When this happens, JVM loads one version and shadows the others. Runtime exceptions can occur when methods in the shadowed versions are referenced. Although project management tools such as Maven are able to give warnings of potential dependency conflicts when a project is built, developers often ask for crashing stack traces before examining these warnings. It motivates us to develop RIDDLE, an automated approach that generates tests and collects crashing stack traces for projects subject to risk of dependency conflicts. RIDDLE, built on top of ASM and EVOSUITE, combines condition mutation, search strategies and condition restoration. We applied RIDDLE on 19 real-world Java projects with duplicate libraries or classes. We reported 20 identified dependency conflicts including their induced crashing stack traces and the details of generated tests. Among them, 15 conflicts were confirmed by developers as real issues, and 10 were readily fixed. The evaluation results demonstrate the effectiveness and usefulness of RIDDLE.
    `,
    "paperUrl": "materials/ICSE19-ying.pdf",
    "projectUrl": "https://skillwind.github.io/RiddleDC/index.html",
    
    "bibtex": `
@inproceedings {WANG2019STACK,
  title = {{Could I Have a Stack Trace to Examine the Dependency Conflict Issue?}},
  author = {Ying, Wang and Ming, Wen and Rongxin, Wu and Zhenwei, Liu and Shin Hwei, Tan and Zhiliang, Zhu and Hai, Yu and Shing-Chi, Cheung},
  booktitle = {{Proceedings of the 41th International Conference on Software Engineering}},
  series = {ICSE 2019},
  year = {2019},
}
    `
  }
]