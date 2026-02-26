module.exports = [
    {
        title: "Title of your paper",
        date: "date of publication, e.g., 2021-12-31 or 2021, following ECMA date string format: https://262.ecma-international.org/11.0/#sec-date-time-string-format",
        authors: [
            "First Author", "Second Author"
        ],
        venue: "Full name of the conference or journal name",
        venueShort: "abbreviation of conference or journal, e.g., ESEC/FSE",
        tags: [
            "Tags are those keywords used to categorize the publication by:",
            "Research topic",
            "Methodology",
            "Please consider reuse the existing tags in the publication website: http://sccpu2.cse.ust.hk/castle/publication/",
            "Users can use tags to filter and find the publications they are interested in"
        ],
        awards: [
            "Any awards received by this paper:",
            "Distinguished Paper"
        ],
        abstract: `
            (optional) abstract of your paper (support multiline)
        `,
        projectUrl: "(optional) project url",
        arxivUrl: "(optional) the arxiv version of your paper",
        paperUrl: "(optional) author version of your paper. You can put the pdf file in assets folder and refer to it here with {ASSETS}/your-paper.pdf",
        slidesUrl: "(optional) slides url. You can put the file in assets folder and refer to it here with {ASSETS}/your-slides.pdf",
        bibtex: ` (optional)
            @article{paper
                ......
            }
        `
    }
]