module.exports = [
  {
    "title": "How Well Do Change Sequences Predict Defects? Sequence Learning from Software Changes",
    "date": "2020",
    "authors": [
      "Ming Wen", "Rongxin Wu", "Shing-Chi Cheung"
    ],
    "venue": "IEEE Transactions on Software Engineering 2020",
    "venueShort": "TSE",
    "tags": ["Software Analytics", "Defect Prediction"],
    "abstract": `
    Software defect prediction, which aims to identify defective modules, can assist developers in finding bugs and prioritizing limited quality assurance resources. Various features to build defect prediction models have been proposed and evaluated. Among them, process metrics are one important category. Yet, existing process metrics are mainly encoded manually from change histories and ignore the sequential information arising from the changes during software evolution. Unlike traditional process metrics used for existing defect prediction models, change sequences are mostly vectors of variable length. This makes it difficult to apply such sequences directly in prediction models that are driven by conventional classifiers. To resolve this challenge, we utilize Recurrent Neural Network (RNN), which is a deep learning technique, to encode features from sequence data automatically. In this paper, we propose a novel approach called Fences, which extracts six types of change sequences covering different aspects of software changes via fine-grained change analysis. It approaches defects prediction by mapping it to a sequence labeling problem solvable by RNN. Our evaluations on 10 open source projects show that Fences can predict defects with high performance. Fences also outperforms the state-of-the-art technique which learns semantic features automatically from static code via deep learning.
    `,
    "paperUrl": "materials/TSE19-ming.pdf",
    
    
    "bibtex": `
@article{DBLP:journals/tse/WenWC20,
  author    = {Ming Wen and
               Rongxin Wu and
               Shing{-}Chi Cheung},
  title     = {How Well Do Change Sequences Predict Defects? Sequence Learning from
               Software Changes},
  journal   = {{IEEE} Trans. Software Eng.},
  volume    = {46},
  number    = {11},
  pages     = {1155--1175},
  year      = {2020},
  url       = {https://doi.org/10.1109/TSE.2018.2876256},
  doi       = {10.1109/TSE.2018.2876256},
  timestamp = {Tue, 02 Feb 2021 18:29:15 +0100},
  biburl    = {https://dblp.org/rec/journals/tse/WenWC20.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `
  }
]