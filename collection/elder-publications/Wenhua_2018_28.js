module.exports = [
  {
    "title": "Improving Verification Accuracy of CPS by Modeling and Calibrating Interaction Uncertainty",
    "date": "2018",
    "authors": [
      "Wenhua Yang", "Chang Xu", "Minxue Pan", "Xiaoxing Ma", "Jian Lu"
    ],
    "venue": "ACM Transactions on Internet Technology (TOIT)",
    "venueShort": "TOIT",
    "tags": [],
    "abstract": `
    Cyber-Physical Systems (CPS) intrinsically combine hardware and physical systems with software and network, which are together creating complex and correlated interactions. CPS applications often experience uncertainty in interacting with environment through unreliable sensor. They can be faulty and exhibit runtime errors if developers have not considered environmental interaction uncertainty adequately. Existing work in verifying CPS applications ignores interaction uncertainty and thus may overlook uncertainty-related faults. To improve verification accuracy, in this article we propose a novel approach to verifying CPS applications with explicit modeling of uncertainty arisen in the interaction between them and the environment. Our approach builds an Interactive State Machine (ISM) network for a CPS application and models interaction uncertainty by error ranges and distributions. Then it encodes both the application and uncertainty models to SMT formula to leverage SMT solvers searching for counterexamples that represent application failures. The precision of uncertainty model can affect the verification results. However, it may be difficult to model interaction uncertainty precisely enough at the beginning, because of the uncontrollable noise of sensors and insufficient data sample size. To further improve the accuracy of the verification results, we propose an approach to identifying and calibrating imprecise uncertainty models. We exploit the inconsistency between the counterexamples’ estimate and actual occurrence probabilities to identify possible imprecision in uncertainty models, and the calibration of imprecise models is to minimize the inconsistency, which is reduced to a Search- Based Software Engineering (SBSE) problem. We experimentally evaluated our verification and calibration approaches with real-world CPS applications, and the experimental results confirmed their effectiveness and efficiency.
    `,
    "paperUrl": "https://cs.nju.edu.cn/changxu/1_publications/TOIT18.pdf",
    
    
    "bibtex": `
@inproceedings{yang2018toit,
	author    = {Wenhua Yang, Chang Xu, Minxue Pan, Xiaoxing Ma, and Jian Lu},
	title     = {Improving Verification Accuracy of CPS by Modeling and Calibrating Interaction Uncertainty},
	journal = {ACM Transactions on Internet Technology (TOIT)},
	year      = {2018},
	pages     = {1-37}
	}
    `
  }
]