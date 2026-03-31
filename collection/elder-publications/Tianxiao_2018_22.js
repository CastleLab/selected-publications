module.exports = [
  {
    "title": "Automating Object Transformations for Dynamic Software Updating via Online Execution Synthesis",
    "date": "2018",
    "authors": [
      "Tianxiao Gu", "Xiaoxing Ma", "Chang Xu", "Yanyan Jiang", "Chun Cao", "Jian Lu"
    ],
    "venue": "32nd European Conference on Object-Oriented Programming (ECOOP 2018), Article 19",
    "venueShort": "ECOOP",
    "tags": [],
    "abstract": `
    Dynamic software updating (DSU) is a technique to upgrade a running software system on the fly without stopping the system. During updating, the runtime state of the modified components of the system needs to be properly transformed into a new state, so that the modified components can still correctly interact with the rest of the system. However, the transformation is non-trivial to realize due to the gap between the low-level implementations of two versions of a program. This paper presents AOTES, a novel approach to automating object transformations for dynamic updating of Java programs. AOTES bridges the gap by abstracting the old state of an object to a history of method invocations, and re-invoking the new version of all methods in the history to get the desired new state. AOTES requires no instrumentation to record any data and thus has no overhead during normal execution. We propose and implement a novel technique that can synthesize an equivalent history of method invocations based on the current object state only. We evaluated AOTES on software updates taken from Apache Commons Collections, Tomcat, FTP Server and SSHD Server. Experimental results show that AOTES successfully handled 51 of 61 object transformations of 21 updated classes, while two state-of-the-art approaches only handled 11 and 6 of 61, respectively.
    `,
    "paperUrl": "https://cs.nju.edu.cn/changxu/1_publications/ECOOP18.pdf",
    
    
    "bibtex": `
@inproceedings{gu_automating_2018,
  author    = {Tianxiao Gu and Xiaoxing Ma and Chang Xu and Yanyan Jiang and Chun Cao and Jian Lu},
  title     = {Automating object transformations for dynamic software updating via online execution synthesis},
  pages     = {to appear},
  year      = {2018},
  booktitle = {Proceedings of the 32nd European Conference on Object-Oriented Programming (ECOOP)},
}
    `
  }
]