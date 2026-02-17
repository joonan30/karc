import { useState } from 'react'
import VariantTable from '../../components/dashboard/VariantTable'

export default function VariantsPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Variants Database</h1>
            <p className="mt-1 text-sm text-slate-500">
              ASD 관련 유전 변이 데이터베이스
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search gene or variant..."
              className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
            />
            <select className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
              <option value="">All Types</option>
              <option value="missense">Missense</option>
              <option value="nonsense">Nonsense</option>
              <option value="frameshift">Frameshift</option>
            </select>
            <select className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
              <option value="">All Significance</option>
              <option value="pathogenic">Pathogenic</option>
              <option value="likely_pathogenic">Likely Pathogenic</option>
              <option value="vus">VUS</option>
            </select>
          </div>
        </div>

        <VariantTable />

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <p>Showing 8 of 12,847 variants</p>
          <div className="flex gap-2">
            <button className="rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
