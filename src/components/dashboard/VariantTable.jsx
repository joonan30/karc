import { useLang } from '../../contexts/LangContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

const significanceBadge = {
  pathogenic: 'bg-red-100 text-red-700',
  likely_pathogenic: 'bg-orange-100 text-orange-700',
  vus: 'bg-yellow-100 text-yellow-700',
  benign: 'bg-green-100 text-green-700',
}

const significanceLabel = {
  pathogenic: 'Pathogenic',
  likely_pathogenic: 'Likely Pathogenic',
  vus: 'VUS',
  benign: 'Benign',
}

export default function VariantTable({ variants, canEdit, onEdit, onDelete }) {
  const { t } = useLang()

  return (
    <div className="rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="px-4 py-3">{t('variants.gene')}</TableHead>
            <TableHead className="px-4 py-3">{t('variants.variant')}</TableHead>
            <TableHead className="px-4 py-3">{t('variants.type')}</TableHead>
            <TableHead className="px-4 py-3">{t('variants.significance')}</TableHead>
            <TableHead className="px-4 py-3">{t('variants.families')}</TableHead>
            <TableHead className="px-4 py-3">{t('variants.inheritance')}</TableHead>
            {canEdit && (
              <TableHead className="px-4 py-3">{t('variants.actions')}</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {variants.map((v) => (
            <TableRow key={v.id}>
              <TableCell className="px-4 py-3 font-medium text-primary-600">{v.gene}</TableCell>
              <TableCell className="px-4 py-3 text-slate-700 font-mono">{v.variant}</TableCell>
              <TableCell className="px-4 py-3 text-slate-600">{v.type}</TableCell>
              <TableCell className="px-4 py-3">
                <Badge variant="secondary" className={significanceBadge[v.significance] || 'bg-gray-100 text-gray-700'}>
                  {significanceLabel[v.significance] || v.significance}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-3 text-slate-600">{v.families}</TableCell>
              <TableCell className="px-4 py-3 text-slate-600">{v.inheritance || '-'}</TableCell>
              {canEdit && (
                <TableCell className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => onEdit(v)} className="text-primary-600 hover:text-primary-700">
                      {t('variants.edit')}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onDelete(v)} className="text-red-600 hover:text-red-700">
                      {t('variants.delete')}
                    </Button>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
