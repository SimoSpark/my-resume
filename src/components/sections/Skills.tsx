import { Translations } from '@/lib/translations'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

interface SkillsProps {
  t: Translations
}

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  'Tools & Design': '🛠️',
  Languages: '🌐',
  // German equivalents
  Datenbank: '🗄️',
  'Sprachen': '🌐',
  'Fähigkeiten': '✨',
}

export default function Skills({ t }: SkillsProps) {
  return (
    <Section id="skills">
      <SectionHeading title={t.skills.title} />

      <div className="flex flex-col gap-10">
        {t.skills.categories.map((cat) => (
          <div key={cat.label}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">{categoryIcons[cat.label] ?? '💡'}</span>
              <h3
                className="text-sm font-bold uppercase tracking-widest"
                style={{
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {cat.label}
              </h3>
              <div
                className="flex-1 h-px"
                style={{ background: 'var(--border)' }}
              />
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
