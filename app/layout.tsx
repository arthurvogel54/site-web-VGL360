import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VGL360 — Agence Web Créative & Innovante',
  description: 'VGL360 est une agence de conception et développement web qui transforme vos idées en expériences numériques exceptionnelles. Design audacieux, développement moderne, résultats mesurables.',
  keywords: ['agence web', 'conception web', 'développement web', 'design UI/UX', 'Next.js', 'React', 'VGL360'],
  authors: [{ name: 'VGL360' }],
  openGraph: {
    title: 'VGL360 — Agence Web Créative & Innovante',
    description: 'De l\'idée à l\'impact — votre partenaire web pour des solutions numériques innovantes.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VGL360 — Agence Web Créative',
    description: 'De l\'idée à l\'impact — votre partenaire web pour des solutions numériques innovantes.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
