module.exports = [
  {
    "title": "GreenDroid: Automated Diagnosis of Energy Inefficiency for Smartphone Applications",
    "date": "2014",
    "authors": [
      "Yepang Liu", "Chang Xu", "Shing-Chi Cheung", "Jian Lv"
    ],
    "venue": "IEEE Transactions on Software Engineering 40(9), September 2014",
    "venueShort": "TSE",
    "tags": [],
    "abstract": `
    Smartphone applications’ energy efficiency is vital, but many Android applications suffer from serious energy inefficiency problems. Locating these problems is labor-intensive and automated diagnosis is highly desirable. However, a key challenge is the lack of a decidable criterion that facilitates automated judgment of such energy problems. Our work aims to address this challenge. We conducted an in-depth study of 173 open-source and 229 commercial Android applications, and observed two common causes of energy problems: missing deactivation of sensors or wake locks, and cost-ineffective use of sensory data. With these findings, we
propose an automated approach to diagnosing energy problems in Android applications. Our approach explores an application’s state space by systematically executing the application using Java PathFinder (JPF). It monitors sensor and wake lock operations to detect missing deactivation of sensors and wake locks. It also tracks the transformation and usage of sensory data and judges whether they are effectively utilized by the application using our state-sensitive data utilization metric. In this way, our approach can generate detailed reports with actionable information to assist developers in validating detected energy problems. We built our approach as a tool, GreenDroid, on top of JPF. Technically, we addressed the challenges of generating user interaction events and scheduling event han- dlers in extending JPF for analyzing Android applications. We evaluated GreenDroid using 13 real-world popular Android applications. GreenDroid completed energy efficiency diagnosis for these applications in a few minutes. It successfully located real energy problems in these applications, and additionally found new unreported energy problems that were later confirmed by developers.
    `,
    "paperUrl": "http://sccpu2.cse.ust.hk/andrewust/files/TSE2014.pdf",
    "projectUrl": "http://sccpu2.cse.ust.hk/greendroid/",
    
    "bibtex": `
@ARTICLE{Liu:TSE2014, 
  author = {Liu, Yepang and Xu, Chang and Cheung, Shing-Chi and Lu, Jian}, 
  journal = {IEEE Transactions on Software Engineering}, 
  title = {GreenDroid: Automated Diagnosis of Energy Inefficiency for Smartphone Applications}, 
  year = {2014}, 
  volume = {40}, 
  number = {9}, 
  pages = {911-940}, 
  doi = {10.1109/TSE.2014.2323982}, 
  month = {Sept},
}
    `
  }
]