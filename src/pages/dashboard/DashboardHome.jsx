import { useAuth } from '../../contexts/AuthContext'
import StatsOverview from '../../components/dashboard/StatsOverview'

const recentActivity = [
  { action: 'New variant added', detail: 'CHD8 c.2398C>T', time: '2 hours ago' },
  { action: 'Report published', detail: 'WGS Batch #47 Analysis', time: '5 hours ago' },
  { action: 'Researcher joined', detail: 'Dr. Kim (Seoul National University)', time: '1 day ago' },
  { action: 'Data updated', detail: 'Clinical phenotype records for 12 families', time: '2 days ago' },
  { action: 'New variant added', detail: 'SCN2A c.1234G>A', time: '3 days ago' },
]

export default function DashboardHome() {
  const { user, profile } = useAuth()

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Welcome back, {profile?.full_name || user?.email || 'Researcher'}
          </p>
        </div>

        <StatsOverview />

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white divide-y divide-gray-100">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.action}</p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
                <span className="text-xs text-slate-400 whitespace-nowrap ml-4">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
