'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, Mail, Phone, Github, Linkedin, Download, Sun, Moon, Globe } from 'lucide-react'
import { Lang, t } from '@/lib/data'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
  dark: boolean
  toggleDark: () => void
}

interface Command {
  id: string
  label: string
  hint?: string
  keywords: string[]
  icon: React.ReactNode
  action: () => void
}

export default function CommandMenu({ lang, setLang, dark, toggleDark }: Props) {
  const d = t[lang]
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Command[] = useMemo(
    () => [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        // hint: d.linkedin,
        keywords: ['linkedin', 'li'],
        icon: <Linkedin size={14} />,
        action: () => window.open(`https://${d.linkedin}`, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'github',
        label: 'GitHub',
        // hint: d.github,
        keywords: ['github', 'gh', 'git'],
        icon: <Github size={14} />,
        action: () => window.open(`https://${d.github}`, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'email',
        label: 'Send Email',
        // hint: d.email,
        keywords: ['email', 'mail', 'contact'],
        icon: <Mail size={14} />,
        action: () => (window.location.href = `mailto:${d.email}`),
      },
      {
        id: 'phone',
        label: 'Call',
        // hint: d.phone,
        keywords: ['phone', 'call', 'tel'],
        icon: <Phone size={14} />,
        action: () => (window.location.href = `tel:${d.phone.replace(/\s+/g, '')}`),
      },
      {
        id: 'pdf',
        label: 'Download PDF',
        keywords: ['pdf', 'print', 'download', 'resume', 'cv'],
        icon: <Download size={14} />,
        action: () => window.print(),
      },
      {
        id: 'theme',
        label: dark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        keywords: ['theme', 'dark', 'light', 'mode'],
        icon: dark ? <Sun size={14} /> : <Moon size={14} />,
        action: toggleDark,
      },
      {
        id: 'lang-en',
        label: 'English',
        hint: 'Switch language',
        keywords: ['english', 'en', 'language', 'lang'],
        icon: <Globe size={14} />,
        action: () => setLang('en'),
      },
      {
        id: 'lang-de',
        label: 'Deutsch',
        hint: 'Switch language',
        keywords: ['german', 'deutsch', 'de', 'language', 'lang'],
        icon: <Globe size={14} />,
        action: () => setLang('de'),
      },
    ],
    [d, dark, toggleDark, setLang]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.keywords.some((k) => k.includes(q))
    )
  }, [query, commands])

  const close = () => {
    setOpen(false)
    setQuery('')
    setHighlighted(0)
  }

  const run = (cmd: Command) => {
    cmd.action()
    close()
  }

  // global shortcut: Ctrl+J / Cmd+J toggles the menu
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault()
        setOpen((v) => !v)
        return
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)

    function onOpenRequest() {
      setOpen(true)
    }
    window.addEventListener('open-command-menu', onOpenRequest)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('open-command-menu', onOpenRequest)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setHighlighted(0)
      requestAnimationFrame(() => inputRef.current?.focus())
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setHighlighted(0)
  }, [query])

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((i) => (filtered.length ? (i + 1) % filtered.length : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const cmd = filtered[highlighted]
      if (cmd) run(cmd)
    }
  }

  if (!open) return null

  return (
    <div
      className="no-print"
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(10, 12, 18, 0.55)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '14vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '92%',
          maxWidth: '520px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          boxShadow: '0 24px 60px -12px rgba(0,0,0,0.5)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 14px',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Search size={16} color="var(--fg-faint)" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search — try “linkedin” or “github”…"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              color: 'var(--fg)',
              fontSize: '15px',
              fontFamily: 'IBM Plex Mono, monospace',
            }}
          />
        </div>

        <div style={{ maxHeight: '320px', overflowY: 'auto', padding: '6px' }}>
          {filtered.length === 0 && (
            <div style={{ padding: '18px 12px', color: 'var(--fg-faint)', fontSize: '13px' }}>
              No results.
            </div>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              onClick={() => run(cmd)}
              onMouseEnter={() => setHighlighted(i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 10px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                background: i === highlighted ? 'var(--accent)' : 'transparent',
                color: i === highlighted ? '#fff' : 'var(--fg)',
              }}
            >
              <span style={{ display: 'flex', color: i === highlighted ? '#fff' : 'var(--fg-faint)' }}>
                {cmd.icon}
              </span>
              <span style={{ fontSize: '14px', fontWeight: 500 }}>{cmd.label}</span>
              {cmd.hint && (
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '12px',
                    fontFamily: 'IBM Plex Mono, monospace',
                    color: i === highlighted ? 'rgba(255,255,255,0.8)' : 'var(--fg-faint)',
                  }}
                >
                  {cmd.hint}
                </span>
              )}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            padding: '8px 14px',
            borderTop: '1px solid var(--border)',
            fontSize: '11px',
            color: 'var(--fg-faint)',
            fontFamily: 'IBM Plex Mono, monospace',
          }}
        >
         
        </div>
      </div>
    </div>
  )
}
