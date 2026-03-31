module.exports = [
  {
    "title": "AATT+: Effectively Manifesting Concurrency Bugs in Android Apps",
    "date": "2018",
    "authors": [
      "Jue Wang", "Yanyan Jiang", "Chang Xu", "Qiwei Li", "Tianxiao Gu", "Jun Ma", "Xiaoxing Ma", "Jian Lu"
    ],
    "venue": "Science of Computer Programming (SCP)",
    "venueShort": "SCP",
    "tags": [],
    "abstract": `
    Smartphones are indispensable in people’s daily activities, and smartphone apps tend to be increasingly concurrent due to the wide use of multi-core devices and technologies. Due to this tendency, developers are increasingly unable to tackle the complexity of concurrent apps and to avoid subtle concurrency bugs. To better address this issue, we propose a novel approach to detecting concurrency bugs in Android apps based on the fact that one can generate simultaneous input events and their schedules for an app, which would easily trigger concurrency bugs in an app. We conduct systematic state space exploration to find potentially conflicting resource accesses in an Android app. The app is then automatically pressure-tested by guided event and schedule generation. We implemented our prototype tool named AATT+ and evaluated it with two sets of real-world Android apps. Benchmarking using 15 Android apps with previously known concurrency bugs, AATT+ and existing concurrency-unaware techniques detected 10 and 1 bugs, respectively. Evaluated with another set of 17 popu- lar Android apps, AATT+ detected 11 concurrency bugs and 7 of them were previously unknown, achieving an over 80% higher detection rate than existing concurrency-unaware techniques.
    `,
    "paperUrl": "https://cs.nju.edu.cn/changxu/1_publications/SCP18.pdf",
    "projectUrl": "https://github.com/skull591/AATT",
    
    "bibtex": `
@inproceedings{wang_aatt_2018,
  author  = {Jue Wang and Yanyan Jiang and Chang Xu and Qiwei Li and Tianxiao Gu and Jun Ma and Xiaoxing Ma and Jian Lu},
  title   = {AATT+: Effectively manifesting concurrency bugs in Android apps},
  journal = {Science of Computer Programming (SCP)},
  year    = {2018},
  volume  = {163},
  pages   = {1--18},
  url     = {https://doi.org/10.1016/j.scico.2018.03.008},
  code    = {https://github.com/skull591/AATT},
}
    `
  }
]