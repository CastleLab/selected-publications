module.exports = [
  {
    "title": "Sifter: A Service Isolation Strategy for Internet Applications",
    "date": "2019",
    "authors": [
      "Chunyang Ye", "Shing-Chi Cheung", "W.K. Chan"
    ],
    "venue": "IEEE Transactions on Services Computing 2019",
    "venueShort": "TSC",
    "tags": [],
    "abstract": `
    Service oriented architecture (SOA) provides a flexible platform to build collaborative Internet applications by composing existing self-contained and autonomous services. However, the implicit interactions among the concurrently provisioned services may introduce interference to Internet applications and cause them behave abnormally. It is thus desirable to isolate services to safeguard their application consistency. Existing approaches mostly address this problem by restricting concurrent execution of services to avoid all the implicit interactions. These approaches, however, compromise the performance and flexibility of Internet applications due to the long running nature of services. This paper presents Sifter, a new service isolation strategy for Internet applications. We devise in this strategy a novel static approach to analyze the potential implicit interactions among the services and their impacts on the consistency of the associated Internet applications. By locating only those afflicted implicit interactions that may violate the application consistency, a novel approach based on exception handling and behavior constraints is customized to involved services to eliminate their impacts. We show that this approach exempts the consistency property of Internet applications from being interfered at runtime. The experimental results show that our approach has a better performance than existing solutions.
    `,
    "paperUrl": "materials/TSC-cyye.pdf",
    
    
    "bibtex": `
@ARTICLE{8493286,
author={C. Ye and Shing-Chi Cheung and W. K. Chan},
journal={IEEE Transactions on Services Computing},
title={Sifter: A Service Isolation Strategy for Internet Applications},
year={2019},
volume={},
number={},
pages={1-1},
month={},}
    `
  }
]