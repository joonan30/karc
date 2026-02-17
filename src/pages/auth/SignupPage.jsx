import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'

export default function SignupPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [institution, setInstitution] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const { lang } = useLang()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError(lang === 'ko' ? '비밀번호가 일치하지 않습니다' : 'Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError(lang === 'ko' ? '비밀번호는 6자 이상이어야 합니다' : 'Password must be at least 6 characters')
      return
    }

    setLoading(true)
    const { error: authError } = await signup(email, password, fullName, institution)
    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      navigate('/pending', { replace: true })
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 text-center">
            {lang === 'ko' ? '연구자 계정 생성' : 'Researcher Account'}
          </h1>
          <p className="mt-2 text-sm text-slate-500 text-center">
            {lang === 'ko'
              ? 'K-ARC 공동연구자를 위한 내부 플랫폼입니다'
              : 'Internal platform for K-ARC collaborators'}
          </p>

          <div className="mt-4 rounded-md bg-blue-50 p-3">
            <p className="text-sm text-blue-700">
              {lang === 'ko'
                ? '소속 기관 이메일(@ac.kr, @edu 등)을 사용해 주세요. 가입 후 관리자 승인이 필요합니다.'
                : 'Please use your institutional email (@ac.kr, @edu, etc.). Admin approval is required after registration.'}
            </p>
          </div>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                {lang === 'ko' ? '이름' : 'Full Name'}
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder={lang === 'ko' ? '홍길동' : 'Full Name'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                {lang === 'ko' ? '소속 기관' : 'Institution'}
              </label>
              <input
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder={lang === 'ko' ? '고려대학교' : 'Korea University'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                {lang === 'ko' ? '기관 이메일' : 'Institutional Email'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder="name@university.ac.kr"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                {lang === 'ko' ? '비밀번호' : 'Password'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                {lang === 'ko' ? '비밀번호 확인' : 'Confirm Password'}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 disabled:opacity-50 transition-colors"
            >
              {loading
                ? (lang === 'ko' ? '생성 중...' : 'Creating account...')
                : (lang === 'ko' ? '계정 생성' : 'Create Account')}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-500">
            {lang === 'ko' ? '이미 계정이 있으신가요?' : 'Already have an account?'}{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">
              {lang === 'ko' ? '로그인' : 'Login'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
