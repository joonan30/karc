const placeholderResearchers = [
  {
    id: 1,
    name: 'Dr. Kim Minsoo',
    institution: '고려대학교 의과대학',
    role: 'Genomics Lead',
    expertise: 'Whole Genome Sequencing, Variant Analysis',
  },
  {
    id: 2,
    name: 'Dr. Park Jiyeon',
    institution: '서울대학교 의과대학',
    role: 'Clinical Lead',
    expertise: 'Neurodevelopmental Disorders, Clinical Phenotyping',
  },
  {
    id: 3,
    name: 'Dr. Lee Sunghwan',
    institution: '연세대학교 의과대학',
    role: 'Bioinformatics',
    expertise: 'Statistical Genetics, Pipeline Development',
  },
  {
    id: 4,
    name: 'Dr. Choi Hyejin',
    institution: '삼성서울병원',
    role: 'Functional Studies',
    expertise: 'iPSC Modeling, CRISPR Screening',
  },
  {
    id: 5,
    name: 'Dr. Jung Wooyoung',
    institution: '서울아산병원',
    role: 'Clinical Researcher',
    expertise: 'Pediatric Psychiatry, ASD Diagnostics',
  },
  {
    id: 6,
    name: 'Dr. Yoon Seongeun',
    institution: '고려대학교 의과대학',
    role: 'Data Science',
    expertise: 'Machine Learning, Multi-omics Integration',
  },
]

export default function ResearchersPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Researchers</h1>
          <p className="mt-1 text-sm text-slate-500">
            K-ARC 공동연구자 네트워크
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderResearchers.map((researcher) => (
            <div
              key={researcher.id}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
                  {researcher.name.split(' ').pop()[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{researcher.name}</h3>
                  <p className="text-xs text-primary-600">{researcher.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-slate-600">{researcher.institution}</p>
                <p className="text-xs text-slate-400">{researcher.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
