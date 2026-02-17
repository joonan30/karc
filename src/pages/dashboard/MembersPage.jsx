import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'

const roleBadge = {
  admin: 'bg-red-100 text-red-700',
  researcher: 'bg-blue-100 text-blue-700',
  viewer: 'bg-gray-100 text-gray-600',
}

const roleOptions = ['admin', 'researcher', 'viewer']

export default function MembersPage() {
  const { role } = useAuth()
  const { lang } = useLang()
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  const isAdmin = role === 'admin'

  useEffect(() => {
    fetchMembers()
  }, [])

  async function fetchMembers() {
    const { data } = await supabase
      .from('profiles')
      .select('id, full_name, role, approved, created_at, institution')
      .order('created_at', { ascending: false })
    setMembers(data || [])
    setLoading(false)
  }

  async function toggleApproval(member) {
    const newApproved = !member.approved
    await supabase
      .from('profiles')
      .update({
        approved: newApproved,
        approved_at: newApproved ? new Date().toISOString() : null,
      })
      .eq('id', member.id)
    fetchMembers()
  }

  async function changeRole(memberId, newRole) {
    await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', memberId)
    fetchMembers()
  }

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    )
  }

  const pendingMembers = members.filter((m) => !m.approved)
  const approvedMembers = members.filter((m) => m.approved)

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'ko' ? '회원 관리' : 'Members'}
        </h1>
        <p className="mt-1 text-base text-slate-500">
          {lang === 'ko'
            ? `총 ${members.length}명 (승인 대기 ${pendingMembers.length}명)`
            : `${members.length} total (${pendingMembers.length} pending)`}
        </p>

        {/* Pending approvals */}
        {pendingMembers.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-yellow-700">
              {lang === 'ko' ? '승인 대기' : 'Pending Approval'}
            </h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-yellow-200 bg-yellow-50">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-yellow-200 text-left text-sm text-slate-600">
                    <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '이름' : 'Name'}</th>
                    <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '소속' : 'Institution'}</th>
                    <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '가입일' : 'Joined'}</th>
                    {isAdmin && <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '관리' : 'Action'}</th>}
                  </tr>
                </thead>
                <tbody>
                  {pendingMembers.map((m) => (
                    <tr key={m.id} className="border-b border-yellow-100">
                      <td className="py-3 px-4 font-medium text-slate-900">{m.full_name || '-'}</td>
                      <td className="py-3 px-4 text-slate-600">{m.institution || '-'}</td>
                      <td className="py-3 px-4 text-sm text-slate-500">
                        {new Date(m.created_at).toLocaleDateString()}
                      </td>
                      {isAdmin && (
                        <td className="py-3 px-4">
                          <button
                            onClick={() => toggleApproval(m)}
                            className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                          >
                            {lang === 'ko' ? '승인' : 'Approve'}
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Approved members */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">
            {lang === 'ko' ? '승인된 회원' : 'Approved Members'}
          </h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-left text-sm text-slate-600">
                  <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '이름' : 'Name'}</th>
                  <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '소속' : 'Institution'}</th>
                  <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '등급' : 'Role'}</th>
                  <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '가입일' : 'Joined'}</th>
                  {isAdmin && <th className="py-3 px-4 font-semibold">{lang === 'ko' ? '관리' : 'Actions'}</th>}
                </tr>
              </thead>
              <tbody>
                {approvedMembers.map((m) => (
                  <tr key={m.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-slate-900">{m.full_name || '-'}</td>
                    <td className="py-3 px-4 text-slate-600">{m.institution || '-'}</td>
                    <td className="py-3 px-4">
                      {isAdmin ? (
                        <select
                          value={m.role}
                          onChange={(e) => changeRole(m.id, e.target.value)}
                          className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                        >
                          {roleOptions.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${roleBadge[m.role] || roleBadge.viewer}`}>
                          {m.role}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-500">
                      {new Date(m.created_at).toLocaleDateString()}
                    </td>
                    {isAdmin && (
                      <td className="py-3 px-4">
                        <button
                          onClick={() => toggleApproval(m)}
                          className="text-sm text-red-600 hover:text-red-700 font-medium"
                        >
                          {lang === 'ko' ? '승인 취소' : 'Revoke'}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
