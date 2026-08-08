'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Download, Menu, X } from 'lucide-react'
import { Translations, Lang } from '@/lib/translations'
import { cn } from '@/lib/utils'

interface NavbarProps {
  t: Translations
  lang: Lang
  setLang: (l: Lang) => void
  darkMode: boolean
  toggleDarkMode: () => void
}

const navLinks = [
  { href: '#about', key: 'about' as const },
  { href: '#experience', key: 'experience' as const },
  { href: '#education', key: 'education' as const },
  { href: '#skills', key: 'skills' as const },
  { href: '#contact', key: 'contact' as const },
]

export default function Navbar({ t, lang, setLang, darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'nav-blur' : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-lg font-700 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontWeight: 700, textDecoration: 'none' }}
          >
            M<span style={{ color: 'var(--accent)' }}>.</span>Oukhajou
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, key }) => (
              <li key={key}>
                <a
                  href={href}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => {
                    ;(e.target as HTMLElement).style.color = 'var(--accent)'
                    ;(e.target as HTMLElement).style.background = 'var(--accent-soft)'
                  }}
                  onMouseLeave={e => {
                    ;(e.target as HTMLElement).style.color = 'var(--text-secondary)'
                    ;(e.target as HTMLElement).style.background = 'transparent'
                  }}
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Lang switcher */}
            <div
              className="flex items-center rounded-lg overflow-hidden border"
              style={{ borderColor: 'var(--border)' }}
            >
              {(['en', 'de'] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: lang === l ? 'var(--accent)' : 'transparent',
                    color: lang === l ? 'white' : 'var(--text-muted)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Download CV */}
            <a
              href="/cv-mohamed-oukhajou.pdf"
              download
              className="btn-primary hidden md:inline-flex text-sm"
              style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            >
              <Download size={14} />
              {t.nav.downloadCV}
            </a>

            {/* Mobile menu btn */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            {navLinks.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {t.nav[key]}
              </a>
            ))}
            <a
              href="/cv-mohamed-oukhajou.pdf"
              download
              className="btn-primary mt-2 justify-center"
              style={{ fontSize: '0.85rem' }}
            >
              <Download size={14} />
              {t.nav.downloadCV}
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
