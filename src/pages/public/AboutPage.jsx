import { useLang } from '../../contexts/LangContext'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import iconCollaboration from '../../assets/icons/icon-collaboration.png'
import iconAiBrain from '../../assets/icons/icon-ai-brain.png'
import iconClinicalBrain from '../../assets/icons/icon-clinical-brain.png'
import iconMolecular from '../../assets/icons/icon-molecular.png'
import iconGlobalNetwork from '../../assets/icons/icon-global-network.png'
import iconClinicalCheckup from '../../assets/icons/icon-clinical-checkup.png'
import iconTranslational from '../../assets/icons/icon-translational.png'

const members = [
  // Omics & AI
  { name: 'Min-Sik Kim', name_ko: '김민식', institution: 'DGIST', institution_ko: 'DGIST', area: 'OmicsAI' },
  { name: 'Jun Kim', name_ko: '김준', institution: 'CNU', institution_ko: '충남대학교', area: 'OmicsAI' },
  { name: 'Hong-Hee Won', name_ko: '원홍희', institution: 'Sungkyunkwan Univ.', institution_ko: '성균관대학교', area: 'OmicsAI' },
  { name: 'Jeong-Ho Lee', name_ko: '이정호', institution: 'KAIST', institution_ko: 'KAIST', area: 'OmicsAI' },
  { name: 'Jun-Hak Lee', name_ko: '이준학', institution: 'KISTI', institution_ko: 'KISTI', area: 'OmicsAI' },
  { name: 'Jung-Kyoon Choi', name_ko: '최정균', institution: 'KAIST', institution_ko: 'KAIST', area: 'OmicsAI' },
  { name: 'Sang-Hyuk Lee', name_ko: '이상혁', institution: 'Ewha Womans Univ.', institution_ko: '이화여자대학교', area: 'OmicsAI' },
  { name: 'Minji Jeon', name_ko: '전민지', institution: 'Korea Univ.', institution_ko: '고려대학교', area: 'OmicsAI' },
  // Clinical & Behavioural
  { name: 'So Hyun Kim', name_ko: '김소현', institution: 'Korea Univ.', institution_ko: '고려대학교', area: 'Clinical' },
  { name: 'Ilbin Kim', name_ko: '김일빈', institution: 'Gangnam CHA Hospital', institution_ko: '강남차병원', area: 'Clinical' },
  { name: 'Miae Oh', name_ko: '오미애', institution: 'Kyunghee Univ.', institution_ko: '경희대학교', area: 'Clinical' },
  // Molecular & Translational
  { name: 'Eunha Kim', name_ko: '김은하', institution: 'Korea Univ.', institution_ko: '고려대학교', area: 'Molecular' },
  { name: 'Jaesang Kim', name_ko: '김재상', institution: 'Ewha Womans Univ.', institution_ko: '이화여자대학교', area: 'Molecular' },
  { name: 'Woong Sun', name_ko: '선웅', institution: 'Korea Univ.', institution_ko: '고려대학교', area: 'Molecular' },
  { name: 'Chan-Young Shin', name_ko: '신찬영', institution: 'Konkuk Univ.', institution_ko: '건국대학교', area: 'Molecular' },
  { name: 'Daekee Lee', name_ko: '이대기', institution: 'Ewha Womans Univ.', institution_ko: '이화여자대학교', area: 'Molecular' },
  { name: 'Seungbok Lee', name_ko: '이승복', institution: 'Seoul National Univ.', institution_ko: '서울대학교', area: 'Molecular' },
  { name: 'Suk-Ho Lee', name_ko: '이석호', institution: 'Seoul National Univ.', institution_ko: '서울대학교', area: 'Molecular' },
  { name: 'Yong-Seok Lee', name_ko: '이용석', institution: 'Seoul National Univ.', institution_ko: '서울대학교', area: 'Molecular' },
  { name: 'Ji-Yeon Lee', name_ko: '이지연', institution: 'Seoul National Univ.', institution_ko: '서울대학교', area: 'Molecular' },
  { name: 'Sung-Oh Huh', name_ko: '허성오', institution: 'Hallym Univ.', institution_ko: '한림대학교', area: 'Molecular' },
  { name: 'Sejin Jeon', name_ko: '전세진', institution: 'Hallym Univ.', institution_ko: '한림대학교', area: 'Molecular' },
  // International
  { name: 'Donna Werling', institution: 'UW Madison', area: 'International' },
  { name: 'Stephan Sanders', institution: 'Univ. of Oxford', area: 'International' },
  { name: 'Stephen Scherer', institution: 'Univ. of Toronto / SickKids Hospital', area: 'International' },
  { name: 'Brett Trost', institution: 'Univ. of Toronto / SickKids Hospital', area: 'International' },
  { name: 'Anders Børglum', institution: 'Aarhus Univ.', area: 'International' },
  { name: 'Jakob Grove', institution: 'Aarhus Univ.', area: 'International' },
]

const areaLabels = {
  OmicsAI: { en: 'Omics & AI Working Group', ko: '오믹스 & AI 워킹그룹', icon: iconAiBrain },
  Clinical: { en: 'Clinical & Behavioural Working Group', ko: '임상 & 행동 워킹그룹', icon: iconClinicalBrain },
  Molecular: { en: 'Molecular & Translational Working Group', ko: '분자 & 중개연구 워킹그룹', icon: iconMolecular },
  International: { en: 'International Collaborators', ko: '국제 협력', icon: iconGlobalNetwork },
}

export default function AboutPage() {
  const { t, lang } = useLang()

  const pipelineSteps = [
    { step: '01', icon: iconClinicalCheckup, title: t('about.pipeline.step1'), description: t('about.pipeline.step1.desc'), color: 'bg-blue-500' },
    { step: '02', icon: iconMolecular, title: t('about.pipeline.step2'), description: t('about.pipeline.step2.desc'), color: 'bg-indigo-500' },
    { step: '03', icon: iconTranslational, title: t('about.pipeline.step3'), description: t('about.pipeline.step3.desc'), color: 'bg-violet-500' },
    { step: '04', icon: iconGlobalNetwork, title: t('about.pipeline.step4'), description: t('about.pipeline.step4.desc'), color: 'bg-purple-500' },
  ]

  const areas = ['OmicsAI', 'Clinical', 'Molecular', 'International']

  const leaders = [
    { role: t('about.director'), name: t('about.director.name'), affiliation: t('about.director.affiliation'), desc: t('about.director.desc') },
    { role: t('about.coleadGenomics'), name: t('about.coleadGenomics.name'), affiliation: t('about.coleadGenomics.affiliation'), desc: t('about.coleadGenomics.desc') },
    { role: t('about.coleadFunctional'), name: t('about.coleadFunctional.name'), affiliation: t('about.coleadFunctional.affiliation'), desc: t('about.coleadFunctional.desc') },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4 flex items-start gap-6">
          <img src={iconCollaboration} alt="" className="hidden sm:block h-20 w-20 object-contain flex-shrink-0 mt-1" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900">{t('about.title')}</h1>
            <p className="mt-4 max-w-3xl text-xl text-slate-600 leading-relaxed">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('about.leadership')}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <Card key={leader.name} className="py-0">
                <CardHeader className="pb-0 pt-6">
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">{leader.role}</p>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-base">{leader.affiliation}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-base text-slate-600">{leader.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consortium Members */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('about.institutions')}</h2>
          {areas.map((area) => (
            <div key={area} className="mt-6">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {areaLabels[area][lang]}
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {members
                  .filter((m) => m.area === area)
                  .map((m) => (
                    <Card key={m.name} className="py-0">
                      <CardContent className="px-4 py-3">
                        <p className="text-base font-medium text-slate-700">
                          {lang === 'ko' && m.name_ko ? m.name_ko : m.name}
                        </p>
                        <p className="text-sm text-slate-500">{lang === 'ko' && m.institution_ko ? m.institution_ko : m.institution}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Pipeline */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('about.pipeline')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pipelineSteps.map((step) => (
              <Card key={step.step} className="py-0 text-center border-none shadow-none">
                <CardContent className="p-6">
                  <div className="relative mx-auto h-16 w-16">
                    <img src={step.icon} alt="" className="h-16 w-16 object-contain" />
                    <span className={`absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold ${step.color}`}>
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-base text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
