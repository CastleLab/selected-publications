module.exports = [
  {
    "title": "ReScue: Crafting Regular Expression DoS Attacks",
    "date": "2018",
    "authors": [
      "Yuju Shen", "Yanyan Jiang", "Chang Xu", "Ping Yu", "Xiaoxing Ma", "Jian Lu"
    ],
    "venue": "2018 33rd ACM/IEEE International Conference on Automated Software Engineering (ASE '18), September 2018, Montpellier, France",
    "venueShort": "ASE",
    "tags": [],
    "abstract": `
    Regular expression (regex) with modern extensions is one of the most popular string processing tools. However, poorly-designed regexes can yield exponentially many matching steps, and lead to regex Denial-of-Service (ReDoS) attacks under well-conceived string inputs. This paper presents ReScue, a three-phase gray-box analytical technique, to automatically generate ReDoS strings to highlight vulnerabilities of given regexes. ReScue systematically seeds (by a genetic search), incubates (by another genetic search), and finally pumps (by a regex-dedicated algorithm) for generat- ing strings with maximized search time. We implemenmted the ReScue tool and evaluated it against 29,088 practical regexes in real-world projects. The evaluation results show that ReScue found 49% more attack strings compared with the best existing technique, and applying ReScue to popular GitHub projects discovered ten previously unknown ReDoS vulnerabilities.
    `,
    "paperUrl": "https://cs.nju.edu.cn/changxu/1_publications/ASE18.pdf",
    "projectUrl": "http://2bdenny.github.io/ReScue/",
    
    "bibtex": `
@inproceedings{shen_rescue_2018,
  author    = {Yuju Shen and Yanyan Jiang and Chang Xu and Ping Yu and Xiaoxing Ma and Jian Lu},
  title     = {ReScue: Crafting regular expression DoS attacks},
  pages     = {to appear},
  year      = {2018},
  booktitle = {Proceedings of the 33rd International Conference on Automated Software Engineering (ASE)},
  pdf       = {/spar/publication/shen_rescue_2018.pdf},
  code      = {http://2bdenny.github.io/ReScue/},
}
    `
  }
]