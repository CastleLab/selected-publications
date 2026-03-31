module.exports = [
  {
    "title": "DroidLeaks: a comprehensive database of resource leaks in Android apps",
    "date": "2019",
    "authors": [
      "Yepang Liu", "Jue Wang", "Lili Wei", "Chang Xu", "Shing-Chi Cheung", "Tianyong Wu", "Jun Yan", "Jian Zhang"
    ],
    "venue": "Empirical Software Engineering 2019",
    "venueShort": "EmSE",
    "tags": [],
    "abstract": `
    Resource leaks in Android apps are pervasive. They can cause serious performance degradation and system crashes. In recent years, many resource leak detection techniques have been proposed to help Android developers correctly manage system resources. Yet, there exist no common databases of real-world bugs for effectively comparing such techniques to understand their strengths and limitations. This paper describes our effort towards constructing such a bug database named DROIDLEAKS. To extract real resource leak bugs, we mined 124,215 code revisions of 34 popular open-source Android apps. After automated filtering and manual validation, we successfully found 292 fixed resource leak bugs, which cover a diverse set of resource classes, from 32 analyzed apps. To understand these bugs, we conducted an empirical study, which revealed the characteristics of resource leaks in Android apps and common patterns of resource management mistakes made by developers. To further demonstrate the usefulness of our work, we evaluated eight resource leak detectors from both academia and industry on DROIDLEAKS and performed a detailed analysis of their performance. We release DROIDLEAKS for public access to support future research.
    `,
    "paperUrl": "https://link.springer.com/article/10.1007/s10664-019-09715-8",
    "projectUrl": "https://zenodo.org/record/2589909#.XfxlvZP7TOR",
    
    "bibtex": `
@article{DBLP:journals/ese/LiuWWXCWYZ19,
  author    = {Yepang Liu and
               Jue Wang and
               Lili Wei and
               Chang Xu and
               Shing{-}Chi Cheung and
               Tianyong Wu and
               Jun Yan and
               Jian Zhang},
  title     = {DroidLeaks: a comprehensive database of resource leaks in Android
               apps},
  journal   = {Empirical Software Engineering},
  volume    = {24},
  number    = {6},
  pages     = {3435--3483},
  year      = {2019},
  url       = {https://doi.org/10.1007/s10664-019-09715-8},
  doi       = {10.1007/s10664-019-09715-8},
  timestamp = {Thu, 19 Dec 2019 09:26:48 +0100},
  biburl    = {https://dblp.org/rec/bib/journals/ese/LiuWWXCWYZ19},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `
  }
]