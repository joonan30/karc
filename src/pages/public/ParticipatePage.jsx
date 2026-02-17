import { useLang } from '../../contexts/LangContext'
import iconSupport from '../../assets/icons/icon-support.png'

const institutions = [
  {
    name_en: 'Seoul National University Bundang Hospital',
    name_ko: '분당서울대학병원',
    dept_en: 'Department of Psychiatry',
    dept_ko: '정신건강의학과',
    address_en: '82, Gumi-ro 173beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do',
    address_ko: '경기도 성남시 분당구 구미로173번길 82',
    phone: '031-787-7436',
    contact_en: 'Prof. Heejeong Yoo',
    contact_ko: '유희정 교수',
  },
  {
    name_en: 'Kyung Hee University Hospital',
    name_ko: '경희대학교 병원',
    dept_en: 'Department of Psychiatry',
    dept_ko: '정신건강의학과',
    address_en: '23, Kyungheedae-ro, Dongdaemun-gu, Seoul',
    address_ko: '서울시 동대문구 경희대로 23',
    phone: '02-958-8542',
    contact_en: 'Prof. Miae Oh',
    contact_ko: '오미애 교수',
  },
]

export default function ParticipatePage() {
  const { t, lang } = useLang()

  const steps = [
    { num: '01', title: t('participate.step1'), desc: t('participate.step1.desc') },
    { num: '02', title: t('participate.step2'), desc: t('participate.step2.desc') },
    { num: '03', title: t('participate.step3'), desc: t('participate.step3.desc') },
    { num: '04', title: t('participate.step4'), desc: t('participate.step4.desc') },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4 flex items-start gap-6">
          <img src={iconSupport} alt="" className="hidden sm:block h-20 w-20 object-contain flex-shrink-0 mt-1" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900">{t('participate.title')}</h1>
            <p className="mt-4 max-w-3xl text-xl text-slate-600 leading-relaxed">
              {t('participate.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Who can participate */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('participate.who')}</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
            {t('participate.who.desc')}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('participate.process')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white font-bold text-lg">
                  {step.num}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-base text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Institutions */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">{t('participate.institutions')}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {institutions.map((inst) => (
              <div key={inst.name_en} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {lang === 'ko' ? inst.name_ko : inst.name_en}
                </h3>
                <p className="mt-1 text-base text-primary-600">
                  {lang === 'ko' ? inst.dept_ko : inst.dept_en}
                </p>
                <div className="mt-4 space-y-2 text-base text-slate-600">
                  <p>{lang === 'ko' ? inst.address_ko : inst.address_en}</p>
                  <p>
                    <span className="font-medium text-slate-700">
                      {lang === 'ko' ? '담당' : 'Contact'}:
                    </span>{' '}
                    {lang === 'ko' ? inst.contact_ko : inst.contact_en}
                  </p>
                  <p>
                    <span className="font-medium text-slate-700">Tel:</span> {inst.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
