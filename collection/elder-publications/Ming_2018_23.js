module.exports = [
  {
    "title": "Context-Aware Patch Generation for Better Automated Program Repair",
    "date": "2018",
    "authors": [
      "Ming Wen", "Junjie Chen", "Rongxin Wu", "Dan Hao", "Shing-Chi Cheung"
    ],
    "venue": "International Conference on Software Engineering, Technical Research Paper, Gothenburg, Sweden, May 27 - 3 June 2018",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    The effectiveness of search-based automated program repair is limited in the number of correct patches that can be successfully generated.
There are two causes of such limitation. 
First, the search space does not contain the correct patch. 
Second, the search space is huge and therefore the correct patch cannot be generated (\ie correct patches are either generated after incorrect plausible ones or not generated within the time budget).

To increase the likelihood of including the correct patches in the search space, we propose to work at a fine granularity in terms of AST nodes.
This, however, will further enlarge the search space, increasing the challenge to find the correct patches.
We address the challenge by devising a strategy to prioritize the candidate patches based on their likelihood of being correct.
Specifically, we study the use of AST nodes' context information to estimate the likelihood.

In this paper, we propose CapGen, a context-aware patch generation technique.
The novelty which allows CapGen to produce more correct patches lies in three aspects:
(1) The fine-granularity design enables it to find more correct fixing ingredients;
(2) The context-aware prioritization of mutation operators enables it to constrain the search space;
(3) Three context-aware models enable it to rank correct patches at high positions before incorrect plausible ones.
We evaluate CapGen on Defects4J and compare it with the state-of-the-art program repair techniques.
Our evaluation shows that CapGen outperforms and complements existing techniques.
CapGen achieves a high precision of 84.00% and can prioritize the correct patches before 98.78% of the incorrect plausible ones.
    `,
    "paperUrl": "materials/Repair.pdf",
    
    
    "bibtex": `
@inproceedings {ICSE18,
  title = {{Context-Aware Patch Generation for Better Automated Program Repair}},
  author = {Ming, Wen and Junjie, Chen and Rongxin, Wu and Dan, Hao and Shing-Chi, Cheung},
  booktitle = {{Proceedings of the 40th International Conference on Software Engineering}},
  series = {ICSE 2016},
  year = {2018},
  doi = {10.1145/3180155.3180233},
  url = {http://home.cse.ust.hk/~mwenaa/paper/Repair.pdf},
}
    `
  }
]