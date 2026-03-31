module.exports = [
  {
    "title": "CACheck: Detecting and Repairing Cell Arrays in Spreadsheets",
    "date": "2017",
    "authors": [
      "Wensheng Dou", "Chang Xu", "Shing-Chi Cheung", "Jun Wei"
    ],
    "venue": "IEEE Transactions on Software Engineering (TSE)",
    "venueShort": "TSE",
    "tags": [],
    "abstract": `
    Spreadsheets are widely used by end users for numerical computation in their business. Spreadsheet cells whose computation is subject to the same semantics are often clustered in a row or column as a cell array. When a spreadsheet evolves, the cells in a cell array can degenerate due to ad hoc modifications. Such degenerated cell arrays no longer keep cells prescribing the same computational semantics, and are said to exhibit ambiguous computation smells. We propose CACheck, a novel technique that automatically detects and repairs smelly cell arrays by recovering their intended computational semantics. Our empirical study on the EUSES and Enron corpora finds that such smelly cell arrays are common. Our study also suggests that CACheck is useful for detecting and repairing real spreadsheet problems caused by smelly cell arrays. Compared with our previous work AmCheck, CACheck detects smelly cell arrays with higher precision and recall rate.
    `,
    "paperUrl": "https://doi.org/10.1109/TSE.2016.2584059",
    
    
    "bibtex": `
@article{Dou_TSE17,
	author    = {Wensheng Dou, Chang Xu, Shing-Chi Cheung and Jun Wei},
	title     = {CACheck: Detecting and Repairing Cell Arrays in Spreadsheets},
	journal = {IEEE Transactions on Software Engineering (TSE)},
	year      = {2017}
}
    `
  }
]