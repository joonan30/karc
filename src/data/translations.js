const translations = {
  // Nav
  'nav.home': { en: 'Home', ko: '홈' },
  'nav.about': { en: 'About', ko: '소개' },
  'nav.research': { en: 'Research', ko: '연구' },
  'nav.data': { en: 'Data', ko: '데이터' },
  'nav.participate': { en: 'Participate', ko: '연구 참여' },
  'nav.support': { en: 'Support', ko: '후원' },
  'nav.dashboard': { en: 'Dashboard', ko: '대시보드' },
  'nav.login': { en: 'Login', ko: '로그인' },
  'nav.logout': { en: 'Logout', ko: '로그아웃' },
  'nav.overview': { en: 'Overview', ko: '개요' },
  'nav.variants': { en: 'Variants', ko: '변이' },
  'nav.reports': { en: 'Reports', ko: '리포트' },
  'nav.researchers': { en: 'Researchers', ko: '연구자' },
  'nav.profile': { en: 'Profile', ko: '프로필' },
  'nav.members': { en: 'Members', ko: '회원 관리' },

  // Hero
  'hero.title': {
    en: 'Korean Autism Research Consortium',
    ko: '한국 자폐 연구 컨소시엄',
  },
  'hero.motto': {
    en: 'Connecting Science, Understanding Lives',
    ko: 'Connecting Science, Understanding Lives',
  },
  'hero.description': {
    en: 'A multi-institutional research consortium dedicated to understanding the genetic architecture of autism through large-scale genomic analysis and family-based studies in the Korean population.',
    ko: '대규모 유전체 분석과 가족 기반 연구를 통해 자폐의 유전적 구조를 이해하는 다기관 공동연구 컨소시엄입니다.',
  },
  'hero.learnMore': { en: 'Learn More', ko: '자세히 보기' },
  'hero.ourResearch': { en: 'Our Research', ko: '연구 소개' },

  // Home - Research Areas
  'home.researchAreas': { en: 'Research Areas', ko: '핵심 연구 분야' },
  'home.researchAreasDesc': {
    en: 'Core research areas of K-ARC',
    ko: 'K-ARC의 핵심 연구 분야',
  },
  'home.genomics.title': { en: 'Genomic Analysis', ko: '유전체 분석' },
  'home.genomics.desc': {
    en: 'Whole-genome sequencing (WGS) and whole-exome sequencing (WES) to identify and analyze genetic variants associated with autism in Korean families.',
    ko: '한국인 자폐 가족 대상 전장유전체 시퀀싱(WGS)과 전장엑솜 시퀀싱(WES)을 통한 자폐 관련 유전 변이 발굴 및 분석',
  },
  'home.clinical.title': { en: 'Clinical Research', ko: '임상 연구' },
  'home.clinical.desc': {
    en: 'Systematic collection of clinical phenotypes and assessments including ADOS, ADI-R, CARS, and comprehensive behavioral and cognitive measures.',
    ko: 'ADOS, ADI-R, CARS 등 체계적인 임상 표현형 수집과 평가를 통한 정밀 표현형-유전형 상관관계 연구',
  },
  'home.functional.title': { en: 'Functional Studies', ko: '기능 실험' },
  'home.functional.desc': {
    en: 'Functional validation of candidate genes using iPSC models, CRISPR screening, and in vitro/in vivo experimental platforms.',
    ko: 'iPSC 모델, CRISPR 스크리닝 등 세포/동물 모델 기반의 후보 유전자 기능 검증 실험 연구',
  },
  'home.collaboration.title': { en: 'Global Collaboration', ko: '국제 공동연구' },
  'home.collaboration.desc': {
    en: 'International collaboration network with leading research groups at Oxford, MIT, Toronto, Aarhus, Wisconsin-Madison, and more.',
    ko: 'Oxford, MIT, Toronto, Aarhus, Wisconsin-Madison 등 세계 주요 연구그룹과의 국제 공동연구 네트워크',
  },

  // Home - Stats
  'home.stats.title': { en: 'K-ARC at a Glance', ko: 'K-ARC 한눈에 보기' },
  'home.stats.families': { en: 'Families', ko: '가족' },
  'home.stats.participants': { en: 'Total Participants', ko: '총 참여자' },
  'home.stats.wgs': { en: 'WGS Completed', ko: '전장유전체 분석 완료' },
  'home.stats.lrwgs': { en: 'Long-read Sequencing', ko: '롱리드 시퀀싱' },

  // Home - Updates
  'home.updates': { en: 'Recent Updates', ko: '최근 소식' },

  // About
  'about.title': { en: 'About K-ARC', ko: 'K-ARC 소개' },
  'about.intro': {
    en: 'The Korean Autism Research Consortium (K-ARC) is a multi-institutional collaborative research consortium established to understand the genetic basis of autism and contribute to precision medicine. K-ARC operates one of the largest East Asian autism genomic cohorts, with comprehensive phenotyping and whole-genome sequencing data.',
    ko: '한국 자폐 연구 컨소시엄(K-ARC)은 자폐의 유전적 기반을 이해하고, 정밀의료 실현에 기여하기 위해 설립된 다기관 공동연구 컨소시엄입니다. 동아시아 최대 규모의 자폐 유전체 코호트를 운영하며, 심층 임상 표현형과 전장유전체 시퀀싱 데이터를 보유하고 있습니다.',
  },
  'about.leadership': { en: 'Leadership', ko: '연구 리더십' },
  'about.director': { en: 'Director', ko: '연구 총괄' },
  'about.director.name': { en: 'Prof. Heejeong Yoo', ko: '유희정 교수' },
  'about.director.affiliation': {
    en: 'Department of Psychiatry, Seoul National University Bundang Hospital',
    ko: '분당서울대학병원 정신건강의학과',
  },
  'about.director.desc': {
    en: 'Leading the overall research direction, clinical-genomic data collection, and cohort management for the consortium.',
    ko: '컨소시엄 연구 총괄, 임상-유전체 데이터 수집 및 코호트 관리를 이끌고 있습니다.',
  },
  'about.coleadGenomics': { en: 'Genomics Lead', ko: '유전체 분석' },
  'about.coleadGenomics.name': { en: 'Prof. Joon-Yong An', ko: '안준용 교수' },
  'about.coleadGenomics.affiliation': {
    en: 'Department of Biosystems and Biomedical Sciences, Korea University',
    ko: '고려대학교 보건과학대학 바이오시스템의과학부',
  },
  'about.coleadGenomics.desc': {
    en: 'Leading genomic data analysis, bioinformatics pipeline development, and statistical genetics research.',
    ko: '유전체 데이터 분석, 바이오인포매틱스 파이프라인 구축 및 통계유전학 연구를 이끌고 있습니다.',
  },
  'about.coleadFunctional': { en: 'Functional Studies Lead', ko: '기능 연구' },
  'about.coleadFunctional.name': { en: 'Dir. Eunjoon Kim', ko: '김은준 단장' },
  'about.coleadFunctional.affiliation': {
    en: 'Center for Synaptic Brain Dysfunctions, IBS / KAIST',
    ko: 'IBS 시냅스 뇌질환 연구단',
  },
  'about.coleadFunctional.desc': {
    en: 'Leading functional validation studies and genomic data generation for the consortium.',
    ko: '기능 연구 및 유전체 데이터 구축을 이끌고 있습니다.',
  },

  'about.institutions': { en: 'Participating Institutions', ko: '참여 기관' },
  'about.pipeline': { en: 'Research Pipeline', ko: '연구 파이프라인' },
  'about.pipeline.step1': { en: 'Clinical Assessment', ko: '임상 평가' },
  'about.pipeline.step1.desc': {
    en: 'Systematic clinical assessment and phenotype data collection using standardized tools',
    ko: '표준화된 도구를 활용한 체계적인 임상 평가 및 표현형 데이터 수집',
  },
  'about.pipeline.step2': { en: 'Genomic Analysis', ko: '기전 해석' },
  'about.pipeline.step2.desc': {
    en: 'Multi-platform sequencing (WES, srWGS, lrWGS) and variant analysis to uncover genetic mechanisms',
    ko: '다중 플랫폼 시퀀싱(WES, srWGS, lrWGS)과 변이 분석을 통한 유전적 기전 규명',
  },
  'about.pipeline.step3': { en: 'Functional Validation', ko: '기능 검증' },
  'about.pipeline.step3.desc': {
    en: 'Validation of candidate genes using cellular and animal model-based experiments',
    ko: '세포/동물 모델을 활용한 후보 유전자 기능 실험 검증',
  },
  'about.pipeline.step4': { en: 'Translational Research', ko: '중개 연구' },
  'about.pipeline.step4.desc': {
    en: 'Large-scale validation through international networks and clinical application',
    ko: '국내외 네트워크를 통한 대규모 검증 및 임상 적용',
  },

  // Research
  'research.title': { en: 'Research', ko: '연구' },
  'research.intro': {
    en: 'K-ARC investigates the diverse characteristics and biological foundations of autism through family-based genomic studies. Our research aims to understand the complex genetic landscape — from noncoding regulatory elements to sex-specific patterns — that shapes the wide spectrum of autistic traits.',
    ko: 'K-ARC는 가족 기반 유전체 연구를 통해 자폐의 다양한 특성과 생물학적 기반을 탐구합니다. 비암호화 조절 영역에서 성별 특이적 패턴에 이르기까지, 자폐의 폭넓은 스펙트럼을 형성하는 복잡한 유전적 지형을 이해하는 것을 목표로 합니다.',
  },
  'research.focus': { en: 'Research Focus', ko: '연구 주제' },
  'research.publications': { en: 'Publications', ko: '논문' },

  // Data
  'data.title': { en: 'Genomic Data', ko: '유전체 데이터' },
  'data.intro': {
    en: 'K-ARC has built one of the largest East Asian autism genomic datasets through multi-platform sequencing of Korean families. These datasets serve as the foundation for our research into the genetic architecture of autism.',
    ko: 'K-ARC는 한국인 가족의 다중 플랫폼 시퀀싱을 통해 동아시아 최대 규모의 자폐 유전체 데이터셋을 구축했습니다. 이 데이터셋은 자폐의 유전적 구조를 연구하는 기반이 됩니다.',
  },
  'data.datasets': { en: 'Datasets', ko: '데이터셋 상세' },
  'data.sharing': { en: 'Data Sharing', ko: '데이터 공유' },

  // Participate
  'participate.title': { en: 'Participate in Research', ko: '연구 참여 안내' },
  'participate.intro': {
    en: 'K-ARC is conducting research to understand the genetic basis of autism. Your participation helps advance scientific understanding and supports future generations.',
    ko: 'K-ARC는 자폐의 유전적 기반을 이해하기 위한 연구를 수행하고 있습니다. 여러분의 참여가 과학적 이해를 발전시키고 미래 세대를 돕습니다.',
  },
  'participate.who': { en: 'Who Can Participate?', ko: '누가 참여할 수 있나요?' },
  'participate.who.desc': {
    en: 'Families with autistic individuals are invited to participate. Participation includes clinical assessments and optional genomic analysis. All data is handled with strict confidentiality.',
    ko: '자폐인이 있는 가족분들의 참여를 환영합니다. 임상 평가와 선택적 유전체 분석이 포함되며, 모든 데이터는 철저한 비밀 보장 하에 관리됩니다.',
  },
  'participate.process': { en: 'Participation Process', ko: '참여 절차' },
  'participate.step1': { en: 'Initial Consultation', ko: '초기 상담' },
  'participate.step1.desc': {
    en: 'Contact one of our participating institutions to schedule an initial consultation.',
    ko: '참여 기관에 연락하여 초기 상담을 예약합니다.',
  },
  'participate.step2': { en: 'Clinical Assessment', ko: '임상 평가' },
  'participate.step2.desc': {
    en: 'Comprehensive developmental and behavioral assessments by experienced clinicians.',
    ko: '경험 많은 임상의의 종합적인 발달 및 행동 평가를 받습니다.',
  },
  'participate.step3': { en: 'Genomic Analysis', ko: '유전체 분석' },
  'participate.step3.desc': {
    en: 'Optional whole-genome sequencing to understand genetic factors (with informed consent).',
    ko: '유전적 요인을 이해하기 위한 전장유전체 시퀀싱을 선택할 수 있습니다(동의 하에 진행).',
  },
  'participate.step4': { en: 'Follow-up', ko: '추적 관찰' },
  'participate.step4.desc': {
    en: 'Ongoing longitudinal follow-up to track developmental changes over time.',
    ko: '시간에 따른 발달 변화를 추적하는 종단 추적 관찰을 진행합니다.',
  },
  'participate.institutions': { en: 'Participating Institutions', ko: '참여 가능 기관' },
  'participate.contact': { en: 'Contact for Participation', ko: '참여 문의' },

  // Support
  'support.title': { en: 'Support Our Research', ko: '연구 후원 안내' },
  'support.intro': {
    en: 'K-ARC has been made possible by government R&D funding. With your support, we can go further — pursuing more diverse research that makes a real difference for autistic individuals and their families.',
    ko: 'K-ARC는 정부 R&D 연구비 지원으로 지금까지 연구를 이어올 수 있었습니다. 여러분의 후원이 더해진다면, 자폐인과 가족에게 실질적 도움이 되는 더 다양한 연구를 수행할 수 있습니다.',
  },
  'support.current': { en: 'Our Story', ko: '지금까지의 여정' },
  'support.why': { en: 'Why Support Autism Research?', ko: '왜 자폐 연구를 후원해야 할까요?' },
  'support.how': { en: 'How to Donate', ko: '기부 방법' },
  'support.impact': { en: 'Research So Far', ko: '지금까지의 연구' },

  // Auth
  'auth.login': { en: 'Login', ko: '로그인' },
  'auth.signup': { en: 'Sign Up', ko: '회원가입' },
  'auth.loginDesc': {
    en: 'Sign in to access the K-ARC internal dashboard',
    ko: 'K-ARC 내부 대시보드에 접근하려면 로그인하세요',
  },
  'auth.signupDesc': {
    en: 'Create a K-ARC researcher account',
    ko: 'K-ARC 연구자 계정을 생성하세요',
  },
  'auth.password': { en: 'Password', ko: '비밀번호' },
  'auth.confirmPassword': { en: 'Confirm Password', ko: '비밀번호 확인' },
  'auth.fullName': { en: 'Full Name', ko: '이름' },
  'auth.noAccount': { en: "Don't have an account?", ko: '계정이 없으신가요?' },
  'auth.hasAccount': { en: 'Already have an account?', ko: '이미 계정이 있으신가요?' },

  // Footer
  'footer.desc': {
    en: 'A multi-institutional research consortium for understanding the genetic architecture of autism.',
    ko: '자폐의 유전적 구조를 이해하기 위한 다기관 공동연구 컨소시엄',
  },
  'footer.links': { en: 'Links', ko: '바로가기' },
  'footer.contact': { en: 'Contact', ko: '연락처' },
  'footer.address1': {
    en: 'Seoul National University Bundang Hospital',
    ko: '분당서울대학병원',
  },
  'footer.address2': {
    en: '82, Gumi-ro 173beon-gil, Bundang-gu, Seongnam-si',
    ko: '경기도 성남시 분당구 구미로173번길 82',
  },
}

export default translations
