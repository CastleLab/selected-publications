module.exports = [
  {
    "title": "Understanding and Detecting Callback Compatibility Issues for Android Applications",
    "date": "2018",
    "authors": [
      "Huaxun Huang", "Lili Wei", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "2018 33rd ACM/IEEE International Conference on Automated Software Engineering (ASE '18), September 2018, Montpellier, France",
    "venueShort": "ASE",
    "tags": [],
    "abstract": `
    The control flows of Android apps are largely driven by the protocols that govern how callback APIs are invoked in response to various event.
When these callback APIs evolve along with the Android framework, the changes in their invocation protocols can induce unexpected control flows to existing Android apps, causing various compatibility issues. We refer to these issues as callback compatibility issues.
While Android framework updates have received due attention, little is known about their impacts on app control flows and the callback compatibility issues thus induced.
To bridge the gap, we examined Android documentations
and conducted an empirical study on 100 real-world callback compatibility issues
to investigate how these issues were induced by callback API evolutions. 
Based on our empirical findings, we propose a graph-based model to capture the control flow inconsistencies caused by API evolutions and devise a static analysis technique, CIDER, to detect callback compatibility issues.
Our evaluation of CIDER on 20 popular open-source Android apps shows that CIDER is effective. It detected 13 new callback compatibility issues in these apps, among which 12 issues were confirmed and 9 issues were fixed.
    `,
    "paperUrl": "materials/callback.pdf",
    "projectUrl": "https://cideranalyzer.github.io/",
    
    "bibtex": `
@inproceedings {ASE18,
  title = {{Understanding and Detecting Callback Compatibility Issues for Android Applications}},
  author = {Huaxun Huang, Lili Wei, Yepang Liu, Shing-Chi Cheung},
  booktitle = {Proceedings of the 2018 33rd ACM/IEEE International Conference on Automated Software Engineering, {ASE} 2018},
  year = {2018},
}
    `
  }
]