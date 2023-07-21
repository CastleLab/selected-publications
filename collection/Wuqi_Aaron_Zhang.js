module.exports = [
  {
    "title": "ÐArcher: Detecting On-Chain-Off-Chain Synchronization Bugs in Decentralized Applications",
    "date": "2021-08-23",
    "authors": [
      "Wuqi Zhang", "Lili Wei", "Shuqing Li", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "Proceedings of the 29th ACM Joint European SoftwareEngineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE ’21)",
    "venueShort": "ESEC/FSE",
    "tags": [
      "Decentralized Applications", "Testing", "Blockchain"
    ],
    "abstract": `
    Since the emergence of Ethereum, blockchain-based decentralized applications (DApps) have become increasingly popular and important. To balance the security, performance, and costs, a DApp typically consists of two layers: an on-chain layer to execute transactions and store crucial data on blockchain, and an off-chain layer to interact with users. A DApp needs to proactively synchronize its off-chain layer with the on-chain layer, otherwise, the inconsistent data in the off-chain layer could mislead users and cause undesirable consequences, e.g., loss of transaction fees. However, transactions sent to blockchain are not guaranteed to be executed and could even be reversed after execution due to chain reorganization. Such non-determinism in the transaction execution is unique to blockchain and DApp developers may fail to perform the on-chain-off-chain synchronization accurately due to their unfamiliarity of the complex transaction lifecycle.
    In this work, we investigate the challenges of synchronizing on-chain and off-chain data in Ethereum-based DApps. We present two types of bugs that could result in inconsistencies between the on-chain and off-chain layers. To help detect such on-chain-off-chain synchronization bugs, we introduce a state transition model to guide the testing of DApps, and propose two effective oracles to facilitate the automatic identification of bugs. We build the first testing framework, ÐArcher, to detect on-chain-off-chain synchronization bugs in DApps. We have evaluated ÐArcher on 11 popular real-world DApps. ÐArcher achieves high precision (99.3%), recall (87.6%), and accuracy (89.4%) in bug detection and significantly outperforms the baseline methods. It has found 15 real bugs in the 11 DApps. So far, six of the 15 bugs have been confirmed by the developers and three have been fixed. These promising results demonstrate the usefulness of ÐArcher.
    `,
    "projectUrl": "https://github.com/Troublor/darcher",
    'arxivUrl': 'https://arxiv.org/pdf/2106.09440.pdf',
    'paperUrl': '{ASSETS}/DArcher-FSE21.pdf',
    "bibtex": `
    @inproceedings{10.1145/3468264.3468546,
      author = {Zhang, Wuqi and Wei, Lili and Li, Shuqing and Liu, Yepang and Cheung, Shing-Chi},
      title = {\DH{}Archer: Detecting on-Chain-off-Chain Synchronization Bugs in Decentralized Applications},
      year = {2021},
      isbn = {9781450385626},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3468264.3468546},
      doi = {10.1145/3468264.3468546},
      abstract = {Since the emergence of Ethereum, blockchain-based decentralized applications (DApps)
      have become increasingly popular and important. To balance the security, performance,
      and costs, a DApp typically consists of two layers: an on-chain layer to execute transactions
      and store crucial data on the blockchain and an off-chain layer to interact with users.
      A DApp needs to synchronize its off-chain layer with the on-chain layer proactively.
      Otherwise, the inconsistent data in the off-chain layer could mislead users and cause
      undesirable consequences, e.g., loss of transaction fees. However, transactions sent
      to the blockchain are not guaranteed to be executed and could even be reversed after
      execution due to chain reorganization. Such non-determinism in the transaction execution
      is unique to blockchain. DApp developers may fail to perform the on-chain-off-chain
      synchronization accurately due to their lack of familiarity with the complex transaction
      lifecycle. In this work, we investigate the challenges of synchronizing on-chain and
      off-chain data in Ethereum-based DApps. We present two types of bugs that could result
      in inconsistencies between the on-chain and off-chain layers. To help detect such
      on-chain-off-chain synchronization bugs, we introduce a state transition model to
      guide the testing of DApps and propose two effective oracles to facilitate the automatic
      identification of bugs. We build the first testing framework, \DH{}Archer, to detect on-chain-off-chain
      synchronization bugs in DApps. We have evaluated \DH{}Archer on 11 popular real-world
      DApps. \DH{}Archer achieves high precision (99.3%), recall (87.6%), and accuracy (89.4%)
      in bug detection and significantly outperforms the baseline methods. It has found
      15 real bugs in the 11 DApps. So far, six of the 15 bugs have been confirmed by the
      developers, and three have been fixed. These promising results demonstrate the usefulness
      of \DH{}Archer.},
      booktitle = {Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering},
      pages = {553–565},
      numpages = {13},
      keywords = {Software testing, DApps, Decentralized applications, Blockchain},
      location = {Athens, Greece},
      series = {ESEC/FSE 2021}
    }
    `
  },
  {
    "title": "Combatting Front-Running in Smart Contracts: Attack Mining, Benchmark Construction and Vulnerability Detector Evaluation",
    "date": "2023",
    "authors": [
      "Wuqi Zhang", "Lili Wei", "Shing-Chi Cheung", "Yepang Liu", "Shuqing Li", "Lu Liu", "Michael R. Lyu"
    ],
    "venue": "Transactions on Software Engineering",
    "venueShort": "TSE",
    "tags": [
      "Smart Contracts"
    ],
    "projectUrl": "https://github.com/Troublor/erebus-redgiant"
  }
]
