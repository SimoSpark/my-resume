'use client'
import { Lang, t } from '@/lib/data'
import { Mail, Github, Linkedin, Phone, MapPin, Moon, Sun, Download, Globe } from 'lucide-react'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
  dark: boolean
  toggleDark: () => void
}

/* ─── tiny helpers ─────────────────────────────────────────────── */

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="cv-section grid grid-cols-[120px_1fr] gap-x-8 sm:grid-cols-[140px_1fr]">
      <span className="section-label mt-0.5" style={{ color: 'var(--fg)', fontWeight: 700 }}>{label}</span>
      <div>{children}</div>
    </div>
  )
}

function Divider() {
  return <hr style={{ borderColor: 'var(--border)', margin: 0 }} />
}

/* ─── main component ───────────────────────────────────────────── */

export default function CV({ lang, setLang, dark, toggleDark }: Props) {
  const d = t[lang]

  return (
    <div style={{ background: 'var(--page-bg)', minHeight: '100vh' }}>
      {/* ── toolbar (not printed) ── */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-2.5 border-b"
        style={{
          background: 'var(--bg-toolbar)',
          borderColor: 'var(--border)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '11px',
            color: 'var(--fg-faint)',
            letterSpacing: '0.05em',
          }}
        >
          Mohamed Oukhajou · CV
        </span>

        <div className="flex items-center gap-2">
          {/* Language */}
          <div
            className="flex items-center rounded overflow-hidden"
            style={{ border: '1px solid var(--border)' }}
          >
            {(['en', 'de'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '3px 10px',
                  fontSize: '11px',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  background: lang === l ? 'var(--accent)' : 'transparent',
                  color: lang === l ? '#fff' : 'var(--fg-faint)',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme */}
          <button
            onClick={toggleDark}
            style={{
              padding: '4px 8px',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'var(--fg-faint)',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Toggle theme"
          >
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* Print / Download */}
          <button
            onClick={() => window.print()}
            style={{
              padding: '4px 10px',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'var(--fg-faint)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '11px',
              fontFamily: 'IBM Plex Mono, monospace',
            }}
          >
            <Download size={12} />
            PDF
          </button>
        </div>
      </div>

      {/* ── CV body ── */}
      <div
        className="cv-wrapper mx-auto px-8 py-10"
        style={{
          maxWidth: '820px',
          marginTop: '28px',
          marginBottom: '28px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          boxShadow: '0 24px 60px -24px rgba(0, 0, 0, 0.45)',
        }}
      >

        {/* ══ HEADER ══════════════════════════════════════════════ */}
        <div className="flex items-start gap-6 mb-8">
          {/* Photo */}
          <div style={{ width: '150px', height: '150px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border)' }}>
            <img src="/oukhajou.jpeg" alt="Mohamed Oukhajou" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Name + title + contacts */}
          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '28px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '2px',
              }}
            >
              Mohamed Oukhajou
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--fg-muted)',
                fontWeight: 400,
                marginBottom: '10px',
              }}
            >
              {d.title}
            </p>

            {/* Contact row */}
            <div
              className="flex flex-wrap gap-x-5 gap-y-1"
              style={{ fontSize: '13px', color: 'var(--fg-muted)' }}
            >
              <ContactItem icon={<Mail size={11} />} href={`mailto:${d.email}`} label={d.email} />
              <ContactItem icon={<Phone size={11} />} label={d.phone} />
              <ContactItem icon={<Github size={11} />} href={`https://${d.github}`} label={d.github} external />
              <ContactItem icon={<Linkedin size={11} />} href={`https://${d.linkedin}`} label={d.linkedin} external />
              <ContactItem icon={<MapPin size={11} />} label={d.location} />
            </div>
          </div>
        </div>

        <Divider />

        {/* ══ PROFILE ═════════════════════════════════════════════ */}
        <Row label={d.profile.label}>
          <p style={{ color: 'var(--fg-muted)', fontSize: '15.5px', lineHeight: 1.65 }}>{d.profile.text}</p>
        </Row>

        {/* ══ EXPERIENCE ══════════════════════════════════════════ */}
        <Row label={d.experience.label}>
          <div className="flex flex-col gap-6">
            {d.experience.items.map((job, i) => (
              <div key={i}>
                {/* Company + date */}
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: '14.5px',
                        color: 'var(--fg)',
                      }}
                    >
                      {job.company}
                    </span>
                    <span
                      style={{
                        color: 'var(--fg-faint)',
                        margin: '0 6px',
                        fontWeight: 300,
                      }}
                    >
                      —
                    </span>
                    <span style={{ color: 'var(--fg-muted)', fontStyle: 'italic', fontSize: '14px' }}>
                      {job.role}
                    </span>
                  </div>
                  <span
                    className="period"
                    style={{
                      color: 'var(--fg-faint)',
                      fontFamily: 'IBM Plex Mono, monospace',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Location */}
                <p
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--fg-faint)',
                    marginTop: '1px',
                    marginBottom: '6px',
                  }}
                >
                  {job.location}
                </p>

                {/* Bullet points */}
                <ul style={{ paddingLeft: '14px', listStyleType: 'disc' }}>
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        color: 'var(--fg-muted)',
                        fontSize: '15.5px',
                        lineHeight: 1.7,
                        marginBottom: '2px',
                        paddingLeft: '2px',
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <p
                  className="stack-line"
                  style={{
                    marginTop: '6px',
                    color: 'var(--fg-faint)',
                    fontFamily: 'IBM Plex Mono, monospace',
                  }}
                >
                  {job.stack}
                </p>

                {/* separator between jobs */}
                {i < d.experience.items.length - 1 && (
                  <hr style={{ borderColor: 'var(--border)', marginTop: '18px' }} />
                )}
              </div>
            ))}
          </div>
        </Row>

        {/* ══ EDUCATION ═══════════════════════════════════════════ */}
        <Row label={d.education.label}>
          <div className="flex flex-col gap-4">
            {d.education.items.map((edu, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span style={{ fontWeight: 600, fontSize: '14.5px', color: 'var(--fg)' }}>
                    {edu.institution}
                  </span>
                  <span
                    className="period"
                    style={{
                      color: 'var(--fg-faint)',
                      fontFamily: 'IBM Plex Mono, monospace',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p style={{ color: 'var(--fg-muted)', fontStyle: 'italic', fontSize: '14px' }}>{edu.degree}</p>
                {edu.note && (
                  <p style={{ fontSize: '13px', color: 'var(--fg-faint)', marginTop: '2px' }}>{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </Row>

        {/* ══ PROJECTS ════════════════════════════════════════════ */}
        <Row label={d.projects.label}>
          <div className="flex flex-col gap-4">
            {d.projects.items.map((proj, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span style={{ fontWeight: 600, fontSize: '14.5px', color: 'var(--fg)' }}>{proj.name}</span>
                  <span
                    className="period"
                    style={{
                      color: 'var(--fg-faint)',
                      fontFamily: 'IBM Plex Mono, monospace',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {proj.period}
                  </span>
                </div>
                <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6, marginTop: '2px' }}>{proj.desc}</p>
                <p
                  className="stack-line"
                  style={{
                    marginTop: '4px',
                    color: 'var(--fg-faint)',
                    fontFamily: 'IBM Plex Mono, monospace',
                  }}
                >
                  {proj.stack}
                </p>
              </div>
            ))}
          </div>
        </Row>

        {/* ══ SKILLS ══════════════════════════════════════════════ */}
        <Row label={d.skills.label}>
          <div className="flex flex-col gap-2">
            {d.skills.groups.map((g) => (
              <div key={g.label} className="flex gap-3 flex-wrap">
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontWeight: 600,
                    color: 'var(--fg)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    minWidth: '70px',
                    paddingTop: '1px',
                  }}
                >
                  {g.label}
                </span>
                <span style={{ color: 'var(--fg-muted)', lineHeight: 1.6 }}>{g.items}</span>
              </div>
            ))}
          </div>
        </Row>

        {/* ══ INTERESTS ═══════════════════════════════════════════ */}
        <Row label={d.interests.label}>
          <p style={{ color: 'var(--fg-muted)' }}>{d.interests.items}</p>
        </Row>

      </div>
    </div>
  )
}

/* ─── contact item ─────────────────────────────────────────────── */
function ContactItem({
  icon,
  href,
  label,
  external,
}: {
  icon: React.ReactNode
  href?: string
  label: string
  external?: boolean
}) {
  const inner = (
    <span className="flex items-center gap-1">
      {icon}
      {label}
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{ color: 'var(--fg-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)')}
      >
        {inner}
      </a>
    )
  }
  return <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>{inner}</span>
}
