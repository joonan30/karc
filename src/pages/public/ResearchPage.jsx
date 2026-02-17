import { useLang } from '../../contexts/LangContext'
import { useState } from 'react'

const publications = [
  {
    id: 'kim2025gm',
    authors: 'Kim SW, Lee H, Song DY, Lee GH, ... Yoo HJ*, An JY*',
    title: 'Evaluation of familial phenotype deviation to measure the impact of de novo mutations in autism',
    journal: 'Genome Medicine',
    year: 2025,
    doi: '10.1186/s13073-025-01532-7',
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
    summary_en: 'By analyzing whole-genome sequencing data from 696 Korean autistic individuals and their families, this study found that genetic factors contribute differently depending on sex. De novo (newly arising) variants were 4.3 times more common in autistic individuals compared to their non-autistic siblings, and common genetic risk (polygenic scores) showed distinct patterns between mothers and fathers. These findings highlight the importance of considering family context and sex when understanding autism genetics.',
    summary_ko: '696명의 한국인 자폐인과 가족의 전장유전체 시퀀싱 데이터를 분석한 결과, 유전적 요인이 성별에 따라 다르게 작용한다는 것을 발견했습니다. 신생변이(새로 발생한 변이)는 자폐인에서 비자폐 형제 대비 4.3배 높았으며, 공통 유전적 위험도(다유전자 점수)는 어머니와 아버지에서 서로 다른 패턴을 보였습니다. 이는 자폐의 유전적 이해에 있어 가족 맥락과 성별 고려의 중요성을 보여줍니다.',
  },
  {
    id: 'kim2024pcn',
    authors: 'Kim W, Lee H, ... An JY*',
    title: 'Short tandem repeat expansions in cortical layer-specific genes implicate in phenotypic severity and adaptability of autism spectrum disorder',
    journal: 'Psychiatry and Clinical Neurosciences',
    year: 2024,
    doi: '10.1111/pcn.13735',
    summary_en: 'This research mapped short tandem repeat (STR) sequences — repetitive DNA segments that can expand or contract — across the genomes of Korean autistic individuals. The study found that expansions in genes active in specific layers of the brain cortex are linked to more pronounced autistic traits and differences in adaptive skills. This represents a new class of genetic variation not captured by standard sequencing analyses.',
    summary_ko: '한국인 자폐인의 유전체에서 반복염기서열(STR) — 늘어나거나 줄어들 수 있는 반복 DNA 구간 — 을 전장유전체 수준으로 분석했습니다. 대뇌피질 특정 층에서 활발한 유전자 내 반복서열 확장이 자폐 특성의 정도 및 적응 기능과 연관됨을 발견했습니다. 이는 기존 시퀀싱 분석에서는 포착되지 않던 새로운 유형의 유전적 변이입니다.',
  },
  {
    id: 'kim2024bib',
    authors: 'Kim YJ, Lee H, Koh IG, ... An JY*',
    title: 'CWAS-Plus: Estimating category-wide association of rare noncoding variation from whole-genome sequencing data with cell-type-specific functional data',
    journal: 'Briefings in Bioinformatics',
    year: 2024,
    doi: '10.1093/bib/bbae323',
    summary_en: 'This study introduced CWAS-Plus, a computational tool that systematically tests whether rare noncoding genetic variants — changes in DNA regions that don\'t directly code for proteins — are associated with autism when grouped by their functional context, such as which cell types in the brain they affect. The tool helps researchers move beyond coding regions to understand the broader regulatory genome\'s role in autism.',
    summary_ko: '비암호화 영역(단백질을 직접 만들지 않는 DNA 구간)의 희귀 변이를 뇌의 세포 유형별로 체계적으로 분석할 수 있는 CWAS-Plus 도구를 개발했습니다. 이를 통해 연구자들이 암호화 영역을 넘어 유전체의 조절 영역이 자폐에 미치는 역할을 이해할 수 있게 되었습니다.',
  },
  {
    id: 'kim2022mp',
    authors: 'Kim YJ, Lee H, ... An JY*',
    title: 'Non-coding de novo mutations in chromatin interactions are implicated in autism spectrum disorder',
    journal: 'Molecular Psychiatry',
    year: 2022,
    doi: '10.1038/s41380-022-01697-2',
    summary_en: 'This study demonstrated that newly arising (de novo) mutations in noncoding regions of the genome — areas that regulate when and where genes are turned on — play a significant role in autism. By examining chromatin interaction data from developing brains, the team showed that these regulatory mutations affect how genes communicate with each other during critical periods of brain development.',
    summary_ko: '유전체의 비암호화 영역 — 유전자가 언제, 어디서 활성화되는지 조절하는 부분 — 에서 새로 발생한(de novo) 변이가 자폐에 중요한 역할을 한다는 것을 밝혔습니다. 발달 중인 뇌의 크로마틴 상호작용 데이터를 분석하여, 이러한 조절 변이가 뇌 발달의 핵심 시기에 유전자 간 소통에 영향을 미친다는 것을 보여주었습니다.',
  },
  {
    id: 'an2018science',
    authors: 'An JY, Lin K, Zhu L, ... Sanders SJ*',
    title: 'Genome-wide de novo risk score implicates promoter variation in autism spectrum disorder',
    journal: 'Science',
    year: 2018,
    doi: '10.1126/science.aat6576',
    summary_en: 'This landmark study analyzed whole-genome sequencing data from nearly 2,000 families and found that de novo mutations in gene promoters — the "switches" that control gene activity — are significantly associated with autism. Mutations at evolutionarily conserved transcription factor binding sites within promoters showed the strongest effects. This was one of the first large-scale demonstrations that noncoding regions of the genome contribute meaningfully to autism.',
    summary_ko: '약 2,000개 가족의 전장유전체 시퀀싱 데이터를 분석하여, 유전자 프로모터 — 유전자 활동을 제어하는 "스위치" — 의 신생변이가 자폐와 유의하게 연관됨을 발견한 획기적인 연구입니다. 진화적으로 보존된 전사인자 결합 부위의 변이가 가장 강한 효과를 보였으며, 이는 유전체의 비암호화 영역이 자폐에 의미 있게 기여한다는 것을 대규모로 입증한 첫 연구 중 하나입니다.',
  },
]

export default function ResearchPage() {
  const { t, lang } = useLang()
  const [expandedPub, setExpandedPub] = useState(null)

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold text-slate-900">{t('research.title')}</h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-600 leading-relaxed">
            {t('research.intro')}
          </p>
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
                  { title: 'Noncoding Genome', desc: 'We explore how the noncoding regions — over 98% of the genome — regulate genes and connect to the biological mechanisms underlying autism.' },
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

      {/* Publications by year */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('research.publications')}</h2>

          {years.map((year) => (
            <div key={year} className="mt-8">
              <h3 className="text-lg font-bold text-primary-700 border-b border-gray-200 pb-2">
                {year}
              </h3>
              <div className="mt-4 space-y-4">
                {publications
                  .filter((p) => p.year === year)
                  .map((pub) => (
                    <div key={pub.id} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                      <button
                        onClick={() => setExpandedPub(expandedPub === pub.id ? null : pub.id)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-base font-medium text-slate-900 leading-snug">{pub.title}</h4>
                            <p className="mt-1 text-sm text-slate-500">{pub.authors}</p>
                            <p className="mt-1 text-base">
                              <span className="italic text-slate-500">{pub.journal}</span>
                              <span className="ml-2 text-primary-600 text-sm">DOI: {pub.doi}</span>
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
          ))}
        </div>
      </section>
    </div>
  )
}
