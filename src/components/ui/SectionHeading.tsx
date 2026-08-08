'use client'

interface SectionHeadingProps {
  title: string
  accentWord?: string
}

export default function SectionHeading({ title, accentWord }: SectionHeadingProps) {
  const parts = accentWord ? title.split(accentWord) : [title]

  return (
    <div className="mb-12">
      <h2 className="section-title mb-3" style={{ fontFamily: 'var(--font-display)' }}>
        {accentWord ? (
          <>
            {parts[0]}
            <span className="gradient-text">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <div className="accent-line" />
    </div>
  )
}
