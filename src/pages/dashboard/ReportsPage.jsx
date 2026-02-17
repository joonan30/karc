const placeholderReports = [
  {
    id: 1,
    title: 'WGS Batch #47 분석 리포트',
    author: 'Dr. Kim',
    date: '2026-02-15',
    status: 'Published',
    type: 'WGS Analysis',
  },
  {
    id: 2,
    title: 'CHD8 변이 가족 임상 요약',
    author: 'Dr. Park',
    date: '2026-02-10',
    status: 'Published',
    type: 'Clinical Summary',
  },
  {
    id: 3,
    title: 'De novo 변이 통계 분석 (2025 Q4)',
    author: 'Dr. Lee',
    date: '2026-02-01',
    status: 'Draft',
    type: 'Statistical Analysis',
  },
  {
    id: 4,
    title: 'SHANK3 기능실험 예비결과',
    author: 'Dr. Choi',
    date: '2026-01-28',
    status: 'In Review',
    type: 'Functional Study',
  },
  {
    id: 5,
    title: 'WES Batch #23 변이 필터링 결과',
    author: 'Dr. Jung',
    date: '2026-01-20',
    status: 'Published',
    type: 'WES Analysis',
  },
]

const statusBadge = {
  Published: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-100 text-gray-700',
  'In Review': 'bg-yellow-100 text-yellow-700',
}

export default function ReportsPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
          <p className="mt-1 text-sm text-slate-500">
            분석 리포트 및 연구 결과 열람
          </p>
        </div>

        <div className="space-y-4">
          {placeholderReports.map((report) => (
            <div
              key={report.id}
              className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{report.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{report.author}</span>
                    <span>&middot;</span>
                    <span>{report.date}</span>
                    <span>&middot;</span>
                    <span>{report.type}</span>
                  </div>
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge[report.status]}`}
                >
                  {report.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
