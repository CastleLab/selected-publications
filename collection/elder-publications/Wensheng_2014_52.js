module.exports = [
  {
    "title": "Is Spreadsheet Ambiguity Harmful? Detecting and Repairing Spreadsheet Smells due to Ambiguous Computation",
    "date": "2014",
    "authors": [
      "Wensheng Dou", "Shing-Chi Cheung", "Jun Wei"
    ],
    "venue": "36th International Conference on Software Engineering (ICSE 2014), Hyderabad, India, May-Jun 2014",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    Spreadsheets are widely used by end users for numerical computation in their business. Spreadsheet cells whose computation is subject to the same semantics are often clustered in a row or column. When a spreadsheet evolves, these cell clusters can degenerate due to ad hoc modifications or undisciplined copy-and-pastes. Such degenerated clusters no longer keep cells prescribing the same computational semantics, and are said to exhibit ambiguous computation smells. Our empirical study finds that such smells are common and likely harmful. We propose AmCheck, a novel technique that automatically detects and repairs ambiguous computation smells by recovering their intended computational semantics. A case study using AmCheck suggests that it is useful for discovering and repairing real spreadsheet problems.
    `,
    "paperUrl": "http://dl.acm.org/citation.cfm?doid=2568225.2568316",
    
    
    "bibtex": `
@inproceedings{DBLP:conf/icse/DouCW14,
  author    = {Wensheng Dou and
               Shing{-}Chi Cheung and
               Jun Wei},
  title     = {Is spreadsheet ambiguity harmful? detecting and repairing spreadsheet
               smells due to ambiguous computation},
  booktitle = {36th International Conference on Software Engineering, {ICSE} '14,
               Hyderabad, India - May 31 - June 07, 2014},
  pages     = {848--858},
  year      = {2014},
  crossref  = {DBLP:conf/icse/2014},
  url       = {http://doi.acm.org/10.1145/2568225.2568316},
  doi       = {10.1145/2568225.2568316},
  timestamp = {Mon, 14 Sep 2015 15:13:50 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/icse/DouCW14},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
    `
  }
]