'use client'

import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Translations } from '@/lib/translations'

interface HeroProps {
  t: Translations
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                fontFamily: 'var(--font-mono)',
                opacity: 0.9,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--accent)', animation: 'pulse 2s ease-in-out infinite' }}
              />
              Available for opportunities
            </div>

            {/* Greeting */}
            <p
              className="text-lg mb-2"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              {t.hero.greeting}
            </p>

            {/* Name */}
            <h1
              className="font-display font-800 leading-none mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Mohamed{' '}
              <span className="gradient-text">Oukhajou</span>
            </h1>

            {/* Title */}
            <h2
              className="text-xl font-semibold mb-6"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
              }}
            >
              {t.hero.title}
            </h2>

            {/* Subtitle */}
            <p
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#about" className="btn-primary">
                {t.hero.cta}
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={16} />
                Contact me
              </a>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/SimoSpark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-all duration-200"
                style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
              >
                <Github size={18} />
                <span style={{ fontFamily: 'var(--font-mono)' }}>@SimoSpark</span>
              </a>
              <a
                href="https://linkedin.com/in/Mohamed-OUKHAJOU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-all duration-200"
                style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
              >
                <Linkedin size={18} />
                <span style={{ fontFamily: 'var(--font-mono)' }}>LinkedIn</span>
              </a>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                <MapPin size={18} />
                <span>Agadir, Morocco</span>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Floating card */}
              <div
                className="relative rounded-2xl p-8 w-80"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.15)',
                }}
              >
                {/* Avatar placeholder */}
                <div className="avatar-ring w-24 h-24 mx-auto mb-6">
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-3xl font-bold"
                    style={{
                      background: 'var(--bg)',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    MO
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p
                    className="font-semibold text-lg"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                  >
                    Mohamed Oukhajou
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--accent)' }}>
                    Full Stack Developer
                  </p>
                </div>

                {/* Stats */}
                <div
                  className="grid grid-cols-3 gap-3 py-5 border-t border-b mb-6"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {[
                    { value: '20+', label: 'Projects' },
                    { value: '2+', label: 'Years' },
                    { value: '5+', label: 'Tech Stack' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center">
                      <p
                        className="text-xl font-bold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['React', 'Next.js', 'PHP', 'MySQL', 'TypeScript'].map(tech => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating decorations */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                ⚡
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl flex items-center justify-center text-xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: '2s',
                }}
              >
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
