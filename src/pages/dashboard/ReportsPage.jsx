import { useState, useEffect, useRef } from 'react'
import { supabase, logActivity } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const statusBadge = {
  published: 'bg-green-100 text-green-700',
  draft: 'bg-gray-100 text-gray-700',
  in_review: 'bg-yellow-100 text-yellow-700',
}

const typeOptions = ['wgs_analysis', 'wes_analysis', 'clinical_summary', 'statistical', 'functional']
const statusOptions = ['draft', 'in_review', 'published']

const emptyForm = {
  title: '',
  type: 'wgs_analysis',
  status: 'draft',
  summary: '',
}

export default function ReportsPage() {
  const { role } = useAuth()
  const { t, lang } = useLang()
  const fileRef = useRef(null)
  const canEdit = role === 'admin' || role === 'researcher'

  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingReport, setEditingReport] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [file, setFile] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchReports()
  }, [])

  async function fetchReports() {
    if (!supabase) { setLoading(false); return }
    const { data } = await supabase
      .from('reports')
      .select('*, author:profiles(full_name)')
      .order('created_at', { ascending: false })
    setReports(data || [])
    setLoading(false)
  }

  function openAddModal() {
    setEditingReport(null)
    setForm(emptyForm)
    setFile(null)
    setShowModal(true)
  }

  function openEditModal(report) {
    setEditingReport(report)
    setForm({
      title: report.title,
      type: report.type,
      status: report.status,
      summary: report.summary || '',
    })
    setFile(null)
    setShowModal(true)
  }

  async function handleSave() {
    if (!supabase) return
    setSaving(true)

    let file_url = editingReport?.file_url || null
    let file_name = editingReport?.file_name || null

    // Upload file if selected
    if (file) {
      const ext = file.name.split('.').pop()
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('reports')
        .upload(path, file)
      if (!uploadError) {
        const { data: urlData } = supabase.storage.from('reports').getPublicUrl(path)
        file_url = urlData?.publicUrl || path
        file_name = file.name
      }
    }

    const { data: { user } } = await supabase.auth.getUser()

    if (editingReport) {
      await supabase.from('reports').update({
        title: form.title,
        type: form.type,
        status: form.status,
        summary: form.summary,
        file_url,
        file_name,
        updated_at: new Date().toISOString(),
      }).eq('id', editingReport.id)
      await logActivity('report_updated', form.title)
    } else {
      await supabase.from('reports').insert({
        title: form.title,
        type: form.type,
        status: form.status,
        summary: form.summary,
        file_url,
        file_name,
        author_id: user?.id,
      })
      await logActivity('report_added', form.title)
    }

    setSaving(false)
    setShowModal(false)
    fetchReports()
  }

  async function handleDelete(report) {
    if (!confirm(lang === 'ko' ? '이 리포트를 삭제하시겠습니까?' : 'Delete this report?')) return
    await supabase.from('reports').delete().eq('id', report.id)
    await logActivity('report_deleted', report.title)
    fetchReports()
  }

  async function handleDownload(report) {
    if (!report.file_url) return
    // For storage paths, generate signed URL
    const { data } = await supabase.storage
      .from('reports')
      .createSignedUrl(report.file_url.split('/').pop(), 60)
    if (data?.signedUrl) {
      window.open(data.signedUrl, '_blank')
    }
  }

  const typeLabel = {
    wgs_analysis: t('reports.wgsAnalysis'),
    wes_analysis: t('reports.wesAnalysis'),
    clinical_summary: t('reports.clinicalSummary'),
    statistical: t('reports.statistical'),
    functional: t('reports.functional'),
  }

  const statusLabel = {
    published: t('reports.published'),
    draft: t('reports.draft'),
    in_review: t('reports.inReview'),
  }

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{t('reports.title')}</h1>
            <p className="mt-1 text-sm text-slate-500">{t('reports.desc')}</p>
          </div>
          {canEdit && (
            <Button onClick={openAddModal}>
              {t('reports.addReport')}
            </Button>
          )}
        </div>

        {reports.length === 0 ? (
          <p className="text-sm text-slate-500">{t('reports.noReports')}</p>
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id} className="py-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{report.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span>{report.author?.full_name || '-'}</span>
                        <span>&middot;</span>
                        <span>{new Date(report.created_at).toLocaleDateString()}</span>
                        <span>&middot;</span>
                        <span>{typeLabel[report.type] || report.type}</span>
                      </div>
                      {report.summary && (
                        <p className="mt-2 text-sm text-slate-600">{report.summary}</p>
                      )}
                      <div className="mt-3 flex gap-2">
                        {report.file_name && (
                          <Button variant="link" size="sm" onClick={() => handleDownload(report)} className="h-auto p-0 text-primary-600">
                            {t('reports.download')}: {report.file_name}
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge variant="secondary" className={statusBadge[report.status] || 'bg-gray-100 text-gray-700'}>
                        {statusLabel[report.status] || report.status}
                      </Badge>
                      {canEdit && (
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => openEditModal(report)} className="text-primary-600">
                            {t('reports.edit')}
                          </Button>
                          {role === 'admin' && (
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(report)} className="text-red-600">
                              {t('reports.delete')}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Add/Edit Dialog */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingReport ? t('reports.edit') : t('reports.addReport')}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>{t('reports.reportTitle')} *</Label>
                <Input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('reports.type')}</Label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
                    {typeOptions.map((o) => <option key={o} value={o}>{typeLabel[o] || o}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>{t('reports.status')}</Label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none">
                    {statusOptions.map((o) => <option key={o} value={o}>{statusLabel[o] || o}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>{t('reports.summary')}</Label>
                <textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none" />
              </div>
              <div className="space-y-2">
                <Label>{t('reports.file')}</Label>
                <input ref={fileRef} type="file" onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                {t('reports.cancel')}
              </Button>
              <Button onClick={handleSave} disabled={!form.title || saving}>
                {saving ? t('profile.saving') : t('reports.save')}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
