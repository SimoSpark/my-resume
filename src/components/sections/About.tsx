import { User, Code2, Rocket, Globe } from 'lucide-react'
import { Translations } from '@/lib/translations'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

interface AboutProps {
  t: Translations
}

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Maintainable, well-structured architecture' },
  { icon: Rocket, label: 'Fast Delivery', desc: 'Agile, efficient project execution' },
  { icon: Globe, label: 'Multilingual', desc: '5 languages: AR, FR, EN, DE, Tamazight' },
  { icon: User, label: 'Team Player', desc: 'Collaborative cross-functional environments' },
]

export default function About({ t }: AboutProps) {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <SectionHeading title={t.about.title} />
          <p
            className="text-base leading-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.about.paragraph}
          </p>

          {/* Location & availability badge */}
          <div
            className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
          >
            <span className="text-lg">📍</span>
            <div>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                Agadir, Morocco
              </span>
              <span style={{ color: 'var(--text-muted)' }}> — Open to remote &amp; relocation</span>
            </div>
          </div>
        </div>

        {/* Right — highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="card p-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--accent-soft)' }}
              >
                <Icon size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <h3
                className="font-semibold text-sm mb-1"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                {label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
