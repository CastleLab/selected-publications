module.exports = [
  {
    "title": "Detecting Table Clones and Smells in                  Spreadsheets",
    "date": "2016",
    "authors": [
      "Wensheng Dou", "Shing-Chi Cheung", "Chushu Gao", "Chang Xu", "Liang Xu", "Jun Wei"
    ],
    "venue": "24th ACM SIGSOFT International Symposium on the Foundations of Software Engineering (FSE 2016), Seattle, WA, USA, Nov 2016",
    "venueShort": "FSE ",
    "tags": [],
    "abstract": `
    Spreadsheets  are  widely  used  by  end  users  for  various  business tasks, such as data analysis and financial reporting. End users may perform similar tasks by cloning a block of cells (table) in their spreadsheets.  The  corresponding  cells  in  these  cloned  tables  are supposed  to  keep  the  same  or  similar  computational  semantics. However,  when  spreadsheets  evolve,  thus  cloned  tables  can  become  inconsistent  due  to  ad-hoc  modifications,  and  as  a  result suffer from smells. In this paper, we propose TableCheck to detect table clones and related smells due to inconsistency among them. We observe that two tables with the same header information at their corresponding cells are likely to be table clones. Inspired by existing finger-print-based code clone detection techniques, we developed a detection  algorithm  to  detect  this kind  of  table  clones.  We further detected outliers among corresponding cells as smells in the detected  table  clones.  We  implemented  our  idea  into  TableCheck, and applied it to real-world spreadsheets from the EUSES corpus. Experimental  results  show  that  table  clones  commonly  exist (21.8%), and 25.6% of the spreadsheets with table clones suffer from smells due to inconsistency among these clones. TableCheck detected table clones and their smells with a precision of 92.2% and  85.5%,  respectively,  while  existing  techniques  detected  no more than 35.6% true smells that TableCheck could detect.
    `,
    "paperUrl": "http://sccpu2.cse.ust.hk/castle/materials/fse16main-mainid258-p-e95dd6b-29549-preprint.pdf",
    
    "slidesUrl": "http://sccpu2.cse.ust.hk/castle/materials/TableCheck_2016_11-17-1.pdf",
    "bibtex": `
@inproceedings{Dou_FSE16,
	author    = {Wensheng Dou and Shing{-}Chi Cheung and Chushu Gao and Chang Xu and Liang Xu and Jun Wei},
	title     = {Detecting Table Clones and Smells in Spreadsheets},
	booktitle = {Proceedings of the 2016 International Symposium on the Foundations of Software Engineering, {FSE} 2016},
	year      = {2016}
}
    `
  }
]