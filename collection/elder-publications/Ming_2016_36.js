module.exports = [
  {
    "title": "Locus: Locating Bugs from Software Changes",
    "date": "2016",
    "authors": [
      "Ming Wen", "Rongxin Wu", "Shing-Chi Cheung"
    ],
    "venue": "31st IEEE/ACM International Conference on Automated Software Engineering (ASE 2016), Singapore, Sept 2016",
    "venueShort": "ASE",
    "tags": [],
    "abstract": `
    Various information retrieval (IR) based techniques have been proposed recently to locate bugs automatically at the file level. However, their usefulness is often compromised by the coarse granularity of files and the lack of contextual information. To address this, we propose to locate bugs using software changes, which offer finer granularity than files and provide important contextual clues for bug-fixing. We observe that bug inducing changes can facilitate the bug fixing process. For example, it helps triage the bug fixing task to the developers who committed the bug inducing changes or enables developers to fix bugs by reverting these changes. Our study further identifies that change logs and the naturally small granularity of changes can help boost the performance of IR-based bug localization. Motivated by these observations, we propose an IR-based approach Locus to locate bugs from software changes, and evaluate it on six large open source projects. The results show that Locus outperforms existing techniques at the source file level localization significantly. MAP and MRR in particular have been improved, on average, by 20.1% and 20.5%, respectively. Locus is also capable of locating the inducing changes within top 5 for 41.0% of the bugs. The results show that Locus can significantly reduce the number of lines needing to be scanned to locate the bug compared with existing techniques.
    `,
    "paperUrl": "http://home.cse.ust.hk/~mwenaa/paper/ASE16-Locus.pdf",
    "projectUrl": "http://www.cse.ust.hk/~mwenaa/Locus.html",
    
    "bibtex": `
@inproceedings{Wei_ASE16,
	author    = {Ming Wen and Rongxin Wu and
		    	 Shing{-}Chi Cheung},
	title     = {Locus: Locating Bugs from Software Changes},
	booktitle = {Proceedings of the 31st IEEE/ACM International Conference on Automated Software Engineering, {ASE} 2016},
	year      = {2016}
}
    `
  }
]