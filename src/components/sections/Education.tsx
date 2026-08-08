import { GraduationCap, Calendar } from 'lucide-react'
import { Translations } from '@/lib/translations'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

interface EducationProps {
  t: Translations
}

export default function Education({ t }: EducationProps) {
  return (
    <Section id="education">
      <SectionHeading title={t.education.title} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.education.items.map((item, i) => (
          <div key={i} className="card p-6 flex flex-col">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'var(--accent-soft)' }}
            >
              <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
            </div>

            {/* Period */}
            <div
              className="flex items-center gap-1.5 text-xs mb-3"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              <Calendar size={12} />
              {item.period}
            </div>

            {/* Institution */}
            <h3
              className="font-bold text-base mb-2 leading-snug"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              {item.institution}
            </h3>

            {/* Degree */}
            <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>
              {item.degree}
            </p>

            {/* Detail */}
            {item.detail && (
              <p
                className="text-xs leading-relaxed mt-auto pt-3 border-t"
                style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
              >
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
