import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LangContext'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import logo from '../../assets/icons/logo.png'

const phrases = [
  'Connecting Science, Understanding Lives',
  'Families · Genomes · Discovery',
  '가족 · 유전체 · 발견',
]

function useTypewriter(phrases, typingSpeed = 60, deletingSpeed = 30, pauseTime = 2000) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex]

    if (!isDeleting) {
      // Typing
      if (displayed.length < currentPhrase.length) {
        return { delay: typingSpeed + Math.random() * 40 }
      }
      // Finished typing → pause then delete
      return { delay: pauseTime, startDelete: true }
    }
    // Deleting
    if (displayed.length > 0) {
      return { delay: deletingSpeed }
    }
    // Finished deleting → next phrase
    return { delay: 300, nextPhrase: true }
  }, [phrases, phraseIndex, displayed, isDeleting, typingSpeed, deletingSpeed, pauseTime])

  useEffect(() => {
    const result = tick()

    const timer = setTimeout(() => {
      if (result.startDelete) {
        setIsDeleting(true)
      } else if (result.nextPhrase) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else if (isDeleting) {
        setDisplayed((prev) => prev.slice(0, -1))
      } else {
        const currentPhrase = phrases[phraseIndex]
        setDisplayed((prev) => currentPhrase.slice(0, prev.length + 1))
      }
    }, result.delay)

    return () => clearTimeout(timer)
  }, [tick, isDeleting, phraseIndex, phrases])

  return displayed
}

export default function Hero() {
  const { t } = useLang()
  const typed = useTypewriter(phrases)

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <motion.img
          src={logo}
          alt="K-ARC"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-32 w-32 object-contain mb-6"
        />
        <div className="h-8 flex items-center justify-center">
          <p className="text-base font-semibold tracking-widest text-primary-600 uppercase">
            {typed}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-[2px] h-4 bg-primary-600 ml-0.5 align-middle"
            />
          </p>
        </div>
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>
        </AnimatePresence>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-xl text-slate-600 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            to="/about"
            className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            {t('hero.learnMore')}
          </Link>
          <Link
            to="/research"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-gray-50 transition-colors"
          >
            {t('hero.ourResearch')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
