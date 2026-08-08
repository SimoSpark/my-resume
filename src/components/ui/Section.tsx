import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 px-6', className)}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
