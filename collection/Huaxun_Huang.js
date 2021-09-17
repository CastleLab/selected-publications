module.exports = [
  {
    "title": "Characterizing and Detecting Configuration Compatibility Issues in Android Apps",
    "date": "2021-08-26",
    "authors": [
      "Huaxun Huang", "Ming Wen", "Lili Wei", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "Proceedings of the 36th IEEE/ACM International Conference on Automated Software Engineering (ASE '21)",
    "venueShort": "ASE",
    "tags": [
      "Android", "Compatibility Issues", "XML Configurations"
    ],
    "abstract": `
XML configuration files are widely used in Android to define an app's user interface and essential runtime information such as system permissions. As Android evolves, it might introduce functional changes in the configuration environment, thus causing compatibility issues that manifest as inconsistent app behaviors at different API levels. Such issues can often induce software crashes and inconsistent look-and-feel when running at specific Android versions. Existing works incur plenty of false positive and false negative issue-detection rules by conducting trivial data-flow analysis while failing to model the XML tree hierarchies of the Android configuration files. Besides, little is known about how the changes in an Android framework can induce such compatibility issues. To bridge such gaps, we conducted a systematic study by analyzing 196 real-world issues collected from 43 popular apps. We identified common patterns of Android framework code changes that induce such configuration compatibility issues. Based on the findings, we propose \textsc{ConfDroid} that can automatically extract rules for detecting configuration compatibility issues. The intuition is to perform symbolic execution based on a model learned from the common code change patterns. Experiment results show that \textsc{ConfDroid} can successfully extract 282 valid issue-detection rules with a precision of 91.9\%. Among them, 65 extracted rules can manifest issues that cannot be detected by the rules of state-of-the-art baselines. More importantly, 11 out of them have led to the detection of 107 reproducible configuration compatibility issues that the baselines cannot detect in 30 out of 316 real-world Android apps.
    `,
    "projectUrl": "https://sites.google.com/view/confdroid",
    'arxivUrl': 'https://arxiv.org/abs/2109.00300'
  }
]