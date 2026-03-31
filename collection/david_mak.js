module.exports = [
    {
        title: "Automatic build repair for test cases using incompatible Java versions",
        date: "2024",
        authors: [
            "Ching Hang Mak", "Shing-Chi Cheung"
        ],
        venue: "Information and Software Technology",
        venueShort: "INFSOF",
        tags: [
            "Java",
            "Program Analysis",
            "Program Repair",
            "Third-Party Libraries",
        ],
        abstract: `
        Context:
        Bug bisection is a common technique used to identify a revision that introduces a bug or indirectly fixes a bug, and often involves executing multiple revisions of a project to determine whether the bug is present within the revision. However, many legacy revisions often cannot be successfully compiled due to changes in the programming language or tools used in the compilation process, adding complexity and preventing automation in the bisection process.
        
        Objective:
        In this paper, we introduce an approach to repair test cases of Java projects by performing dependency minimization. Our approach aims to remove classes and methods that are not required for the execution of one or more test cases. Unlike existing state-of-the-art techniques, our approach performs minimization at source-level, which allows compile-time errors to be fixed.
        
        Method:
        A standalone Java tool implementing our technique was developed, and we evaluated our technique using subjects from Defects4J retargeted against Java 8 and 17.
        
        Results:
        Our evaluation showed that a majority of subjects can be repaired solely by performing minimization, including replicating the test results of the original version. Furthermore, our technique is also shown to achieve accurate minimized results, while only adding a small overhead to the bisection process.
        
        Conclusion:
        Our proposed technique is shown to be effective for repairing build failures with minimal overhead, making it suitable for use in automated bug bisection. Our tool can also be adapted for use cases such as bug corpus creation and refactoring. 
        `,
        projectUrl: "https://github.com/Derppening/test-dependency-minimization/",
        arxivUrl: "https://arxiv.org/abs/2404.17818",
        bibtex: `@article{mak2024automatic,
        title={Automatic build repair for test cases using incompatible java versions},
        author={Mak, Ching Hang and Cheung, Shing-Chi},
        journal={Information and Software Technology},
        pages={107473},
        year={2024},
        publisher={Elsevier}
        }
        `
    }
]