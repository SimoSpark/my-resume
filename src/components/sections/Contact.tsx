import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react'
import { Translations } from '@/lib/translations'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

interface ContactProps {
  t: Translations
}

const contactLinks = [
  {
    href: 'mailto:mohamedoukhajou@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'mohamedoukhajou@gmail.com',
    external: false,
  },
  {
    href: 'https://github.com/SimoSpark',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/SimoSpark',
    external: true,
  },
  {
    href: 'https://linkedin.com/in/Mohamed-OUKHAJOU',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Mohamed-OUKHAJOU',
    external: true,
  },
  {
    href: '#',
    icon: MapPin,
    label: 'Location',
    value: 'Agadir, Morocco',
    external: false,
  },
]

export default function Contact({ t }: ContactProps) {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading title={t.contact.title} />

        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.contact.subtitle}
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
          {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="contact-link"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-soft)' }}
              >
                <Icon size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Download CV CTA */}
        <a
          href="/cv-mohamed-oukhajou.pdf"
          download
          className="btn-primary inline-flex"
          style={{ fontSize: '0.95rem', padding: '14px 32px' }}
        >
          <Download size={18} />
          Download Full CV (PDF)
        </a>
      </div>
    </Section>
  )
}
