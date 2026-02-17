import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LangContext'

export default function Footer() {
  const { t, lang } = useLang()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              K-ARC
            </h3>
            <p className="mt-1 text-xs italic text-primary-600">
              Connecting Science, Understanding Lives
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              {t('footer.links')}
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-slate-500 hover:text-slate-700">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-slate-500 hover:text-slate-700">
                  {t('nav.research')}
                </Link>
              </li>
              {/* Participate link hidden until IRB approval */}
              <li>
                <Link to="/support" className="text-sm text-slate-500 hover:text-slate-700">
                  {t('nav.support')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              {t('footer.contact')}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              {t('footer.address1')}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {t('footer.address2')}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} K-ARC. All rights reserved.
          </p>
          <Link
            to="/login"
            className="text-xs text-slate-400 hover:text-slate-500 transition-colors"
          >
            {lang === 'ko' ? '연구자 포털' : 'Researcher Portal'}
          </Link>
        </div>
      </div>
    </footer>
  )
}
