import { useState } from 'react'
import { supabase, logActivity } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ProfilePage() {
  const { user, profile, refreshProfile } = useAuth()
  const { t } = useLang()

  const [fullName, setFullName] = useState(profile?.full_name || '')
  const [institution, setInstitution] = useState(profile?.institution || '')
  const [expertise, setExpertise] = useState(profile?.expertise || '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    if (!supabase || !user) return
    setSaving(true)
    setSaved(false)

    await supabase
      .from('profiles')
      .update({
        full_name: fullName,
        institution,
        expertise,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)

    await logActivity('profile_updated', `Updated profile: ${fullName}`)
    await refreshProfile()
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-2xl font-bold text-slate-900">{t('profile.title')}</h1>

        <Card className="mt-6 py-0">
          <CardContent className="p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold text-xl">
                {(profile?.full_name || user?.email || '?')[0].toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {profile?.full_name || 'Researcher'}
                </h2>
                <p className="text-sm text-slate-500">{user?.email}</p>
                <Badge variant="secondary" className="mt-1 bg-primary-100 text-primary-700">
                  {profile?.role || 'researcher'}
                </Badge>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{t('profile.fullName')}</Label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>{t('profile.email')}</Label>
                <Input
                  type="email"
                  defaultValue={user?.email || ''}
                  disabled
                  className="bg-gray-50 text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>{t('profile.institution')}</Label>
                <Input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="소속 기관"
                />
              </div>
              <div className="space-y-2">
                <Label>{t('profile.expertise')}</Label>
                <Input
                  type="text"
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                  placeholder="전문 분야"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? t('profile.saving') : t('profile.save')}
              </Button>
              {saved && (
                <span className="text-sm text-green-600">{t('profile.saved')}</span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
