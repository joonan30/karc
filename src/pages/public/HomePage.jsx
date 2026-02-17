import Hero from '../../components/public/Hero'
import ResearchCard from '../../components/public/ResearchCard'
import { useLang } from '../../contexts/LangContext'

const stats = [
  { key: 'families', value: '1,328' },
  { key: 'participants', value: '4,453' },
  { key: 'wgs', value: '3,835' },
  { key: 'lrwgs', value: '123' },
]

export default function HomePage() {
  const { t, lang } = useLang()

  const researchAreas = [
    { icon: '\u{1F9EC}', title: t('home.genomics.title'), description: t('home.genomics.desc') },
    { icon: '\u{1FA7A}', title: t('home.clinical.title'), description: t('home.clinical.desc') },
    { icon: '\u{1F52C}', title: t('home.functional.title'), description: t('home.functional.desc') },
    { icon: '\u{1F310}', title: t('home.collaboration.title'), description: t('home.collaboration.desc') },
  ]

  const recentUpdates = lang === 'ko'
    ? [
        { date: '2026.02', title: 'K-ARC 컨소시엄 플랫폼 런칭', description: '연구 데이터 공유 및 협업을 위한 통합 플랫폼을 공개합니다.' },
        { date: '2025.12', title: '생명연구자원 성과교류회 발표', description: '제4회 생명연구자원 성과교류회에서 K-ARC 연구 성과를 발표했습니다.' },
        { date: '2025.06', title: 'Genome Medicine 논문 게재', description: 'Kim et al. (2025) 가족 표현형 편차를 활용한 자폐 de novo 변이 영향 평가 연구가 게재되었습니다.' },
      ]
    : [
        { date: 'Feb 2026', title: 'K-ARC Consortium Platform Launch', description: 'Launching an integrated platform for research data sharing and collaboration.' },
        { date: 'Dec 2025', title: 'Presentation at Bioresource Conference', description: 'K-ARC research achievements presented at the 4th National Bioresource Conference.' },
        { date: 'Jun 2025', title: 'Publication in Genome Medicine', description: 'Kim et al. (2025) published on evaluating familial phenotype deviation to measure de novo mutation impact in autism.' },
      ]

  return (
    <div>
      <Hero />

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">{t('home.stats.title')}</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.key} className="rounded-lg bg-primary-50 p-6 text-center">
                <p className="text-3xl font-bold text-primary-700">{s.value}</p>
                <p className="mt-1 text-base font-medium text-slate-600">{t(`home.stats.${s.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">{t('home.researchAreas')}</h2>
            <p className="mt-2 text-lg text-slate-600">{t('home.researchAreasDesc')}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <ResearchCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">{t('home.updates')}</h2>
          <div className="mt-8 space-y-6">
            {recentUpdates.map((update) => (
              <div key={update.title} className="rounded-lg border border-gray-200 bg-white p-6">
                <span className="text-base font-medium text-primary-600">{update.date}</span>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{update.title}</h3>
                <p className="mt-1 text-base text-slate-600">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
