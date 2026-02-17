import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import translations from '../data/translations'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en'
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ko' : 'en'))
  }, [])

  const t = useCallback(
    (key) => {
      const entry = translations[key]
      if (!entry) return key
      return entry[lang] || entry.en || key
    },
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) throw new Error('useLang must be used within a LangProvider')
  return context
}
