import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useLang } from '../../contexts/LangContext'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

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
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {lang === 'ko' ? '연구자 계정 생성' : 'Researcher Account'}
            </CardTitle>
            <CardDescription>
              {lang === 'ko'
                ? 'K-ARC 공동연구자를 위한 내부 플랫폼입니다'
                : 'Internal platform for K-ARC collaborators'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md bg-blue-50 p-3 mb-4">
              <p className="text-sm text-blue-700">
                {lang === 'ko'
                  ? '소속 기관 이메일(@ac.kr, @edu 등)을 사용해 주세요. 가입 후 관리자 승인이 필요합니다.'
                  : 'Please use your institutional email (@ac.kr, @edu, etc.). Admin approval is required after registration.'}
              </p>
            </div>

            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>{lang === 'ko' ? '이름' : 'Full Name'}</Label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder={lang === 'ko' ? '홍길동' : 'Full Name'}
                />
              </div>
              <div className="space-y-2">
                <Label>{lang === 'ko' ? '소속 기관' : 'Institution'}</Label>
                <Input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  required
                  placeholder={lang === 'ko' ? '고려대학교' : 'Korea University'}
                />
              </div>
              <div className="space-y-2">
                <Label>{lang === 'ko' ? '기관 이메일' : 'Institutional Email'}</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@university.ac.kr"
                />
              </div>
              <div className="space-y-2">
                <Label>{lang === 'ko' ? '비밀번호' : 'Password'}</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-2">
                <Label>{lang === 'ko' ? '비밀번호 확인' : 'Confirm Password'}</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading
                  ? (lang === 'ko' ? '생성 중...' : 'Creating account...')
                  : (lang === 'ko' ? '계정 생성' : 'Create Account')}
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-500">
              {lang === 'ko' ? '이미 계정이 있으신가요?' : 'Already have an account?'}{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">
                {lang === 'ko' ? '로그인' : 'Login'}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
