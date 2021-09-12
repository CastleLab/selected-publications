module.exports = [
    {
        title: "Characterizing Transaction-Reverting Statements inEthereum Smart Contracts",
        date: "2021-11-15",
        authors: [
            "Lu Liu", "Lili Wei", "Wuqi Zhang", "Ming Wen", "Yepang Liu", "Shing-Chi Cheung"
        ],
        venue: "The 36th IEEE/ACM International Conference on Automated Software Engineering",
        venueShort: "ASE",
        tags: [
            "Blockchain",
            "Smart Contracts",
            "Empirical Study",
        ],
        awards: [
        ],
        abstract: `
Smart contracts are programs stored on blockchains to execute transactions. 
When input constraints or security properties are violated at runtime, the transaction being executed by a smart contract needs to be reverted to avoid undesirable consequences.
On Ethereum, the most popular blockchain that supports smart contracts, developers can choose among three transaction-reverting statements (i.e., require, if...revert, and if...throw) to handle anomalous transactions.
While these transaction-reverting statements are vital for preventing smart contracts from exhibiting abnormal behaviors or suffering malicious attacks, there is limited understanding of how they are used in practice. 
In this work, we perform the first empirical study to characterize transaction-reverting statements in Ethereum smart contracts. 
We measured the prevalence of these statements in 3,866 verified smart contracts from popular dapps and built a taxonomy of their purposes via manually analyzing 557 transaction-reverting statements.
We also compared template contracts and their corresponding custom contracts to understand how developers customize the use of transaction-reverting statements.
Finally, we analyzed the security impact of transaction-reverting statements by removing them from smart contracts and comparing the mutated contracts against the original ones. 
Our study led to important findings.
For example, we found that transaction-reverting statements are commonly used to perform seven types of authority verifications or validity checks, and missing such statements may compromise the security of smart contracts.
We also found that current smart contract security analyzers cannot effectively handle transaction-reverting statements when detecting security vulnerabilities.
Our findings can shed light on further research in the broad area of smart contract quality assurance and provide practical guidance to smart contract developers on the appropriate use of transaction-reverting statements. 
        `,
        projectUrl: "https://github.com/transaction-reverting-statements/Characterizing-require-statement-in-Ethereum-Smart-Contract",
        arxivUrl: "https://arxiv.org/abs/2108.10799",
        paperUrl: "{ASSETS}/Characterizing_Transaction_Reverting_Statements-ASE21.pdf",
        slidesUrl: "",
        bibtex: ` 
        `
    }
]