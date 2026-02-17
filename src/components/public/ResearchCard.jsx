import { Card, CardContent } from '@/components/ui/card'

export default function ResearchCard({ icon, iconSrc, title, description }) {
  return (
    <Card className="hover:shadow-md transition-shadow py-0">
      <CardContent className="p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50">
          {iconSrc ? (
            <img src={iconSrc} alt="" className="h-10 w-10 object-contain" />
          ) : (
            <span className="text-2xl text-primary-600">{icon}</span>
          )}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-base text-slate-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
