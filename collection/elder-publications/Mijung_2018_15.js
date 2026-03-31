module.exports = [
  {
    "title": "Which Generated Test Failures Are Fault Revealing? Prioritizing Failures Based on Inferred Precondition Violations using PAF",
    "date": "2018",
    "authors": [
      "Mijung Kim", "Shing-Chi Cheung", "Sunghun Kim"
    ],
    "venue": "The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering, Technical Research Paper, Lake Buena Vista, Florida, 4 Nov - 9 Nov 2018",
    "venueShort": "ESEC/FSE",
    "tags": [],
    "abstract": `
    Automated unit testing tools, such as Randoop, have been developed to produce failing tests as means of finding faults. However, these tools often produce false alarms, so are not widely used in practice. The main reason for a false alarm is that the generated failing test violates an implicit precondition of the method under test, such as a field should not be null at the entry of the method. This condition is not explicitly programmed or documented but implicitly assumed
				by developers. To address this limitation, we propose a technique called Paf to cluster generated test failures due to the same cause and reorder them based on their likelihood of violating an implicit precondition of the method under test. From various test executions, Paf observes their dataflows to the variables whose values are used when the program fails. Based on the dataflow similarity and where these values are originated, Paf clusters failures and determines
				their likelihood of being fault revealing. We integrated Paf into Randoop. Our empirical results on open-source projects show that Paf effectively clusters fault revealing tests arising from the same
				fault and successfully prioritizes the fault-revealing ones.
    `,
    "paperUrl": "materials/fse18-mijung.pdf",
    
    
    "bibtex": `
@inproceedings{kim2018paf,
 title={Which Generated Test Failures Are Fault Revealing? Prioritizing
Failures Based on Inferred Precondition Violations using PAF},
 author={Kim, Mijung and Cheung, Shing-Chi and Kim, Sunghun},
 booktitle={Proceedings of the 2018 26th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2018)},
 pages={1--12},
 year={2018},
 organization={ACM}
}
    `
  }
]