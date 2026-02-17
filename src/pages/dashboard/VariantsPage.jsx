import { useState, useEffect, useRef } from 'react'
import { supabase, logActivity } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import VariantTable from '../../components/dashboard/VariantTable'

const PAGE_SIZE = 20

const typeOptions = ['missense', 'nonsense', 'frameshift', 'splice', 'indel']
const significanceOptions = ['pathogenic', 'likely_pathogenic', 'vus', 'benign']
const inheritanceOptions = ['de_novo', 'inherited', 'unknown']

const emptyForm = {
  gene: '',
  variant: '',
  type: 'missense',
  significance: 'vus',
  families: 0,
  chromosome: '',
  position: '',
  ref_allele: '',
  alt_allele: '',
  transcript: '',
  inheritance: 'unknown',
  notes: '',
}

export default function VariantsPage() {
  const { role } = useAuth()
  const { t, lang } = useLang()
  const fileInputRef = useRef(null)

  const canEdit = role === 'admin' || role === 'researcher'

  const [variants, setVariants] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(0)

  // Filters
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [sigFilter, setSigFilter] = useState('')

  // Modal
  const [showModal, setShowModal] = useState(false)
  const [editingVariant, setEditingVariant] = useState(null)
  const [form, setForm] = useState(emptyForm)

  // CSV
  const [csvResult, setCsvResult] = useState(null)

  useEffect(() => {
    fetchVariants()
  }, [page, search, typeFilter, sigFilter])

  async function fetchVariants() {
    if (!supabase) { setLoading(false); return }
    setLoading(true)

    let query = supabase
      .from('variants')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })

    if (search) {
      query = query.or(`gene.ilike.%${search}%,variant.ilike.%${search}%`)
    }
    if (typeFilter) {
      query = query.eq('type', typeFilter)
    }
    if (sigFilter) {
      query = query.eq('significance', sigFilter)
    }

    const from = page * PAGE_SIZE
    const to = from + PAGE_SIZE - 1
    query = query.range(from, to)

    const { data, count } = await query
    setVariants(data || [])
    setTotalCount(count || 0)
    setLoading(false)
  }

  // Search debounce
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput)
      setPage(0)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchInput])

  function openAddModal() {
    setEditingVariant(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  function openEditModal(v) {
    setEditingVariant(v)
    setForm({
      gene: v.gene,
      variant: v.variant,
      type: v.type,
      significance: v.significance,
      families: v.families || 0,
      chromosome: v.chromosome || '',
      position: v.position || '',
      ref_allele: v.ref_allele || '',
      alt_allele: v.alt_allele || '',
      transcript: v.transcript || '',
      inheritance: v.inheritance || 'unknown',
      notes: v.notes || '',
    })
    setShowModal(true)
  }

  async function handleSave() {
    if (!supabase) return
    const payload = {
      ...form,
      position: form.position ? Number(form.position) : null,
      families: Number(form.families) || 0,
      updated_at: new Date().toISOString(),
    }

    if (editingVariant) {
      await supabase.from('variants').update(payload).eq('id', editingVariant.id)
      await logActivity('variant_updated', `${form.gene} ${form.variant}`)
    } else {
      const { data: { user } } = await supabase.auth.getUser()
      payload.created_by = user?.id
      await supabase.from('variants').insert(payload)
      await logActivity('variant_added', `${form.gene} ${form.variant}`)
    }

    setShowModal(false)
    fetchVariants()
  }

  async function handleDelete(v) {
    if (!confirm(t('variants.confirmDelete'))) return
    await supabase.from('variants').delete().eq('id', v.id)
    await logActivity('variant_deleted', `${v.gene} ${v.variant}`)
    fetchVariants()
  }

  async function handleCsvUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setCsvResult(null)

    const text = await file.text()
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
    if (lines.length < 2) return

    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase())
    const requiredCols = ['gene', 'variant', 'type', 'significance']
    const missing = requiredCols.filter((c) => !headers.includes(c))
    if (missing.length > 0) {
      setCsvResult({ success: 0, fail: 0, error: `Missing columns: ${missing.join(', ')}` })
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }

    const { data: { user } } = await supabase.auth.getUser()
    const rows = []
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map((v) => v.trim())
      const row = {}
      headers.forEach((h, idx) => { row[h] = values[idx] || '' })
      rows.push({
        gene: row.gene,
        variant: row.variant,
        type: row.type,
        significance: row.significance,
        families: Number(row.families) || 0,
        chromosome: row.chromosome || null,
        position: row.position ? Number(row.position) : null,
        ref_allele: row.ref_allele || null,
        alt_allele: row.alt_allele || null,
        transcript: row.transcript || null,
        inheritance: row.inheritance || null,
        notes: row.notes || null,
        created_by: user?.id,
      })
    }

    const { error } = await supabase.from('variants').insert(rows)
    if (error) {
      setCsvResult({ success: 0, fail: rows.length, error: error.message })
    } else {
      setCsvResult({ success: rows.length, fail: 0 })
      await logActivity('variants_csv_uploaded', `${rows.length} variants from ${file.name}`)
    }

    if (fileInputRef.current) fileInputRef.current.value = ''
    fetchVariants()
  }

  const totalPages = Math.ceil(totalCount / PAGE_SIZE)
  const showFrom = page * PAGE_SIZE + 1
  const showTo = Math.min((page + 1) * PAGE_SIZE, totalCount)

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{t('variants.title')}</h1>
            <p className="mt-1 text-sm text-slate-500">{t('variants.desc')}</p>
          </div>
          {canEdit && (
            <div className="flex gap-2">
              <Button onClick={openAddModal}>
                {t('variants.addVariant')}
              </Button>
              <label className="cursor-pointer">
                <Button variant="outline" asChild>
                  <span>
                    {t('variants.uploadCsv')}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".csv"
                      onChange={handleCsvUpload}
                      className="hidden"
                    />
                  </span>
                </Button>
              </label>
            </div>
          )}
        </div>

        {/* CSV result */}
        {csvResult && (
          <div className={`mb-4 rounded-md p-3 text-sm ${csvResult.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {csvResult.error
              ? `${t('variants.uploadFail')}: ${csvResult.error}`
              : `${t('variants.uploadSuccess')}: ${csvResult.success} ${t('variants.rows')}`}
            <button onClick={() => setCsvResult(null)} className="ml-2 font-medium underline">
              &times;
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={t('variants.search')}
            className="w-auto"
          />
          <select
            value={typeFilter}
            onChange={(e) => { setTypeFilter(e.target.value); setPage(0) }}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
          >
            <option value="">{t('variants.allTypes')}</option>
            {typeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <select
            value={sigFilter}
            onChange={(e) => { setSigFilter(e.target.value); setPage(0) }}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
          >
            <option value="">{t('variants.allSignificance')}</option>
            {significanceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex min-h-[30vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
          </div>
        ) : (
          <VariantTable
            variants={variants}
            canEdit={canEdit}
            onEdit={openEditModal}
            onDelete={handleDelete}
          />
        )}

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <p>
            {totalCount > 0
              ? lang === 'ko'
                ? `${showFrom}–${showTo} / ${totalCount.toLocaleString()}개 변이`
                : `Showing ${showFrom}–${showTo} of ${totalCount.toLocaleString()} variants`
              : lang === 'ko' ? '변이 없음' : 'No variants'}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              {t('variants.previous')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => p + 1)}
              disabled={page >= totalPages - 1}
            >
              {t('variants.next')}
            </Button>
          </div>
        </div>

        {/* Add/Edit Dialog */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingVariant ? t('variants.edit') : t('variants.addVariant')}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('variants.gene')} *</Label>
                <Input type="text" value={form.gene} onChange={(e) => setForm({ ...form, gene: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>{t('variants.variant')} *</Label>
                <Input type="text" value={form.variant} onChange={(e) => setForm({ ...form, variant: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>{t('variants.type')} *</Label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
                  {typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label>{t('variants.significance')} *</Label>
                <select value={form.significance} onChange={(e) => setForm({ ...form, significance: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
                  {significanceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label>{t('variants.families')}</Label>
                <Input type="number" value={form.families} onChange={(e) => setForm({ ...form, families: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>{t('variants.chromosome')}</Label>
                <Input type="text" value={form.chromosome} onChange={(e) => setForm({ ...form, chromosome: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>{t('variants.position')}</Label>
                <Input type="number" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>{t('variants.inheritance')}</Label>
                <select value={form.inheritance} onChange={(e) => setForm({ ...form, inheritance: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
                  {inheritanceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="col-span-2 space-y-2">
                <Label>{t('variants.notes')}</Label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={2}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none" />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                {t('variants.cancel')}
              </Button>
              <Button onClick={handleSave} disabled={!form.gene || !form.variant}>
                {t('variants.save')}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
