export default function ResearchCard({ icon, iconSrc, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50">
        {iconSrc ? (
          <img src={iconSrc} alt="" className="h-10 w-10 object-contain" />
        ) : (
          <span className="text-2xl text-primary-600">{icon}</span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
