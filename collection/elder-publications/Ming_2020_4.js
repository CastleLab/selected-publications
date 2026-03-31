module.exports = [
  {
    "title": "Historical Spectrum based Fault Localization",
    "date": "2021",
    "authors": [
      "Ming Wen", "Junjie Chen", "Yongqiang Tian", "Rongxin Wu", "Dan Hao", "Shi Han", "Shing-Chi Cheung"
    ],
    "venue": "Transactions of Software Engineering 2021",
    "venueShort": "TSE",
    "tags": [],
    "abstract": `
    Spectrum-based fault localization (SBFL) techniques are widely studied and have been evaluated to be effective in locating faults. Recent studies also showed that developers from industry value automated SBFL techniques. However, their effectiveness is still limited by two main reasons. First, the test coverage information leveraged to construct the spectrum does not reflect the root cause directly. Second, SBFL suffers from the tie issue so that the buggy code entities can not be well differentiated from non-buggy ones. To address these challenges, we propose to leverage the information of version histories in fault localization based on the following two intuitions. First, version histories record how bugs are introduced to software projects and this information reflects the root cause of bugs directly. Second, the evolution histories of code can help differentiate those suspicious code entities ranked in tie by SBFL. Our intuitions are also inspired by the observations on debugging practices from large open source projects and industry.
				Based on the intuitions, we propose a novel technique HSFL (historical spectrum based fault localization). Specifically, HSFL identifies bug-inducing commits from the version history in the first step. It then constructs historical spectrum (denoted as Histrum) based on bug-inducing commits, which is another dimension of spectrum orthogonal to the coverage based spectrum used in SBFL. HSFL finally ranks the suspicious code elements based on our proposed Histrum and the conventional spectrum. HSFL outperforms the state-of-the-art SBFL techniques significantly on the Defects4J benchmark. Specifically, it locates and ranks the buggy statement at Top-1 for 77.8% more bugs as compared with SBFL, and 33.9% more bugs at Top-5. Besides, for the metrics MAP and MRR, HSFL achieves an average improvement of 28.3% and 40.8% over all bugs, respectively. Moreover, HSFL can also outperform other six families of fault localization techniques, and our proposed Histrum model can be integrated with different families of techniques and boost their performance.
    `,
    "paperUrl": "materials/TSE20-ming.pdf",
    "projectUrl": "https://github.com/justinwm/HSFL/",
    "bibtex": `
@article{WEN_TSE21,
 author    = {Ming, Wen and Junjie, Chen and Yongqiang, Tian and Rongxin, Wu and Dan, Hao and Shi, Han and Shing-Chi, Cheung},
 title     = {Historical Spectrum based Fault Localization},
  journal   = {{IEEE} Trans. Software Eng.},
  volume    = {47},
  number    = {11},
  pages     = {2348--2368},
  year      = {2021},
  url       = {https://doi.org/10.1109/TSE.2019.2948158},
  doi       = {10.1109/TSE.2019.2948158}
}
    `
  }
]