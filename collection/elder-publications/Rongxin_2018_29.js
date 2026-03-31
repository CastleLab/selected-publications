module.exports = [
  {
    "title": "ChangeLocator: Locate Crash-Inducing Changes Based on Crash Reports",
    "date": "2018",
    "authors": [
      "Rongxin Wu", "Ming Wen", "Shing-Chi Cheung", "Hongyu Zhang"
    ],
    "venue": "Journal of Empirical Software Engineering (EmSE 2018)",
    "venueShort": "EmSE",
    "tags": [],
    "abstract": `
    Software crashes are severe manifestations of software bugs. Debugging crashing bugs is tedious and time-consuming. Understanding software changes that induce a crashing bug can provide useful contextual information for bug fixing and is highly demanded by developers. Locating the bug inducing changes is also useful for automatic program repair, since it narrows down the root causes and reduces the search space of bug fix location. However, currently there are no systematic studies on locating the software changes to a source code repository that induce a crashing bug reflected by a bucket of crash reports. To tackle this problem, we first conducted an empirical study on characterizing the bug inducing changes for crashing bugs (denoted as crash-inducing changes). We also propose ChangeLocator, a method to automatically locate crash-inducing changes for a given bucket of crash reports. We base our approach on a learning model that uses features originated from our empirical study and train the model using the data from the historical fixed crashes. We evaluated ChangeLocator with six release versions of Netbeans project. The results show that it can locate the crash-inducing changes for 44.7%, 68.5%, and 74.5% of the bugs by examining only top 1, 5 and 10 changes in the recommended list, respectively. It significantly outperforms the existing state-of-the-art approach.
    `,
    "paperUrl": "materials/ChangeLocator.pdf",
    
    
    "bibtex": `
@article{wu2018changelocator,
  title={ChangeLocator: locate crash-inducing changes based on crash reports},
  author={Wu, Rongxin and Wen, Ming and Cheung, Shing-Chi and Zhang, Hongyu},
  journal={Empirical Software Engineering},
  volume={23},
  number={5},
  pages={2866--2900},
  year={2018},
  publisher={Springer}
}
    `
  }
]