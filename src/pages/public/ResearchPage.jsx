import { useLang } from '../../contexts/LangContext'
import { useState } from 'react'
import iconGenomics from '../../assets/icons/icon-genomics.png'

const publications = [
  {
    id: 'kim2025mc',
    authors: 'Kim SW, An JY*',
    title: 'Advancing precision diagnosis in autism: Insights from large-scale genomic studies',
    journal: 'Molecules and Cells',
    year: 2025,
    doi: '',
    category: 'genomics',
    summary_en: 'This review discusses how large-scale genomic studies are advancing precision diagnosis of autism. By integrating findings from whole-genome sequencing of Korean families, the authors outline how genomic data can improve diagnostic accuracy and guide personalized approaches for autistic individuals.',
    summary_ko: '대규모 유전체 연구가 자폐의 정밀 진단을 어떻게 발전시키고 있는지 정리한 종설입니다. 한국인 가족 대상 전장유전체 시퀀싱 연구 결과를 통합하여, 유전체 데이터가 진단 정확성을 높이고 자폐인에 대한 맞춤형 접근을 안내하는 방법을 제시합니다.',
  },
  {
    id: 'jeong2025mc',
    authors: 'Jeong J, Yoo HJ, An JY, Jeong S',
    title: 'Dysregulated RNA-binding proteins and alternative splicing: Emerging roles in autism spectrum disorder',
    journal: 'Molecules and Cells',
    year: 2025,
    doi: '',
    category: 'mechanism',
    summary_en: 'RNA-binding proteins control how genetic instructions are read and processed in cells. This study reveals that disruptions in these proteins and in "alternative splicing" — the process that creates different protein versions from the same gene — are increasingly recognized as contributing to autism, pointing to a new layer of biological complexity in understanding the condition.',
    summary_ko: 'RNA 결합 단백질은 세포에서 유전 정보가 읽히고 처리되는 방식을 조절합니다. 이러한 단백질과 \'대안적 스플라이싱\' — 같은 유전자에서 다른 단백질 버전을 만드는 과정 — 의 이상이 자폐에 기여하는 것으로 점차 인식되고 있음을 보여주며, 자폐 이해에 새로운 생물학적 복잡성을 제시합니다.',
  },
  {
    id: 'kang2025jci',
    authors: 'Kang M, Choi J, Han J, Araki T, Kim SW, Ryu HH, Kim MG, Kim S, Jang H, Kim SY, Hwang KD, Kim S, Yoo M, Lee J, Kim K, Park P, Choi JE, Han DH, Kim Y, Kim J, Chang S, Kaang BK, Ko JM, Cheon KA, An JY, Kim SJ, Park H, Neel BG, Kim CH, Lee YS',
    title: 'Aberrant ERK signaling in astrocytes impairs learning and memory in RASopathy-associated BRAF mutant mouse models',
    journal: 'The Journal of Clinical Investigation',
    year: 2025,
    doi: '10.1172/JCI175625',
    category: 'mechanism',
    summary_en: 'RASopathies are genetic conditions that affect a key cell signaling pathway. This study found that abnormal ERK signaling specifically in astrocytes — support cells in the brain — impairs learning and memory in mouse models carrying BRAF mutations. This reveals that not just neurons but also their supporting cells play critical roles in cognitive difficulties linked to neurodevelopmental conditions.',
    summary_ko: 'RAS병증은 주요 세포 신호전달 경로에 영향을 미치는 유전 질환입니다. BRAF 변이를 가진 마우스 모델에서 뇌의 지지세포인 성상세포의 ERK 신호 이상이 학습과 기억을 저해한다는 것을 발견했습니다. 이는 신경세포뿐 아니라 지지세포도 신경발달 질환의 인지 기능 장애에 중요한 역할을 함을 보여줍니다.',
  },
  {
    id: 'kim2025gm',
    authors: 'Kim SW, Lee H, Song DY, Lee GH, ... Yoo HJ*, An JY*',
    title: 'Evaluation of familial phenotype deviation to measure the impact of de novo mutations in autism',
    journal: 'Genome Medicine',
    year: 2025,
    doi: '10.1186/s13073-025-01532-7',
    category: 'genomics',
    summary_en: 'This study developed a new method called "within-family standardized deviation" (WFSD) that measures how much an autistic individual\'s traits differ from their own family members, rather than comparing to population averages. By accounting for each family\'s unique background, this approach identified 201 autism-associated genes — including 38 that had been overlooked by conventional methods. This means we can better understand each person\'s unique genetic profile by looking at them in the context of their own family.',
    summary_ko: '이 연구는 자폐인의 특성을 일반 인구 평균이 아닌, 자신의 가족 구성원과 비교하여 측정하는 "가족 내 표준편차(WFSD)"라는 새로운 방법을 개발했습니다. 각 가족의 고유한 배경을 반영함으로써 기존 방법으로는 발견하지 못했던 38개의 새로운 유전자를 포함해 총 201개의 자폐 연관 유전자를 발굴했습니다. 이를 통해 가족 맥락에서 각 개인의 고유한 유전적 특성을 더 잘 이해할 수 있게 되었습니다.',
  },
  {
    id: 'kim2024gm',
    authors: 'Kim SW, Lee H, Song DY, Lee GH, ... Yoo HJ*, An JY*',
    title: 'Whole genome sequencing analysis identifies sex differences of familial pattern contributing to phenotypic diversity in autism',
    journal: 'Genome Medicine',
    year: 2024,
    doi: '10.1186/s13073-024-01385-6',
    category: 'genomics',
    summary_en: 'By analyzing whole-genome sequencing data from 696 Korean autistic individuals and their families, this study found that genetic factors contribute differently depending on sex. De novo (newly arising) variants were 4.3 times more common in autistic individuals compared to their non-autistic siblings, and common genetic risk (polygenic scores) showed distinct patterns between mothers and fathers. These findings highlight the importance of considering family context and sex when understanding autism genetics.',
    summary_ko: '696명의 한국인 자폐인과 가족의 전장유전체 시퀀싱 데이터를 분석한 결과, 유전적 요인이 성별에 따라 다르게 작용한다는 것을 발견했습니다. 신생변이(새로 발생한 변이)는 자폐인에서 비자폐 형제 대비 4.3배 높았으며, 공통 유전적 위험도(다유전자 점수)는 어머니와 아버지에서 서로 다른 패턴을 보였습니다. 이는 자폐의 유전적 이해에 있어 가족 맥락과 성별 고려의 중요성을 보여줍니다.',
  },
  {
    id: 'kim2024emm',
    authors: 'Kim S, Lee J, Koh IG, Ji J, Kim HJ, Kim E, Park J, Park JE, An JY*',
    title: 'An integrative single-cell atlas for exploring the cellular and temporal specificity of genes related to neurological disorders during human brain development',
    journal: 'Experimental & Molecular Medicine',
    year: 2024,
    doi: '10.1038/s12276-024-01328-6',
    category: 'genomics',
    summary_en: 'This study created a detailed "atlas" of gene activity in individual brain cells during human development, mapping when and where neurological disorder-related genes are active. This resource helps researchers pinpoint exactly which cell types and developmental time windows are most relevant to autism and other brain conditions.',
    summary_ko: '인간 뇌 발달 과정에서 개별 세포 수준의 유전자 활동을 상세히 기록한 \'아틀라스\'를 구축했습니다. 신경 질환 관련 유전자가 언제, 어디서 활성화되는지 매핑하여, 자폐를 포함한 뇌 질환에 가장 관련 있는 세포 유형과 발달 시기를 정확히 파악할 수 있는 자원을 제공합니다.',
  },
  {
    id: 'kissel2024bpgos',
    authors: 'Kissel LT, Pochareddy S, An JY, Sestan N, Sanders SJ, Wang X, Werling DM',
    title: 'Sex-differential gene expression in developing human cortex and its intersection with autism risk pathways',
    journal: 'Biological Psychiatry Global Open Science',
    year: 2024,
    doi: '10.1016/j.bpsgos.2024.100321',
    category: 'genomics',
    summary_en: 'Boys are diagnosed with autism about four times more often than girls. This study analyzed gene expression differences between male and female developing brains and found that sex-biased genes significantly overlap with autism risk pathways, helping explain why autism manifests differently across sexes.',
    summary_ko: '자폐는 남아에서 여아보다 약 4배 더 많이 진단됩니다. 발달 중인 남성·여성 뇌의 유전자 발현 차이를 분석하여, 성별에 따라 편향된 유전자가 자폐 위험 경로와 유의미하게 겹침을 발견했습니다. 이는 자폐가 성별에 따라 다르게 나타나는 이유를 설명하는 데 도움이 됩니다.',
  },
  {
    id: 'fazel2024cr',
    authors: 'Fazel Darbandi S, An JY, Lim K, Page NF, Liang L, Young DM, Ypsilanti AR, Nord AS, Sanders SJ, Rubenstein JLR',
    title: 'Five autism-associated transcriptional regulators target shared loci proximal to brain-expressed genes',
    journal: 'Cell Reports',
    year: 2024,
    doi: '10.1016/j.celrep.2024.114049',
    category: 'mechanism',
    summary_en: 'Transcription factors are proteins that control which genes are turned on or off. This study found that five transcription factors strongly linked to autism all regulate overlapping sets of genes near brain-expressed regions. This convergence suggests that different autism-related genetic changes may ultimately disrupt the same core biological processes in the brain.',
    summary_ko: '전사인자는 어떤 유전자가 활성화되거나 비활성화되는지를 조절하는 단백질입니다. 자폐와 강하게 연관된 5개의 전사인자가 뇌에서 발현되는 유전자 근처의 겹치는 표적을 조절함을 발견했습니다. 이러한 수렴은 서로 다른 자폐 관련 유전적 변화가 궁극적으로 뇌의 동일한 핵심 생물학적 과정을 방해할 수 있음을 시사합니다.',
  },
  {
    id: 'jang2024jmir',
    authors: 'Jang SY, Kim T, Kim B, Jeong D, Noh T, Jeong M, Hall K, Kim M, Han K, Hong H, Kim JG, Kim SI, Yoo HJ*',
    title: 'Promoting Self-Efficacy of Individuals With Autism in Practicing Social Skills in the Workplace Using Virtual Reality and Physiological Sensors: Mixed Methods Study',
    journal: 'JMIR Formative Research',
    year: 2024,
    doi: '10.2196/52157',
    category: 'clinical',
    summary_en: 'This study used virtual reality (VR) and wearable body sensors to help autistic adults practice social skills needed in the workplace — like greeting coworkers and handling conversations — in a safe, repeatable virtual environment. Participants reported increased confidence after training, showing that VR-based practice can be a practical tool for building real-world social skills.',
    summary_ko: '가상현실(VR)과 생체센서를 활용해 자폐 성인이 직장에서 필요한 사회적 기술(인사하기, 대화 처리 등)을 안전하고 반복 가능한 가상 환경에서 연습할 수 있도록 했습니다. 참가자들은 훈련 후 자신감이 높아졌다고 보고하여, VR 기반 연습이 실제 사회적 기술을 쌓는 데 실용적인 도구가 될 수 있음을 보여주었습니다.',
  },
  {
    id: 'yoo2024guidelines',
    authors: 'Yoo HJ*',
    title: 'Understanding Evidence-Based Practice for Autism Spectrum Disorder: Korean Practice Clinical Guidelines',
    journal: 'Journal of the Korean Academy of Child and Adolescent Psychiatry',
    year: 2024,
    doi: '',
    category: 'clinical',
    summary_en: 'This paper established evidence-based clinical guidelines for autism in Korea, providing clinicians with standardized recommendations on how to diagnose, assess, and support autistic individuals using the best available scientific evidence.',
    summary_ko: '근거 중심 의학에 기반한 한국형 자폐 스펙트럼 장애 임상 가이드라인을 수립하여, 의료진이 최신 과학적 근거를 바탕으로 자폐인을 진단·평가·지원할 수 있는 표준화된 지침을 제공했습니다.',
  },
  {
    id: 'kim2024diagnosis',
    authors: 'Kim JI, Yoo HJ*',
    title: 'Diagnosis and Assessment of Autism Spectrum Disorder in South Korea',
    journal: 'Journal of the Korean Academy of Child and Adolescent Psychiatry',
    year: 2024,
    doi: '',
    category: 'clinical',
    summary_en: 'This review summarized the current state of autism diagnosis and assessment in South Korea, outlining the tools and methods clinicians use to identify autism — such as structured interviews and behavioral observations — and discussing how these practices can be improved for Korean families.',
    summary_ko: '한국에서의 자폐 진단 및 평가 현황을 정리한 종설로, 구조화된 면담과 행동 관찰 등 의료진이 사용하는 도구와 방법을 소개하고, 한국 가족에 맞게 이러한 진단 과정을 개선할 방안을 논의했습니다.',
  },
  {
    id: 'han2024aripiprazole',
    authors: 'Han JH, Kim JM, Yoo HJ*',
    title: 'Examining the Use of Oral Aripiprazole in Patients With Autism Spectrum Disorder: A Study of Retrospective Chart Review at a University Medical Center',
    journal: 'Journal of the Korean Academy of Child and Adolescent Psychiatry',
    year: 2024,
    doi: '',
    category: 'clinical',
    summary_en: 'This study reviewed how aripiprazole — a commonly prescribed medication for managing irritability in autism — is actually used in clinical practice at a Korean university hospital. By analyzing patient records, it provided real-world data on dosing patterns, duration of use, and outcomes, helping clinicians make more informed treatment decisions.',
    summary_ko: '자폐의 과민 반응 관리에 흔히 처방되는 아리피프라졸이 한국 대학병원에서 실제로 어떻게 사용되고 있는지 환자 기록을 분석했습니다. 투여 용량, 사용 기간, 치료 결과에 대한 실제 임상 데이터를 제공하여 의료진의 처방 결정에 도움이 되는 근거를 마련했습니다.',
  },
  {
    id: 'koehler2024scirep',
    authors: 'Koehler JC, Dong MS, Song DY, Bong G, Koutsouleris N, Yoo HJ*, Falter-Wagner CM*',
    title: 'Classifying autism in a clinical population based on motion synchrony: a proof-of-concept study using real-life diagnostic interviews',
    journal: 'Scientific Reports',
    year: 2024,
    doi: '10.1038/s41598-024-56098-0',
    category: 'clinical',
    summary_en: 'When two people talk, their body movements naturally fall into sync — but this pattern differs in autistic individuals. This study used video analysis of real diagnostic interviews to detect these subtle differences in movement synchrony, showing it could be developed into an objective, technology-based tool to support autism diagnosis.',
    summary_ko: '두 사람이 대화할 때 몸의 움직임이 자연스럽게 동기화되는데, 이 패턴이 자폐인에서는 다르게 나타납니다. 실제 진단 면접 영상을 분석하여 이러한 미세한 움직임 동기화 차이를 감지함으로써, 객관적·기술 기반의 자폐 진단 보조 도구로 발전시킬 수 있음을 보여주었습니다.',
  },
  {
    id: 'ko2024eeg',
    authors: 'Ko YJ, Han JH, Cho A, Yoo HJ*, Kim H*',
    title: 'Abnormal Electroencephalogram Findings and Its Correlation With Clinical Features From Pediatric Patients in Psychiatric Clinic',
    journal: 'Clinical EEG and Neuroscience',
    year: 2024,
    doi: '10.1177/15500594231209187',
    category: 'clinical',
    summary_en: 'This study analyzed brain wave (EEG) recordings from children at a psychiatric clinic and found that certain abnormal patterns were linked to specific clinical features. These findings suggest that EEG — a painless, non-invasive test — could provide additional clues to help clinicians better understand and support each child\'s needs.',
    summary_ko: '정신건강의학과를 방문한 아동의 뇌파(EEG) 기록을 분석하여 특정 이상 패턴이 임상적 특성과 연관됨을 발견했습니다. 통증 없이 시행할 수 있는 비침습적 검사인 뇌파가 각 아동의 상태를 더 잘 이해하고 지원하는 데 추가적인 단서를 제공할 수 있음을 시사합니다.',
  },
  {
    id: 'kim2024sibling',
    authors: 'Kim SY, Song DY, Bong G, Han JH, Yoo HJ*',
    title: 'Descriptive Analysis of Social Interaction and Communication Skills of Autistic Children According to Sibling Status and Characteristics',
    journal: 'Psychiatry Investigation',
    year: 2024,
    doi: '10.30773/pi.2023.0137',
    category: 'clinical',
    summary_en: 'This study examined how having siblings — and the characteristics of those siblings — may influence the social and communication skills of autistic children. The findings suggest that sibling relationships can play a meaningful role in social development, offering insights for family-based support strategies.',
    summary_ko: '형제자매의 유무와 특성이 자폐 아동의 사회적 상호작용 및 의사소통 능력에 어떤 영향을 미치는지 분석했습니다. 형제자매 관계가 사회성 발달에 의미 있는 역할을 할 수 있음을 보여주어, 가족 기반 지원 전략에 대한 시사점을 제공합니다.',
  },
  {
    id: 'kim2024pcn',
    authors: 'Kim JH, Koh IG, Lee H, Lee GH, Song DY, Kim SW, ... Kim E, Yoo HJ*, An JY*',
    title: 'Short tandem repeat expansions in cortical layer-specific genes implicate in phenotypic severity and adaptability of autism spectrum disorder',
    journal: 'Psychiatry and Clinical Neurosciences',
    year: 2024,
    doi: '10.1111/pcn.13735',
    category: 'genomics',
    summary_en: 'This research mapped short tandem repeat (STR) sequences — repetitive DNA segments that can expand or contract — across the genomes of Korean autistic individuals. The study found that expansions in genes active in specific layers of the brain cortex are linked to more pronounced autistic traits and differences in adaptive skills. This represents a new class of genetic variation not captured by standard sequencing analyses.',
    summary_ko: '한국인 자폐인의 유전체에서 반복염기서열(STR) — 늘어나거나 줄어들 수 있는 반복 DNA 구간 — 을 전장유전체 수준으로 분석했습니다. 대뇌피질 특정 층에서 활발한 유전자 내 반복서열 확장이 자폐 특성의 정도 및 적응 기능과 연관됨을 발견했습니다. 이는 기존 시퀀싱 분석에서는 포착되지 않던 새로운 유형의 유전적 변이입니다.',
  },
  {
    id: 'oh2024methylation',
    authors: 'Oh M, Yoon NH, Kim SA, Yoo HJ*',
    title: 'Epigenetic Insights into Autism Spectrum Disorder: DNA Methylation Levels of NR3C1, ASCL1, and FOXO3 in Korean Autism Spectrum Disorder Sibling Pairs',
    journal: 'Clinical Psychopharmacology and Neuroscience',
    year: 2024,
    doi: '10.9758/cpn.23.1133',
    category: 'genomics',
    summary_en: 'This study looked at "epigenetic" changes — chemical tags on DNA that affect how genes work without altering the DNA sequence itself — in Korean sibling pairs where one sibling is autistic. Differences were found in genes related to stress response and brain development, helping explain why siblings sharing the same parents can have very different traits.',
    summary_ko: 'DNA 서열 자체를 바꾸지 않으면서 유전자 작동 방식에 영향을 주는 "후성유전학적" 변화(DNA 메틸화)를 한국인 자폐 형제 쌍에서 분석했습니다. 스트레스 반응과 뇌 발달 관련 유전자에서 차이를 발견하여, 같은 부모를 둔 형제자매라도 매우 다른 특성을 보일 수 있는 이유를 설명하는 데 도움이 됩니다.',
  },
  {
    id: 'kim2024bib',
    authors: 'Kim YJ, Lee H, Koh IG, ... An JY*',
    title: 'CWAS-Plus: Estimating category-wide association of rare noncoding variation from whole-genome sequencing data with cell-type-specific functional data',
    journal: 'Briefings in Bioinformatics',
    year: 2024,
    doi: '10.1093/bib/bbae323',
    category: 'genomics',
    summary_en: 'This study introduced CWAS-Plus, a computational tool that systematically tests whether rare noncoding genetic variants — changes in DNA regions that don\'t directly code for proteins — are associated with autism when grouped by their functional context, such as which cell types in the brain they affect. The tool helps researchers move beyond coding regions to understand the broader regulatory genome\'s role in autism.',
    summary_ko: '비암호화 영역(단백질을 직접 만들지 않는 DNA 구간)의 희귀 변이를 뇌의 세포 유형별로 체계적으로 분석할 수 있는 CWAS-Plus 도구를 개발했습니다. 이를 통해 연구자들이 암호화 영역을 넘어 유전체의 조절 영역이 자폐에 미치는 역할을 이해할 수 있게 되었습니다.',
  },
  {
    id: 'lowther2023ajhg',
    authors: 'Lowther C, Valkanas E, Giordano JL, Wang HZ, Currall BB, O\'Keefe K, Pierce-Hoffman E, Kurtas NE, Whelan CW, Hao SP, Weisburd B, Jalili V, Fu J, Wong I, Collins RL, Zhao X, Austin-Tse CA, Evangelista E, Lemire G, Aggarwal VS, Lucente D, Gauthier LD, Tolonen C, Sahakian N, Stevens C, An JY, Dong S, Norton ME, MacKenzie TC, Devlin B, Gilmore K, Powell BC, Brandt A, Vetrini F, DiVito M, Sanders SJ, MacArthur DG, Hodge JC, O\'Donnell-Luria A, Rehm HL, Vora NL, Levy B, Brand H, Wapner RJ, Talkowski ME',
    title: 'Systematic evaluation of genome sequencing for the diagnostic assessment of autism spectrum disorder and fetal structural anomalies',
    journal: 'The American Journal of Human Genetics',
    year: 2023,
    doi: '10.1016/j.ajhg.2023.07.010',
    category: 'genomics',
    summary_en: 'This large-scale study systematically compared the diagnostic effectiveness of whole-genome sequencing against standard genetic tests for autism and fetal structural anomalies. The results showed that genome sequencing can identify significantly more genetic diagnoses, supporting its adoption as a frontline diagnostic tool in clinical practice.',
    summary_ko: '자폐와 태아 구조 이상에 대해 전장유전체 시퀀싱의 진단 효과를 기존 유전 검사와 체계적으로 비교한 대규모 연구입니다. 유전체 시퀀싱이 유의미하게 더 많은 유전적 진단을 제공할 수 있음을 보여주어, 임상에서의 1차 진단 도구로서의 도입을 뒷받침합니다.',
  },
  {
    id: 'park2023emm',
    authors: 'Park G, Jang WE, Kim S, Gonzales EL, Ji J, Choi S, Kim Y, Park JH, Mohammad HB, Bang G, Kang M, Kim S, Jeon SJ, Kim JY, Kim KP, Shin CY, An JY, Kim MS, Lee YS',
    title: 'Dysregulation of the Wnt/β-catenin signaling pathway via Rnf146 upregulation in a VPA-induced mouse model of autism spectrum disorder',
    journal: 'Experimental & Molecular Medicine',
    year: 2023,
    doi: '10.1038/s12276-023-01065-2',
    category: 'mechanism',
    summary_en: 'Using a mouse model of autism induced by valproic acid (VPA), this study discovered that a key developmental signaling pathway (Wnt/β-catenin) becomes dysregulated through upregulation of the Rnf146 gene. Understanding these molecular mechanisms provides potential targets for future therapeutic interventions.',
    summary_ko: '발프로산(VPA)으로 유도한 자폐 마우스 모델에서 Rnf146 유전자의 상향 조절을 통해 핵심 발달 신호전달 경로(Wnt/β-catenin)가 이상 조절됨을 발견했습니다. 이러한 분자 기전의 이해는 향후 치료 개입의 잠재적 표적을 제공합니다.',
  },
  {
    id: 'jang2023mp',
    authors: 'Jang WE, Park JH, Park G, Bang G, Na CH, Kim JY, Kim KY, Kim KP, Shin CY, An JY, Lee YS, Kim MS',
    title: 'Cntnap2-dependent molecular networks in autism spectrum disorder revealed through an integrative multi-omics analysis',
    journal: 'Molecular Psychiatry',
    year: 2023,
    doi: '10.1038/s41380-022-01822-1',
    category: 'mechanism',
    summary_en: 'CNTNAP2 is one of the most well-known autism risk genes. This study used an integrative multi-omics approach — combining data from proteins, gene expression, and metabolites — to map the molecular networks affected when this gene is disrupted. The findings reveal how a single gene can cascade into widespread biological changes relevant to autism.',
    summary_ko: 'CNTNAP2는 가장 잘 알려진 자폐 위험 유전자 중 하나입니다. 단백질, 유전자 발현, 대사체 데이터를 통합하는 다중 오믹스 접근법으로 이 유전자가 손상될 때 영향을 받는 분자 네트워크를 매핑했습니다. 단일 유전자의 이상이 자폐와 관련된 광범위한 생물학적 변화로 확산되는 과정을 보여줍니다.',
  },
  {
    id: 'kim2023execfn',
    authors: 'Kim JH, Song DY, Han HS, Yoon NH, Cho HB, Lee HB, Choi KH, Chae PK, Bong G, Ahn S, Yoo HJ*',
    title: 'Improving adaptive behaviors for autistic adults without intellectual disability through executive function training',
    journal: 'Asian Journal of Psychiatry',
    year: 2023,
    doi: '10.1016/j.ajp.2023.103579',
    category: 'clinical',
    summary_en: 'This study showed that training programs focused on "executive functions" — the brain\'s ability to plan ahead, organize tasks, and manage time — can meaningfully improve daily living skills in autistic adults. Participants learned to better handle everyday responsibilities, demonstrating that targeted cognitive training can make a real difference in independent living.',
    summary_ko: '계획 수립, 과제 조직, 시간 관리 등 "실행 기능"에 초점을 맞춘 훈련 프로그램이 자폐 성인의 일상생활 능력을 의미 있게 향상시킬 수 있음을 보여주었습니다. 참가자들은 일상적인 책임을 더 잘 처리하게 되어, 맞춤형 인지 훈련이 자립 생활에 실질적인 도움이 됨을 입증했습니다.',
  },
  {
    id: 'kim2023tics',
    authors: 'Kim YR, Song DY, Bong G, Han JH, Kim JH, Yoo HJ*',
    title: 'Clinical characteristics of comorbid tic disorders in autism spectrum disorder: exploratory analysis',
    journal: 'Child and Adolescent Psychiatry and Mental Health',
    year: 2023,
    doi: '10.1186/s13034-023-00618-7',
    category: 'clinical',
    summary_en: 'Some autistic individuals also experience tic disorders — involuntary, repetitive movements or sounds. This study identified the specific clinical characteristics of people who have both conditions, finding distinct patterns that can help doctors recognize and treat these overlapping challenges more effectively.',
    summary_ko: '일부 자폐인은 틱 장애(불수의적인 반복 움직임이나 소리)를 동반합니다. 두 가지 상태를 모두 가진 사람들의 특징적인 임상 패턴을 발견하여, 의료진이 이러한 중복 증상을 보다 효과적으로 인식하고 치료하는 데 도움이 되는 근거를 제공했습니다.',
  },
  {
    id: 'kim2022mp',
    authors: 'Kim IB, Lee T, Lee J, Kim J, Lee S, Koh IG, Kim JH, An JY, Lee H, Kim WK, Ju YS, Cho Y, Yu SJ, Kim SA, Oh M, Han DW, Kim E, Choi JK, Yoo HJ*, Lee JH*',
    title: 'Non-coding de novo mutations in chromatin interactions are implicated in autism spectrum disorder',
    journal: 'Molecular Psychiatry',
    year: 2022,
    doi: '10.1038/s41380-022-01697-2',
    category: 'genomics',
    summary_en: 'This study demonstrated that newly arising (de novo) mutations in noncoding regions of the genome — areas that regulate when and where genes are turned on — play a significant role in autism. By examining chromatin interaction data from developing brains, the team showed that these regulatory mutations affect how genes communicate with each other during critical periods of brain development.',
    summary_ko: '유전체의 비암호화 영역 — 유전자가 언제, 어디서 활성화되는지 조절하는 부분 — 에서 새로 발생한(de novo) 변이가 자폐에 중요한 역할을 한다는 것을 밝혔습니다. 발달 중인 뇌의 크로마틴 상호작용 데이터를 분석하여, 이러한 조절 변이가 뇌 발달의 핵심 시기에 유전자 간 소통에 영향을 미친다는 것을 보여주었습니다.',
  },
  {
    id: 'kim2022kados2',
    authors: 'Kim SY, Oh M, Bong G, Song DY, Yoon NH, Kim JH, Yoo HJ*',
    title: 'Diagnostic validity of Autism Diagnostic Observation Schedule, second edition (K-ADOS-2) in the Korean population',
    journal: 'Molecular Autism',
    year: 2022,
    doi: '10.1186/s13229-022-00508-3',
    category: 'clinical',
    summary_en: 'This study validated the Korean version of the Autism Diagnostic Observation Schedule (K-ADOS-2) — one of the most widely used diagnostic tools worldwide. The results confirmed that it is a reliable and accurate tool for identifying autism in the Korean population, helping clinicians make confident diagnoses using a culturally adapted instrument.',
    summary_ko: '전 세계적으로 가장 널리 사용되는 자폐 진단 도구인 ADOS-2의 한국판(K-ADOS-2)을 검증했습니다. 한국인을 대상으로 신뢰성과 정확도가 높은 자폐 진단 도구임을 확인하여, 의료진이 문화적으로 적합한 도구를 활용해 확신 있는 진단을 내릴 수 있도록 했습니다.',
  },
  {
    id: 'chun2021srs',
    authors: 'Chun J, Bong G, Han JH, Oh M, Yoo HJ*',
    title: 'Validation of Social Responsiveness Scale for Korean Preschool Children With Autism',
    journal: 'Psychiatry Investigation',
    year: 2021,
    doi: '10.30773/pi.2021.0132',
    category: 'clinical',
    summary_en: 'This study validated a questionnaire that measures social responsiveness — how well a child responds to social cues — for Korean preschool-age children. By confirming the tool works accurately in the Korean population, it gives parents and clinicians a reliable way to detect and track social difficulties in young children early on.',
    summary_ko: '아동이 사회적 단서에 얼마나 잘 반응하는지를 측정하는 설문도구를 한국 미취학 아동 대상으로 검증했습니다. 한국 인구에서 정확하게 작동함을 확인하여, 부모와 의료진이 어린 아동의 사회적 어려움을 조기에 발견하고 추적할 수 있는 신뢰할 수 있는 방법을 제공했습니다.',
  },
  {
    id: 'kim2021execpilot',
    authors: 'Kim JH, Kim YA, Song DY, Cho HB, Lee HB, Park JH, Lim JI, Hong MH, Chae PK, Yoo HJ*',
    title: 'An Intervention Program Targeting Daily Adaptive Skills Through Executive Function Training for Adults with Autism Spectrum Disorder: A Pilot Study',
    journal: 'Psychiatry Investigation',
    year: 2021,
    doi: '10.30773/pi.2020.0443',
    category: 'clinical',
    summary_en: 'This pilot study tested a new intervention program that trains executive function skills — like planning and problem-solving — to help autistic adults become more independent in daily life. Early results were promising, showing improvements in participants\' ability to manage everyday tasks on their own.',
    summary_ko: '계획 및 문제 해결 등의 실행 기능을 훈련하여 자폐 성인의 일상 자립을 돕는 새로운 중재 프로그램을 시범 운영했습니다. 참가자들의 일상 과제 수행 능력이 향상되는 긍정적인 초기 결과를 보여주었습니다.',
  },
  {
    id: 'oh2021adirk',
    authors: 'Oh M, Song DY, Bong G, Yoon NH, Kim SY, Kim JH, Kim JM, Yoo HJ*',
    title: 'Validating the Autism Diagnostic Interview-Revised in the Korean Population',
    journal: 'Psychiatry Investigation',
    year: 2021,
    doi: '10.30773/pi.2020.0372',
    category: 'clinical',
    summary_en: 'The Autism Diagnostic Interview-Revised (ADI-R) is a detailed parent interview used worldwide to help diagnose autism. This study confirmed that the Korean version works reliably and accurately, ensuring Korean families have access to the same high-quality diagnostic process used internationally.',
    summary_ko: '자폐 진단을 위해 전 세계적으로 사용되는 부모 심층 면담 도구인 ADI-R의 한국판이 신뢰성 있고 정확하게 작동함을 확인했습니다. 이를 통해 한국 가족들도 국제적으로 동일한 수준의 진단 과정을 이용할 수 있게 되었습니다.',
  },
  {
    id: 'kim2021anxiety',
    authors: 'Kim SY, Kim YA, Song DY, Bong G, Kim JM, Kim JH, Yoo HJ*',
    title: 'State and Trait Anxiety of Adolescents with Autism Spectrum Disorders',
    journal: 'Psychiatry Investigation',
    year: 2021,
    doi: '10.30773/pi.2020.0328',
    category: 'clinical',
    summary_en: 'Anxiety is one of the most common challenges faced by autistic adolescents. This study measured both everyday anxiety and underlying anxiety tendencies in autistic teens, providing important data that helps clinicians identify which individuals may need additional mental health support.',
    summary_ko: '불안은 자폐 청소년이 가장 흔히 겪는 어려움 중 하나입니다. 자폐 청소년의 일상적 불안과 기저 불안 성향을 측정하여, 추가적인 정신건강 지원이 필요한 대상을 파악하는 데 중요한 자료를 제공했습니다.',
  },
  {
    id: 'oh2021peers',
    authors: 'Oh M, Laugeson E, Kim JH, Lee K, Kim J, Lee S, Lim B, Cha S, Bong G, Yoon NH, Bahn GH, Yoo HJ*',
    title: 'A Randomized Controlled Trial of the Korean Version of the Program for the Education and Enrichment of Relational Skills for Young Adults (PEERS\u00ae-YA-K) With Autism Spectrum Disorder: A Pilot Study',
    journal: 'Frontiers in Psychiatry',
    year: 2021,
    doi: '10.3389/fpsyt.2021.730448',
    category: 'clinical',
    summary_en: 'PEERS\u00ae is a social skills program originally developed at UCLA that teaches practical social skills through structured lessons and practice. This study tested the Korean adaptation for young adults and showed it effectively improved participants\' ability to make friends and handle social situations, demonstrating that the program works well across cultures.',
    summary_ko: 'UCLA에서 개발된 사회성 훈련 프로그램 PEERS\u00ae의 한국 청년 버전을 시험했습니다. 구조화된 수업과 실습을 통해 실용적인 사회적 기술을 가르치는 이 프로그램이 참가자들의 친구 사귀기와 사회적 상황 대처 능력을 효과적으로 향상시켜, 문화 간 적용이 가능함을 입증했습니다.',
  },
  {
    id: 'song2021sexdiff',
    authors: 'Song DY, Kim SY, Bong G, Kim YA, Kim JH, Kim JM, Yoo HJ*',
    title: 'Exploring sex differences in the manifestation of autistic traits in young children',
    journal: 'Research in Autism Spectrum Disorders',
    year: 2021,
    doi: '',
    category: 'clinical',
    summary_en: 'Autism is diagnosed more often in boys than girls, but this may partly reflect differences in how traits show up between sexes. This study examined young children to identify sex-specific patterns in how autistic traits appear, which could help ensure girls are not overlooked during screening and diagnosis.',
    summary_ko: '자폐는 남아에서 더 많이 진단되지만, 이는 부분적으로 성별에 따라 특성이 다르게 나타나기 때문일 수 있습니다. 어린 아동에서 자폐 특성의 성별 특이적 패턴을 분석하여, 선별 및 진단 과정에서 여아가 간과되지 않도록 하는 데 기여했습니다.',
  },
  {
    id: 'bong2021bedevel',
    authors: 'Bong G, Kim SY, Song DY, Kim JH, Hong Y, Yoon NH, Sunwoo H, Jang JY, Oh M, Kim JM, Lee KS, Jung S, Choi CW, Ryu JS, Yoo HJ*',
    title: 'Short caregiver interview and play observation for early screening of autism spectrum disorder: Behavior development screening for toddlers (BeDevel)',
    journal: 'Autism Research',
    year: 2021,
    doi: '10.1002/aur.2528',
    category: 'clinical',
    summary_en: 'Early detection of autism gives children the best chance for effective support. This study developed and tested "BeDevel" \u2014 a brief screening method that combines a short parent interview with play observation \u2014 for toddlers. The tool proved effective at identifying early signs of autism in a quick, practical format that can be used in routine health checkups.',
    summary_ko: '자폐를 조기에 발견하면 효과적인 지원의 기회가 높아집니다. 짧은 부모 면담과 놀이 관찰을 결합한 영유아 선별 도구 "BeDevel"을 개발하고 검증했습니다. 일반 건강검진에서 사용할 수 있는 간편하고 실용적인 형식으로 자폐의 초기 징후를 효과적으로 식별할 수 있음을 입증했습니다.',
  },
  {
    id: 'kim2020visuospatial',
    authors: 'Kim SY, Song DY, Kim YA, Bong G, Kim JM, Kim JH, Yoo HJ*',
    title: 'How Do Children with Autism Spectrum Disorder Encode and Reproduce Visuospatial Stimuli?: Investigation into Visuospatial Processing Abilities and Styles',
    journal: 'Psychiatry Investigation',
    year: 2020,
    doi: '10.30773/pi.2020.0181',
    category: 'clinical',
    summary_en: 'Many autistic individuals have distinctive ways of processing visual and spatial information. This study investigated how autistic children remember and reproduce shapes and patterns, revealing unique processing styles that could inform more effective educational and therapeutic approaches tailored to their strengths.',
    summary_ko: '많은 자폐인이 시각 및 공간 정보를 독특한 방식으로 처리합니다. 자폐 아동이 도형과 패턴을 기억하고 재현하는 방식을 조사하여, 이들의 강점에 맞춘 효과적인 교육 및 치료 접근법 개발에 도움이 되는 고유한 인지 처리 특성을 밝혔습니다.',
  },
  {
    id: 'oh2020lactate',
    authors: 'Oh M, Kim SA, Yoo HJ*',
    title: 'Higher Lactate Level and Lactate-to-Pyruvate Ratio in Autism Spectrum Disorder',
    journal: 'Experimental Neurobiology',
    year: 2020,
    doi: '10.5607/en20030',
    category: 'mechanism',
    summary_en: 'This study measured metabolic markers in the blood and found that autistic individuals had higher levels of lactate \u2014 a byproduct of energy production in cells. This suggests that differences in how cells produce and use energy may play a role in autism, opening up new avenues for understanding its biological basis.',
    summary_ko: '혈액 내 대사 지표를 측정한 결과, 자폐인에서 세포의 에너지 생산 부산물인 젖산(lactate) 수치가 더 높은 것을 발견했습니다. 이는 세포가 에너지를 생산하고 사용하는 방식의 차이가 자폐에 관여할 수 있음을 시사하며, 생물학적 기전 이해의 새로운 방향을 제시합니다.',
  },
  {
    id: 'han2019vr',
    authors: 'Han SH, Ryu JH, Park JW, Choi SI, Kim JY, Lee H, Yoo HJ*',
    title: 'Effect of Immersive Virtual Reality Education Before Chest Radiography on Anxiety and Distress Among Pediatric Patients: A Randomized Clinical Trial',
    journal: 'JAMA Pediatrics',
    year: 2019,
    doi: '10.1001/jamapediatrics.2019.3000',
    category: 'clinical',
    summary_en: 'Hospital procedures can be frightening for children. This clinical trial showed that letting children experience an immersive virtual reality preview of a chest X-ray procedure beforehand significantly reduced their anxiety and distress during the actual test. This approach has particular relevance for autistic children who may be more sensitive to unfamiliar medical environments.',
    summary_ko: '병원 검사는 아동에게 두려울 수 있습니다. 이 임상시험은 흉부 X선 촬영 전에 몰입형 VR로 검사 과정을 미리 체험하게 하면 실제 검사 시 아동의 불안과 고통이 크게 감소함을 보여주었습니다. 이는 낯선 의료 환경에 더 민감할 수 있는 자폐 아동에게 특히 유용한 접근법입니다.',
  },
  {
    id: 'bong2019bedevel',
    authors: 'Bong G, Kim JH, Hong Y, Yoon NH, Sunwoo H, Jang JY, Oh M, Lee KS, Jung S, Yoo HJ*',
    title: 'The Feasibility and Validity of Autism Spectrum Disorder Screening Instrument: Behavior Development Screening for Toddlers (BeDevel)\u2014A Pilot Study',
    journal: 'Autism Research',
    year: 2019,
    doi: '10.1002/aur.2117',
    category: 'clinical',
    summary_en: 'This pilot study first tested the BeDevel screening instrument \u2014 a practical tool designed to identify early signs of autism in toddlers during routine health checkups. Results showed it was both feasible to use in busy clinical settings and effective at flagging children who may benefit from further evaluation.',
    summary_ko: '영유아 건강검진에서 자폐의 초기 징후를 식별하기 위한 BeDevel 선별 도구를 처음으로 시험한 파일럿 연구입니다. 바쁜 임상 환경에서도 사용이 가능하고, 추가 평가가 필요한 아동을 효과적으로 파악할 수 있음을 확인했습니다.',
  },
  {
    id: 'hong2019socialskills',
    authors: 'Hong JK, Oh M, Bong G, Kim JH, Bahn G, Cho IH, Yoo HJ*',
    title: 'Age as a Moderator of Social Skills Intervention Response Among Korean Adolescents with Autism Spectrum Disorder',
    journal: 'Journal of Autism and Developmental Disorders',
    year: 2019,
    doi: '10.1007/s10803-019-03880-z',
    category: 'clinical',
    summary_en: 'This study found that age matters when it comes to social skills training for autistic adolescents \u2014 younger teens showed greater improvements than older ones. This practical finding helps clinicians plan the timing of interventions for maximum benefit, emphasizing the importance of early social skills support.',
    summary_ko: '자폐 청소년의 사회성 훈련에서 나이가 중요한 요인임을 발견했습니다. 어린 청소년이 나이 든 청소년보다 더 큰 향상을 보여, 최대한의 효과를 위해 조기에 사회성 지원을 시작하는 것이 중요함을 강조했습니다.',
  },
  {
    id: 'kim2017avpr1a',
    authors: 'Kim SA, Yang SY, Hur GM, Park M, Park JE, Yoo HJ*',
    title: 'Replicative genetic association study between functional polymorphisms in AVPR1A and social behavior scales of autism spectrum disorder in the Korean population',
    journal: 'Molecular Autism',
    year: 2017,
    doi: '10.1186/s13229-017-0161-9',
    category: 'genomics',
    summary_en: 'Vasopressin is a hormone that plays a role in social bonding and behavior. This study found that specific genetic variations in the vasopressin receptor gene (AVPR1A) are associated with social behavior differences in Korean autistic individuals, supporting the idea that the body\'s hormonal systems influence social functioning in autism.',
    summary_ko: '바소프레신은 사회적 유대와 행동에 관여하는 호르몬입니다. 바소프레신 수용체 유전자(AVPR1A)의 특정 변이가 한국인 자폐인의 사회적 행동 차이와 연관됨을 발견하여, 호르몬 체계가 자폐의 사회적 기능에 영향을 미친다는 근거를 제시했습니다.',
  },
]

const categoryLabels = {
  all: { en: 'All', ko: '전체' },
  genomics: { en: 'Genomics', ko: '유전체' },
  clinical: { en: 'Clinical', ko: '임상' },
  mechanism: { en: 'Mechanism', ko: '기전' },
}

export default function ResearchPage() {
  const { t, lang } = useLang()
  const [expandedPub, setExpandedPub] = useState(null)
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)

  const filtered = publications.filter((p) => {
    if (selectedYear !== 'all' && p.year !== selectedYear) return false
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    return true
  })

  const filteredYears = [...new Set(filtered.map((p) => p.year))].sort((a, b) => b - a)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4 flex items-start gap-6">
          <img src={iconGenomics} alt="" className="hidden sm:block h-20 w-20 object-contain flex-shrink-0 mt-1" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900">{t('research.title')}</h1>
            <p className="mt-4 max-w-3xl text-xl text-slate-600 leading-relaxed">
              {t('research.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('research.focus')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {(lang === 'ko'
              ? [
                  { title: '자폐의 유전적 다양성', desc: '자폐는 하나의 유전자가 아닌 수백 개의 유전적 요인이 복합적으로 작용합니다. K-ARC는 한국인 가족 데이터를 통해 이러한 유전적 다양성의 전체 그림을 그려나가고 있습니다.' },
                  { title: '가족 맥락의 이해', desc: '같은 변이라도 가족 배경에 따라 다르게 나타날 수 있습니다. 가족 단위 분석을 통해 각 개인의 고유한 유전적 특성이 어떻게 형성되는지 연구합니다.' },
                  { title: '비암호화 영역의 역할', desc: '유전체의 98% 이상을 차지하는 비암호화 영역이 유전자 조절에 어떤 역할을 하는지, 그것이 자폐의 생물학적 기전과 어떻게 연결되는지 탐구합니다.' },
                  { title: '성별에 따른 차이', desc: '자폐가 성별에 따라 유전적으로 다르게 나타나는 이유를 연구하여, 보다 정밀한 이해와 개인 맞춤형 접근의 기반을 마련합니다.' },
                ]
              : [
                  { title: 'Genetic Diversity of Autism', desc: 'Autism involves hundreds of genetic factors working in combination, not a single gene. K-ARC is building a comprehensive picture of this genetic diversity through Korean family-based data.' },
                  { title: 'Family Context', desc: 'The same variant can manifest differently depending on family background. Through family-based analysis, we study how each individual\'s unique genetic profile is shaped.' },
                  { title: 'Noncoding Genome', desc: 'We explore how the noncoding regions \u2014 over 98% of the genome \u2014 regulate genes and connect to the biological mechanisms underlying autism.' },
                  { title: 'Sex Differences', desc: 'We investigate why autism presents differently across sexes at the genetic level, laying the groundwork for more precise understanding and personalized approaches.' },
                ]
            ).map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-base text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('research.publications')}</h2>

          {/* Category filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['all', 'genomics', 'clinical', 'mechanism'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-slate-600 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {categoryLabels[cat][lang]}
              </button>
            ))}
          </div>

          {/* Year filter */}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear('all')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                selectedYear === 'all'
                  ? 'bg-slate-700 text-white'
                  : 'bg-white text-slate-500 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {lang === 'ko' ? '전체 연도' : 'All Years'}
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  selectedYear === year
                    ? 'bg-slate-700 text-white'
                    : 'bg-white text-slate-500 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-slate-500">
            {lang === 'ko'
              ? `${filtered.length}편의 논문`
              : `${filtered.length} publication${filtered.length !== 1 ? 's' : ''}`}
          </p>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
              <p className="text-base text-slate-500">
                {lang === 'ko' ? '선택한 조건에 해당하는 논문이 없습니다.' : 'No publications match the selected filters.'}
              </p>
            </div>
          ) : (
            filteredYears.map((year) => (
              <div key={year} className="mt-8">
                <h3 className="text-lg font-bold text-primary-700 border-b border-gray-200 pb-2">
                  {year}
                </h3>
                <div className="mt-4 space-y-4">
                  {filtered
                    .filter((p) => p.year === year)
                    .map((pub) => (
                      <div key={pub.id} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                        <button
                          onClick={() => setExpandedPub(expandedPub === pub.id ? null : pub.id)}
                          className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  pub.category === 'genomics' ? 'bg-blue-100 text-blue-700' :
                                  pub.category === 'clinical' ? 'bg-green-100 text-green-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {categoryLabels[pub.category][lang]}
                                </span>
                              </div>
                              <h4 className="text-base font-medium text-slate-900 leading-snug">{pub.title}</h4>
                              <p className="mt-1 text-sm text-slate-500">{pub.authors}</p>
                              <p className="mt-1 text-base">
                                <span className="italic text-slate-500">{pub.journal}</span>
                                {pub.doi && (
                                  <span className="ml-2 text-primary-600 text-sm">DOI: {pub.doi}</span>
                                )}
                              </p>
                            </div>
                            <svg
                              className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${expandedPub === pub.id ? 'rotate-180' : ''}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </button>
                        {expandedPub === pub.id && (
                          <div className="border-t border-gray-100 bg-primary-50/30 px-6 py-5">
                            <p className="text-sm font-semibold text-primary-700 mb-2">
                              {lang === 'ko' ? '연구 해설' : 'About This Research'}
                            </p>
                            <p className="text-base text-slate-700 leading-relaxed">
                              {lang === 'ko' ? pub.summary_ko : pub.summary_en}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
