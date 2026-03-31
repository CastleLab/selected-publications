module.exports = [
  {
    "title": "CSNIPPEX: Automated Synthesis of Compilable Code Snippets from Q&A Sites",
    "date": "2016",
    "authors": [
      "Valerio Terragni", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "Proceedings of the 25th International Symposium on Software Testing and Analysis (ISSTA 2016), Saarbrücken, Germany, July 2016",
    "venueShort": "ISSTA",
    "tags": [],
    "abstract": `
    Popular Q&A sites like StackOverflow have collected numerous code snippets. However, many of them do not have complete type information, making them uncompilable and inapplicable to various software engineering tasks. This paper analyzes this problem, and proposes a technique CSNIPPEX to automatically convert code snippets into compilable Java source code files by resolving external dependencies, generating import declarations, and fixing syntactic errors. We implemented CSNIPPEX as a plug-in for Eclipse and evaluated it with 242,175 StackOverflow posts that contain code snippets. CSNIPPEX successfully synthesized compilable Java files for 40,410 of them. It was also able to effectively recover import declarations for each post with a precision of 91.04% in a couple of seconds.
    `,
    "paperUrl": "http://www.cse.ust.hk/~vterragni/files/Terragni_ISSTA2016.pdf",
    
    
    "bibtex": `
@inproceedings{Terragni_ISSTA16,
  author    = {Valerio Terragni and Yepang Liu and
               Shing{-}Chi Cheung},
  title     = {CSNIPPEX: Automated Synthesis of Compilable Code Snippets from Q\&A Sites},
  booktitle = {Proceedings of the 2016 International Symposium on Software Testing
               and Analysis, {ISSTA} 2016},
  pages     = {118--129},
  year      = {2016},
  url       = {http://dx.doi.org/10.1145/2931037.2931058}
}
    `
  }
]