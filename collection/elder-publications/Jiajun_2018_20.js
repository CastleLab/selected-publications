module.exports = [
  {
    "title": "A Tale of Two Cities: How WebView Induces Bugs to Android Applications",
    "date": "2018",
    "authors": [
      "Jiajun Hu", "Lili Wei", "Yepang Liu", "Shing-Chi Cheung", "Huaxun Huang"
    ],
    "venue": "Proceedings of 2018 33rd ACM/IEEE International Conference on Automated Software Engineering (ASE'18), September 3-7, 2018, Montpellier, France",
    "venueShort": "ASE",
    "tags": [],
    "abstract": `
    WebView is a widely used Android component that augments a native app with web browser capabilities. It eases the interactions between an app’s native code and web code. However, the interaction mechanism of WebView induces new types of bugs in Android apps. Understanding the characteristics and manifestation of these WebView-induced bugs (ωBugs for short) facilitates the correct usages of WebViews in Android apps. This motivates us to conduct the first empirical study on ωBugs based on those found in popular open-source Android apps. Our study identified the major root causes and consequences of ωBugs and made interesting observations that can be leveraged for detecting and diagnosing ωBugs. Based on the empirical study, we further propose an automated testing technique ωDroid to effectively expose ωBugs in Android apps. In our experiments, ωDroid successfully discovered 30 unique and previously-unknown ωBugs when applied to 146 open-source Android apps. We reported the 30 ωBugs to the corresponding app developers. Out of these 30 ωBugs, 14 were confirmed and 7 of them were fixed. This shows that ωDroid can effectively detect ωBugs that are of the developers’ concern.
    `,
    "paperUrl": "materials/wDroid.pdf",
    "projectUrl": "http://home.cse.ust.hk/~jhuao/wDroid.html",
    
    "bibtex": `
@inproceedings {ASE18Hu,
  title = {{A Tale of Two Cities: How WebView Induces Bugs to Android Applications}},
  author = {Jiajun Hu, Lili Wei, Yepang Liu, Shing-Chi Cheung, Huaxun Huang},
  booktitle = {{Proceedings of the 2018 33rd ACM/IEEE International Conference on Automated Software Engineering (ASE’18)}},
  year = {2018},
}
    `
  }
]