module.exports = [
  {
    "title": "Using Risk Analysis to Prioritize Test Cases",
    "date": "2018",
    "authors": [
      "Ying Wang", "Hai Yu", "Zhiliang Zhu"
    ],
    "venue": "Journal of Systems and Software (JSS)",
    "venueShort": "JSS",
    "tags": [],
    "abstract": `
    In this paper, we present a risk-based test case prioritization (Ri-TCP) algorithm based on the transmission of information flows among software components. Most of the existing approaches rely on the historical code changes or test case execution data, few of them effectively use the system topology information covered by test cases when scheduling the execution of test cases. From the perspective of code structure, the proposed algorithm firstly maps software into an information flow-based directed network model. Then, functional paths covered by each test case are represented by a set of barbell motifs. Finally, combining with probabilistic risk analysis (PRA) and fault tree model, we assign a priority to each test case by calculating the sum of risk indexes of all the barbells covered by it. Experimental results demonstrate that Ri-TCP technique has a higher detection rate of faults with serious risk indicators and performs stably in different systems, compared with the other state-of-the-art algorithms.
    `,
    "paperUrl": "materials/JSS18-ying.pdf",
    
    
    "bibtex": `
@article{wang2018using,
  title={Using reliability risk analysis to prioritize test cases},
  author={Ying, Wang and Zhiliang, Zhu and Bo,Yang and Fangda, Guo and Hai,Yu},
  journal={Journal of Systems and Software},
  volume={139},
  pages={14--31},
  year={2018},
  publisher={Elsevier}
}
    `
  }
]