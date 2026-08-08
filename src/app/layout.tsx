import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohamed Oukhajou — Full Stack Developer',
  description: 'Full Stack Developer based in Agadir, Morocco. Specialising in React, Next.js, PHP.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
