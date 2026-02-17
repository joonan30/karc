import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'

export default function PendingApprovalPage() {
  const { logout, user } = useAuth()
  const { lang } = useLang()

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center py-12">
      <div className="w-full max-w-md px-4 text-center">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
            <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            {lang === 'ko' ? '승인 대기 중' : 'Pending Approval'}
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {lang === 'ko'
              ? '가입이 완료되었습니다. 관리자의 승인 후 대시보드에 접근할 수 있습니다. 승인이 완료되면 이메일로 안내드리겠습니다.'
              : 'Your account has been created. You will be able to access the dashboard once an administrator approves your account.'}
          </p>
          <p className="mt-2 text-sm text-slate-400">{user?.email}</p>
          <button
            onClick={logout}
            className="mt-6 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors"
          >
            {lang === 'ko' ? '로그아웃' : 'Logout'}
          </button>
        </div>
      </div>
    </div>
  )
}
