module.exports = [
  {
    "title": "PIVOT: Learning API-Device Correlations to Facilitate Android Compatibility Issue Detection",
    "date": "2019",
    "authors": [
      "Lili Wei", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "International Conference on Software Engineering 2019, Technical Research Paper, Montréal, QC, Canada, 25 May - 31 May",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    The heavily fragmented Android ecosystem has induced various compatibility issues in Android apps. The search space for such fragmentation-induced compatibility issues (FIC issues) is huge, comprising three dimensions: device models, Android OS versions, and Android APIs. FIC issues, especially those arising from device models, evolve quickly with the frequent release of new device models to the market. As a result, an automated technique is desired to maintain timely knowledge of such FIC issues, which are mostly undocumented. In this paper, we propose such a technique, PIVOT, that automatically learns API-device correlations of FIC issues from existing Android apps. PIVOT extracts and prioritizes API-device correlations from a given corpus of Android apps. We evaluated PIVOT with popular Android apps on Google Play. Evaluation results show that PIVOT can effectively prioritize valid API-device correlations for app corpora collected at different time. Leveraging the knowledge in the learned API-device correlations, we further conducted a case study and successfully uncovered ten previously-undetected FIC issues in open-source Android apps.
    `,
    "paperUrl": "materials/ICSE19-lili.pdf",
    "projectUrl": "https://ficissuepivot.github.io/Pivot/",
    
    "bibtex": `
@inproceedings {ICSE19Wei,
  title = {{PIVOT: Learning API-Device Correlations to Facilitate Android Compatibility Issue Detection}},
  author = {Lili Wei and Yepang Liu and Shing-Chi Cheung},
  booktitle = {{Proceedings of the 41th International Conference on Software Engineering}, {ICSE 2019}},
  year = {2019},
  pages = {11}
}
    `
  }
]