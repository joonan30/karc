const placeholderVariants = [
  { id: 1, gene: 'CHD8', variant: 'c.2398C>T', type: 'Missense', significance: 'Pathogenic', families: 3 },
  { id: 2, gene: 'SCN2A', variant: 'c.1234G>A', type: 'Nonsense', significance: 'Likely Pathogenic', families: 2 },
  { id: 3, gene: 'SHANK3', variant: 'c.4567del', type: 'Frameshift', significance: 'Pathogenic', families: 5 },
  { id: 4, gene: 'DYRK1A', variant: 'c.890A>G', type: 'Missense', significance: 'VUS', families: 1 },
  { id: 5, gene: 'ADNP', variant: 'c.2345dup', type: 'Frameshift', significance: 'Pathogenic', families: 4 },
  { id: 6, gene: 'SYNGAP1', variant: 'c.3456C>T', type: 'Nonsense', significance: 'Likely Pathogenic', families: 2 },
  { id: 7, gene: 'PTEN', variant: 'c.678G>A', type: 'Missense', significance: 'Pathogenic', families: 3 },
  { id: 8, gene: 'FOXP1', variant: 'c.1011del', type: 'Frameshift', significance: 'VUS', families: 1 },
]

const significanceBadge = {
  Pathogenic: 'bg-red-100 text-red-700',
  'Likely Pathogenic': 'bg-orange-100 text-orange-700',
  VUS: 'bg-yellow-100 text-yellow-700',
}

export default function VariantTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Gene</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Variant</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Significance</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Families</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {placeholderVariants.map((v) => (
            <tr key={v.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-primary-600">{v.gene}</td>
              <td className="px-4 py-3 text-sm text-slate-700 font-mono">{v.variant}</td>
              <td className="px-4 py-3 text-sm text-slate-600">{v.type}</td>
              <td className="px-4 py-3">
                <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${significanceBadge[v.significance]}`}>
                  {v.significance}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-slate-600">{v.families}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
