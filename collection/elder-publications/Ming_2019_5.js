module.exports = [
  {
    "title": "Exploring and Exploiting the Correlations between Bug-Inducing and Bug-Fixing Commits",
    "date": "2019",
    "authors": [
      "Ming Wen", "Rongxin Wu", "Yepang Liu", "Yongqiang Tian", "Xuan Xie", "Shing-Chi Cheung", "Zhendong Su"
    ],
    "venue": "The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering 2019, Technical Research Paper, Tallinn, Estonia",
    "venueShort": "ESEC/FSE",
    "tags": [],
    "abstract": `
    Bug-inducing commits provide important information to understand when and how bugs were introduced.
				Therefore, they have been extensively investigated by existing studies and frequently leveraged to facilitate bug fixings in industrial practices.

				Due to the importance of bug-inducing commits in software debugging,
				we are motivated to conduct the first systematic empirical study to explore the correlations between bug-inducing and bug-fixing commits in terms of code elements and modifications.
				To facilitate the study, we collected the inducing and fixing commits for 333 bugs from seven large open-source projects.
				The empirical findings reveal important and significant correlations between a bug's inducing and fixing commits.
				We further exploit the usefulness of such correlation findings from two aspects.
				First, they explain why the SZZ algorithm, the most widely-adopted approach to collecting bug-inducing commits, is imprecise.
				In view of SZZ's imprecision, we revisited the findings of previous studies based on SZZ,
				and found that 8 out of 10 previous findings are significantly affected by SZZ's imprecision.
				Second, they shed lights on the design of automated debugging techniques.
				For demonstration, we designed approaches that exploit the correlations with respect to statements and change actions.
				Our experiments on \textsc{Defects4J} show that our approaches can boost the performance of fault localization significantly and also advance existing APR techniques.
    `,
    "paperUrl": "materials/FSE19-ming.pdf",
    "projectUrl": "https://github.com/justinwm/InduceBenchmark",
    
    "bibtex": `
@inproceedings{wen2019exploring,
  title={Exploring and Exploiting the Correlations between Bug-Inducing and Bug-Fixing Commits.},
  author={Wen, Ming and Wu, Rongxin and Liu, Yepang and Tian, Yongqiang and Xie, Xuan and Cheung, Shing-Chi and Su, Zhendong},
  booktitle={Proceedings of the 2019 27th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering},
  to appear,
  year={2019},
  organization={ACM}
}
    `
  }
]