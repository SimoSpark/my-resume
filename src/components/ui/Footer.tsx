import { Translations } from '@/lib/translations'

interface FooterProps {
  t: Translations
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer
      className="py-8 px-6 border-t text-center"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Mohamed Oukhajou. All rights reserved.
        </p>
        <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          {t.footer.built}
        </p>
      </div>
    </footer>
  )
}
