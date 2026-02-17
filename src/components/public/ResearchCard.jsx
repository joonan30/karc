export default function ResearchCard({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
