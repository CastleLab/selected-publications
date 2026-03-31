module.exports = [
    {
        "title": "Programming by Example Made Easy",
        "date": "2023",
        "authors": [
            "Jiarong Wu",
            "Lili Wei",
            "Yanyan Jiang",
            "Shing-Chi Cheung",
            "Luyao Ren",
            "Chang Xu"
        ],
        "venue": "ACM Transactions on Software Engineering and Methodology",
        "venueShort": "TOSEM",
        "tags": [
            "Programming Synthesis",
            "Programming by Example"
        ],
        "abstract": "Programming by example (PBE) is an emerging programming paradigm that automatically synthesizes programs specified by user-provided input-output examples. Despite the convenience for end-users, implementing PBE tools often requires strong expertise in programming language and synthesis algorithms. Such a level of knowledge is uncommon among software developers. It greatly limits the broad adoption of PBE by the industry. To facilitate the adoption of PBE techniques, we propose a PBE framework called Bee, which leverages an “entity-action” model based on relational tables to ease PBE development for a wide but restrained range of domains. Implementing PBE tools with Bee only requires adapting domain-specific data entities and user actions to tables, with no need to design a domain-specific language or an efficient synthesis algorithm. The synthesis algorithm of Bee exploits bidirectional searching and constraint-solving techniques to address the challenge of value computation nested in table transformation. We evaluated Bee’s effectiveness on 64 PBE tasks from three different domains and usability with a human study of 12 participants. Evaluation results show that Bee is easier to learn and use than the state-of-the-art PBE framework, and the bidirectional algorithm achieves comparable performance to domain-specifically optimized synthesizers.",
        "paperUrl": "https://dl.acm.org/doi/10.1145/3607185",
        "projectUrl": "https://github.com/Sissel-Wu/Bee",
        "bibtex": `
@article{10.1145/3607185,
author = {Wu, Jiarong and Wei, Lili and Jiang, Yanyan and Cheung, Shing-Chi and Ren, Luyao and Xu, Chang},
title = {Programming by Example Made Easy},
year = {2023},
issue_date = {January 2024},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
volume = {33},
number = {1},
issn = {1049-331X},
url = {https://doi.org/10.1145/3607185},
doi = {10.1145/3607185},
abstract = {Programming by example (PBE) is an emerging programming paradigm that automatically synthesizes programs specified by user-provided input-output examples. Despite the convenience for end-users, implementing PBE tools often requires strong expertise in programming language and synthesis algorithms. Such a level of knowledge is uncommon among software developers. It greatly limits the broad adoption of PBE by the industry. To facilitate the adoption of PBE techniques, we propose a PBE framework called Bee, which leverages an “entity-action” model based on relational tables to ease PBE development for a wide but restrained range of domains. Implementing PBE tools with Bee only requires adapting domain-specific data entities and user actions to tables, with no need to design a domain-specific language or an efficient synthesis algorithm. The synthesis algorithm of Bee exploits bidirectional searching and constraint-solving techniques to address the challenge of value computation nested in table transformation. We evaluated Bee’s effectiveness on 64 PBE tasks from three different domains and usability with a human study of 12 participants. Evaluation results show that Bee is easier to learn and use than the state-of-the-art PBE framework, and the bidirectional algorithm achieves comparable performance to domain-specifically optimized synthesizers.},
journal = {ACM Trans. Softw. Eng. Methodol.},
month = {nov},
articleno = {4},
numpages = {36},
keywords = {programming by example, Program synthesis}
}
        `
    }
]
