const stats = [
  { label: 'Total Variants', value: '12,847', change: '+234 this month' },
  { label: 'Researchers', value: '48', change: '+3 this month' },
  { label: 'Reports', value: '156', change: '+12 this month' },
  { label: 'Families', value: '523', change: '+18 this month' },
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-gray-200 bg-white p-6"
        >
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">{stat.value}</p>
          <p className="mt-1 text-xs text-green-600">{stat.change}</p>
        </div>
      ))}
    </div>
  )
}
