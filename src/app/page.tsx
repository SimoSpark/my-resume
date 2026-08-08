'use client'
import { useState, useEffect } from 'react'
import { Lang } from '@/lib/data'
import CV from '@/components/CV'

export default function Page() {
  const [lang, setLang] = useState<Lang>('en')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return <CV lang={lang} setLang={setLang} dark={dark} toggleDark={toggleDark} />
}
