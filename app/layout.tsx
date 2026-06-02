import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Compeel — Studio technologique africain',
    template: '%s — Compeel',
  },
  description:
    'Compeel est un studio technologique africain qui construit des produits vocaux et IA pour l\'Afrique de l\'Ouest.',
  keywords: ['Compeel', 'IA', 'voix', 'Afrique', 'Togo', 'KUMA', 'KARA', 'Mina', 'Ewe'],
  authors: [{ name: 'Compeel' }],
  creator: 'Compeel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://compeel.com',
    siteName: 'Compeel',
    title: 'Compeel — Studio technologique africain',
    description:
      'Produits vocaux et IA pour l\'Afrique de l\'Ouest. KUMA, KARA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compeel — Studio technologique africain',
    description: 'Produits vocaux et IA pour l\'Afrique de l\'Ouest.',
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
    <html lang="fr" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <main className="pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
