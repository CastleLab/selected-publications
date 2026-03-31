module.exports = [
    {
        title: "Can Systems Explain Permissions Better? Understanding Users' Misperceptions under Smartphone Runtime Permission Model",
        date: "2021-08-11",
        authors: [
            "Bingyu Shen", "Lili Wei", "Chengcheng Xiang", "Yudong Wu", "Mingyao Shen", "Yuanyuan Zhou", "Xinxin Jin"
        ],
        venue: "the 30th USENIX Security Symposium, Vancouver, BC, Canada, Aug 11-13 2021",
        venueShort: "USENIX Security",
        tags: [
            "Android",
            "User study",
            "Security"
        ],
        abstract: `
            Current smartphone operating systems enable users to manage permissions according to their personal preferences with a runtime permission model. Nonetheless, the systems provide very limited information when requesting permissions, making it difficult for users to understand permissions’ capabilities and potentially induced risks.
            In this paper, we first investigated to what extent current system-provided information can help users understand the scope of permissions and their potential risks. We took a mixed-methods approach by collecting real permission settings from 4,636 Android users, an interview study of 20 participants, and large-scale Internet surveys of 1559 users. Our study identified several common misunderstandings on the runtime permission model among users. We found that only a very small percentage (6.1%) of users can infer the scope of permission groups accurately from the system-provided information. This indicates that the information provided by current systems is far from sufficient.
            We thereby explored what extra information that systems can provide to help users make more informed permission decisions. By surveying users’ common concerns on apps’ permission requests, we identified five types of information (i.e., decision factors) that are helpful for users’ decisions. We further studied the impact and helpfulness of the factors to users’ permission decisions with both positive and negative messages. Our study shows that the background access factor helps most while the grant rate helps the least. Based on the findings, we provide suggestions for system designers to enhance future systems with more permission information.
        `,
        projectUrl: "https://ucsdopera.github.io/PermissionStudyUsenix21/dataset/",
        paperUrl: "http://cseweb.ucsd.edu/~byshen/files/sec21-shen.pdf",
    },
    {
        title: "Logging Practices with Mobile Analytics: An Empirical Study on Firebase",
        date: "2021-05-17",
        authors: [
            "Julian Harty", "Haonan Zhang", "Lili Wei", "Luca Pascarella", "Maurício Aniche", "Weiyi Shang"
        ],
        venue: "the 8th IEEE/ACM International Conference on Mobile Software Engineering and Systems, Madrid, Spain, May 17-19 2021",
        venueShort: "MOBILESoft",
        tags: [
            "Android",
            "Empirical study"
        ],
        abstract: `
            Software logs are of great value in both industrial and open-source projects. Mobile analytics logging enables developers to collect logs remotely from their apps running on end user devices at the cost of recording and transmitting logs across the Internet to a centralised infrastructure.
            This paper makes a first step in characterising logging practices with a widely adopted mobile analytics logging library, namely Firebase Analytics. We provide an empirical evaluation of the use of Firebase Analytics in 57 open-source Android applications by studying the evolution of code-bases to understand: a) the needs-in-common that push practitioners to adopt logging practices on mobile devices, and b) the differences in the ways developers use local and remote logging.
            Our results indicate mobile analytics logs are less pervasive and less maintained than traditional logging code. Based on our analysis, we believe logging using mobile analytics is more user centered compared to traditional logging, where the latter is mainly used to record information for debugging purposes.
        `,
        paperUrl: "https://arxiv.org/abs/2104.02513",
    }
]
