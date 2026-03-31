module.exports = [
  {
    "title": "Disclosing and Locating Concurrency Bugs of Interrupt-Driven IoT Programs",
    "date": "2019",
    "authors": [
      "Yuxia Sun", "Shing-Chi Cheung", "Song Guo", "Ming Cheng"
    ],
    "venue": "IEEE Internet of Things Journal 2019",
    "venueShort": "IoT-J",
    "tags": [],
    "abstract": `
    The Internet of Things (IoT) is envisioned as a distributed network formed by many end devices, e.g., the motes of wireless sensor network (WSN). These important IoT end devices enable ubiquitous sensing of environments and provide reliable services for mission-critical applications. However, programs running on WSN devices are typically interrupt-driven and prone to interrupt-induced concurrency bugs, which are primarily caused by erroneous interleavings among interrupt procedure instances (IPIs) (namely, executions of interrupt processing logic). In this paper, we use a set of dynamic bug patterns to characterize the concurrency bugs due to buggy access-interleavings among IPIs to shared resources, including shared memory locations and shared communication channels. By matching the above bug patterns, a dynamic analysis approach called disclosing and locating concurrency bugs of interrupt-driven IoT programs based on dynamic bug patterns (Daemon) is proposed to automatically detect and locate concurrency bugs in WSN programs. A GUI tool of Daemon is developed. As the empirical studies exhibit, the tool can discover concurrency bugs effectively and locate the buggy source lines visually.
    `,
    "paperUrl": "https://ieeexplore.ieee.org/document/8746139",
    
    
    "bibtex": `
@article{DBLP:journals/iotj/SunCGC19,
  author    = {Yuxia Sun and
               Shing{-}Chi Cheung and
               Song Guo and
               Ming Cheng},
  title     = {Disclosing and Locating Concurrency Bugs of Interrupt-Driven IoT Programs},
  journal   = {{IEEE} Internet of Things Journal},
  volume    = {6},
  number    = {5},
  pages     = {8945--8957},
  year      = {2019},
  url       = {https://doi.org/10.1109/JIOT.2019.2925291},
  doi       = {10.1109/JIOT.2019.2925291},
  timestamp = {Thu, 07 Nov 2019 09:19:37 +0100},
  biburl    = {https://dblp.org/rec/bib/journals/iotj/SunCGC19},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `
  }
]