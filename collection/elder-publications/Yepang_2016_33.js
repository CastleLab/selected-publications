module.exports = [
  {
    "title": "Understanding and Detecting Wake Lock Misuses for Android Applications",
    "date": "2016",
    "authors": [
      "Yepang Liu", "Chang Xu", "Shing-Chi Cheung", "Valerio Terrangi"
    ],
    "venue": "24th ACM SIGSOFT International Symposium on the Foundations of Software Engineering (FSE 2016), Seattle, WA, USA, Nov 2016",
    "venueShort": "FSE ",
    "tags": [],
    "abstract": `
    Wake locks are widely used in Android apps to protect critical computations from being disrupted by device sleeping. Inappropriate use of wake locks often seriously impacts user experience. However, little is known on how wake locks are used in real-world Android apps and the impact of their misuses. To bridge the gap, we conducted a large-scale empirical study on 44,736 commercial and 31 open-source Android apps. By automated program analysis and manual investigation, we observed (1) common program points where wake locks are acquired and released, (2) 13 types of critical computational tasks that are often protected by wake locks, and (3) eight patterns of wake lock misuses that commonly cause functional and non-functional issues, only three of which had been studied by existing work. Based on our findings, we designed a static analysis technique, Elite, to detect two most common patterns of wake lock misuses. Our experiments on real-world subjects showed that Elite is effective and can outperform two state-of-the-art techniques.
    `,
    "paperUrl": "http://sccpu2.cse.ust.hk/andrewust/files/FSE2016.pdf",
    
    "slidesUrl": "http://sccpu2.cse.ust.hk/castle/materials/ELITE-FSE2016-V3.pdf",
    "bibtex": `
@inproceedings{Liu_FSE16,
	author    = {Yepang Liu and Chang Xu and
		    	 Shing{-}Chi Cheung and Valerio Terragni},
	title     = {Understanding and Detecting Wake Lock Misuses for Android Applications},
	booktitle = {Proceedings of the 2016 International Symposium on the Foundations of Software Engineering, {FSE} 2016},
	year      = {2016}
}
    `
  }
]