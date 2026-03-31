module.exports = [
    {
        "title": "To What Extent Do DNN-based Image Classification Models Make Unreliable Inferences?",
        "date": "2021",
        "authors": [
            "Yongqiang Tian", "Shiqing Ma", "Ming Wen", "Yepang Liu", "Shing-Chi Cheung", "Xiangyu Zhang"
        ],
        "venue": "Empirical Software Engineering",
        "venueShort": "EMSE",
        "tags": [
            "Testing", "DNN model", "Metamorphic Testing"
        ],
        "abstract": "Deep Neural Network (DNN) models are widely used for image classification. While they offer high performance in terms of accuracy, researchers are concerned about if these models inappropriately make inferences using features irrelevant to the target object in a given image. To address this concern, we propose a metamorphic testing approach that assesses if a given inference is made based on irrelevant features. Specifically, we propose two metamorphic relations (MRs) to detect such unreliable inferences. These relations expect (a) the classification results with different labels or the same labels but less certainty from models after corrupting the relevant features of images, and (b) expect the classification results with the same labels after corrupting irrelevant features. The inferences that violate the metamorphic relations are regarded as unreliable inferences.\nOur evaluation demonstrated that our approach can effectively identify unreliable inferences for single-label classification models with an average precision of 64.1% and 96.4% for the two MRs, respectively. As for multi-label classification models, the corresponding precision for MR-1 and MR-2 is 78.2% and 86.5%, respectively. Further, we conducted an empirical study to understand the problem of unreliable inferences in practice. Specifically, we applied our approach to 18 pre-trained single-label image classification models and 3 multi-label classification models, and then examined their inferences on the ImageNet and COCO datasets. We found that unreliable inferences are pervasive. Specifically, for each model, more than thousands of correct classifications are actually made using irrelevant features. Next, we investigated the effect of such pervasive unreliable inferences, and found that they can cause significant degradation of a model's overall accuracy. After including these unreliable inferences from the test set, the model's accuracy can be significantly changed. Therefore, we recommend that developers should pay more attention to these unreliable inferences during the model evaluations. We also explored the correlation between model accuracy and the size of unreliable inferences. We found the inferences of the input with smaller objects are easier to be unreliable. Lastly, we found that the current model training methodologies can guide the models to learn object-relevant features to certain extent, but may not necessarily prevent the model from making unreliable inferences. We encourage the community to propose more effective training methodologies to address this issue.\n",
        "projectUrl": "https://github.com/yqtianust/PaperUnreliableInference",
        "paperUrl": "https://doi.org/10.1007/s10664-021-09985-1",
        "bibtex": `@Article{Tian2021,
        author={Tian, Yongqiang
        and Ma, Shiqing
        and Wen, Ming
        and Liu, Yepang
        and Cheung, Shing-Chi
        and Zhang, Xiangyu},
        title={To what extent do DNN-based image classification models make unreliable inferences?},
        journal={Empirical Software Engineering},
        year={2021},
        month={Jun},
        day={18},
        volume={26},
        number={5},
        pages={84},
        abstract={Deep Neural Network (DNN) models are widely used for image classification. While they offer high performance in terms of accuracy, researchers are concerned about if these models inappropriately make inferences using features irrelevant to the target object in a given image. To address this concern, we propose a metamorphic testing approach that assesses if a given inference is made based on irrelevant features. Specifically, we propose two metamorphic relations (MRs) to detect such unreliable inferences. These relations expect (a) the classification results with different labels or the same labels but less certainty from models after corrupting the relevant features of images, and (b) the classification results with the same labels after corrupting irrelevant features. The inferences that violate the metamorphic relations are regarded as unreliable inferences. Our evaluation demonstrated that our approach can effectively identify unreliable inferences for single-label classification models with an average precision of 64.1{\\%} and 96.4{\\%} for the two MRs, respectively. As for multi-label classification models, the corresponding precision for MR-1 and MR-2 is 78.2{\\%} and 86.5{\\%}, respectively. Further, we conducted an empirical study to understand the problem of unreliable inferences in practice. Specifically, we applied our approach to 18 pre-trained single-label image classification models and 3 multi-label classification models, and then examined their inferences on the ImageNet and COCO datasets. We found that unreliable inferences are pervasive. Specifically, for each model, more than thousands of correct classifications are actually made using irrelevant features. Next, we investigated the effect of such pervasive unreliable inferences, and found that they can cause significant degradation of a model's overall accuracy. After including these unreliable inferences from the test set, the model's accuracy can be significantly changed. Therefore, we recommend that developers should pay more attention to these unreliable inferences during the model evaluations. We also explored the correlation between model accuracy and the size of unreliable inferences. We found the inferences of the input with smaller objects are easier to be unreliable. Lastly, we found that the current model training methodologies can guide the models to learn object-relevant features to certain extent, but may not necessarily prevent the model from making unreliable inferences. We encourage the community to propose more effective training methodologies to address this issue.},
        issn={1573-7616},
        doi={10.1007/s10664-021-09985-1},
        url={https://doi.org/10.1007/s10664-021-09985-1}
        }
        `
    },
    {
        "title": "EvalDNN: a toolbox for evaluating deep neural network models",
        "date": "2020",
        "authors": [
            "Yongqiang Tian", "Zhihua Zeng", "Ming Wen", "Yepang Liu", "Tzu-yang Kuo", "Shing-Chi Cheung"
        ],
        "venue": "42nd International Conference on Software Engineering, Demo",
        "venueShort": "ICSE Demo",
        "tags": [
            "Testing", "DNN model", "Benchmark"
        ],
        "projectUrl": "https://github.com/yqtianust/EvalDNN",
        "paperUrl": "https://doi.org/10.1145/3377812.3382133"
    },
    {
        "title": "A Comprehensive Study of Deep Learning Compiler Bugs",
        "date": "2021",
        "authors": [
            "Qingchao Shen", "Haoyang Ma", "Junjie Chen", "Yongqiang Tian", "Shing-Chi Cheung", "Xiang Chen"
        ],
        "venue": "Proceedings of the 29th ACM Joint European SoftwareEngineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE ’21)",
        "venueShort": "ESEC/FSE",
        "tags": [
            "DL Compiler", "Empirical Study"
        ],
        "projectUrl": "https://github.com/ShenQingchao/DLCstudy"
    },
    {
        "title": "AdvDoor: Adversarial Backdoor Attack of Deep Learning System",
        "date": "2021",
        "authors": [
            "Quan Zhang", "Yifeng Ding", "Yongqiang Tian", "Jianmin Guo", "Min Yuan", "Yu Jiang"
        ],
        "venue": "ACM SIGSOFT International Symposium on Software Testing and Analysis",
        "venueShort": "ISSTA",
        "tags": [
            "DNN model", "Backdoor Attack"
        ],
        "projectUrl": "https://github.com/AdvDoor/AdvDoor"
    },
    {
        "title": "Finding Deviated Behaviors of the Compressed DNN Models for Image Classifications.",
        "date": "2023",
        "authors": [
            "Yongqiang Tian", "Wuqi Zhang", "Ming Wen", "Shing-Chi Cheung", "Chengnian Sun", "Shiqing Ma", "Yu Jiang"
        ],
        "venue": "ACM Transactions on Software Engineering and Methodology",
        "venueShort": "TOSEM",
        "tags": [
            "DNN model"
        ],
        "projectUrl": "https://dl.acm.org/doi/abs/10.1145/3583564"
    },
    {
        "title": "Revisiting the Evaluation of Deep Learning-Based Compiler Testing.",
        "date": "2023",
        "authors": [
            "Yongqiang Tian", "Zhenyang Xu","Yiwen Dong", "Chengnian Sun", "Shing-Chi Cheung"
        ],
        "venue": "The 32nd International Joint Conference on Artificial Intelligence",
        "venueShort": "IJCAI",
        "tags": [
            "Compiler testing"
        ],
        "projectUrl": ""
    },
    ,
    {
        "title": "On the Caching Schemes to Speed Up Program Reduction.",
        "date": "2023",
        "authors": [
            "Yongqiang Tian", "Xueyan Zhang", "Yiwen Dong", "Zhenyang Xu", "Mengxiao Zhang", "Yu Jiang", "Shing-Chi Cheung", "Chengnian Sun"
        ],
        "venue": "ACM Transactions on Software Engineering and Methodology",
        "venueShort": "TOSEM",
        "tags": [
            "Program Reduction"
        ],
        "projectUrl": "https://github.com/uw-pluverse/perses/blob/master/doc/RCC.md"
    }
]