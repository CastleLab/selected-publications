module.exports = [
  {
    "title": "OASIS: Prioritizing Static Analysis Warnings for Android Apps Based on App User Reviews",
    "date": "2017",
    "authors": [
      "Lili Wei", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "11th joint meeting of the European Software Engineering Conference and the ACM SIGSOFT Symposium on the Foundations of Software Engineering (ESEC/FSE 2017), Paderborn, Germany, Sept 2017",
    "venueShort": "ESEC/FSE",
    "tags": [],
    "abstract": `
    Lint is a widely-used static analyzer for detecting bugs/issues in Android apps. However, it can generate many false warnings. One existing solution to this problem is to leverage project history data (e.g., bug fixing statistics) for warning prioritization. Unfortunately, such techniques are biased toward a project’s archived warnings and can easily miss newissues. Anotherweakness is that developers cannot readily relate the warnings to the impacts perceivable by users. To overcome these weaknesses, in this paper, we propose a semantics-aware approach, OASIS, to prioritizing Lint warnings by leveraging app user reviews. OASIS combines program analysis and NLP techniques to recover the intrinsic links between the Lint warnings for a given app and the user complaints on the app problems caused by the issues of concern. OASIS leverages the strength of such links to prioritize warnings. We evaluated OASIS on six popular and large-scale open-source Android apps. The results show that OASIS can effectively prioritize Lint warnings and help identify new issues that are previously-unknown to app developers.
    `,
    "paperUrl": "materials/OASIS_author_copy.pdf",
    
    
    "bibtex": `
@inproceedings{Wei_FSE17,
	author    = {Lili Wei and Yepang Liu and
		    	 Shing{-}Chi Cheung},
	title     = {OASIS: Prioritizing Static Analysis Warnings for Android Apps Based on App User Reviews},
	booktitle = {joint meeting of the European Software Engineering Conference and the ACM SIGSOFT Symposium on the Foundations of Software Engineering, {ESEC/FSE} 2017},
	year      = {2017}
}
    `
  }
]