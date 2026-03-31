module.exports = [
  {
    "title": "RECONTEST: Effective Regression Testing of Concurrent Programs",
    "date": "2015",
    "authors": [
      "Valerio Terragni", "Shing-Chi Cheung", "Charles Zhang"
    ],
    "venue": "37th International Conference on Software Engineering (ICSE 2015), Florence, Italy, May 16-24, 2015",
    "venueShort": "ICSE",
    "tags": [],
    "abstract": `
    Concurrent programs proliferate as multi-core technologies advance. As a result, the conventional approach that selects a sub-set of test cases for regression testing without considering interleavings is insufficient. In this paper we present RECONTEST to address the problem by selecting the new interleavings that arise due to code changes. These interleavings must be explored in order to uncover regression bugs. RECONTEST efficiently selects new interleavings by first identifying shared memory accesses that are affected by the changes, and then exploring only those problematic interleavings that contain at least one of these accesses. We have implemented RECONTEST as an automated tool and evaluated it using 13 real-world concurrent program subjects. Our results show that RECONTEST can significantly reduce the regression testing cost without missing any faulty interleavings induced by code changes.
    `,
    "paperUrl": "http://home.cse.ust.hk/~vterragni/files/Terragni_ICSE2015.pdf",
    
    
    "bibtex": `
@inproceedings{TERRAGNI_ICSE15,
  author    = {Valerio Terragni and
               Shing{-}Chi Cheung and
               Charles Zhang},
  title     = {{RECONTEST:} Effective Regression Testing of Concurrent Programs},
  booktitle = {37th {IEEE/ACM} International Conference on Software Engineering,
               {ICSE} 2015, Florence, Italy, May 16-24, 2015, Volume 1},
  pages     = {246--256},
  year      = {2015},
  url       = {http://dx.doi.org/10.1109/ICSE.2015.45},
}
    `
  }
]