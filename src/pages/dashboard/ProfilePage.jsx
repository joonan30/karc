import { useAuth } from '../../contexts/AuthContext'

export default function ProfilePage() {
  const { user, profile } = useAuth()

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold text-xl">
              {(profile?.full_name || user?.email || '?')[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {profile?.full_name || 'Researcher'}
              </h2>
              <p className="text-sm text-slate-500">{user?.email}</p>
              <span className="mt-1 inline-flex rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                {profile?.role || 'researcher'}
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={profile?.full_name || ''}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email || ''}
                disabled
                className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-slate-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Institution
              </label>
              <input
                type="text"
                defaultValue={profile?.institution || ''}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder="소속 기관"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Expertise
              </label>
              <input
                type="text"
                defaultValue={profile?.expertise || ''}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                placeholder="전문 분야"
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="rounded-md bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
