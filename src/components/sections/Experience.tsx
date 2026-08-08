import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { Translations } from '@/lib/translations'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

interface ExperienceProps {
  t: Translations
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <Section id="experience">
      <SectionHeading title={t.experience.title} />

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
          style={{ background: 'var(--border)' }}
        />

        <div className="flex flex-col gap-8">
          {t.experience.items.map((item, i) => (
            <div key={i} className="flex gap-8">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center">
                <div className="timeline-dot mt-1" />
              </div>

              {/* Card */}
              <div className="card p-7 flex-1 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: 'var(--accent)' }}
                    >
                      {item.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5">
                    <div
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                    >
                      <Calendar size={12} />
                      {item.period}
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <MapPin size={12} />
                      {item.location}
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--accent)' }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: 'var(--border)' }}>
                  <span
                    className="text-xs font-semibold mr-1"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                  >
                    {t.experience.skills}:
                  </span>
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
