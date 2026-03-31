module.exports = [
  {
    "title": "Analyzing and Disentangling Interleaved Interrupt-Driven IoT Programs",
    "date": "2019",
    "authors": [
      "Yuxia Sun", "Song Guo", "Shing-Chi Cheung", "Yong Tang"
    ],
    "venue": "IEEE Internet of Things Journal 2019",
    "venueShort": "IoT-J",
    "tags": [],
    "abstract": `
    In the Internet of Things (IoT) community, wireless sensor network (WSN) is a key technique to enable ubiquitous sensing of environments and provide reliable services to applications. WSN programs, typically interrupt-driven, implement the functionalities via the collaboration of interrupt procedure instances (IPIs, namely executions of interrupt processing logic). However, due to the complicated concurrency model of WSN programs, the IPIs are interleaved intricately and the program behaviors are hard to predicate from the source codes. Thus, to improve the software quality of WSN programs, it is significant to disentangle the interleaved executions and develop various IPI-based program analysis techniques, including offline and online ones. As the common foundation of those techniques, a generic efficient and real-time algorithm to identify IPIs is urgently desired. However, the existing instance-identification approach cannot satisfy the desires. In this paper, we first formally define the concept of IPI. Next, we propose a generic IPI-identification algorithm, and prove its correctness, real-time, and efficiency. We also conduct comparison experiments to illustrate that our algorithm is more efficient than the existing one in terms of both time and space. As the theoretical analyses and empirical studies exhibit, our algorithm provides the groundwork for IPI-based analyses of WSN programs in IoT environment.
    `,
    "paperUrl": "https://ieeexplore.ieee.org/document/8648188",
    
    
    "bibtex": `
@article{DBLP:journals/iotj/SunGCT19,
  author    = {Yuxia Sun and
               Song Guo and
               Shing{-}Chi Cheung and
               Yong Tang},
  title     = {Analyzing and Disentangling Interleaved Interrupt-Driven IoT Programs},
  journal   = {{IEEE} Internet of Things Journal},
  volume    = {6},
  number    = {3},
  pages     = {5376--5386},
  year      = {2019},
  url       = {https://doi.org/10.1109/JIOT.2019.2900769},
  doi       = {10.1109/JIOT.2019.2900769},
  timestamp = {Fri, 05 Jul 2019 09:39:40 +0200},
  biburl    = {https://dblp.org/rec/bib/journals/iotj/SunGCT19},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `
  }
]