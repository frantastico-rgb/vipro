import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'VIPRO - Donde el viaje y la vida se encuentran',
  description: 'Experiencias auténticas de inmersión cultural en los Llanos Orientales de Colombia. Para nómadas digitales, familias conscientes y viajeros con propósito.',
  keywords: 'turismo consciente, nómadas digitales, Colombia, Llanos Orientales, Villavicencio, inmersión cultural, coworking, viajes con propósito',
  authors: [{ name: 'VIPRO' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'VIPRO - Viaja con Propósito',
    description: 'Conectamos viajeros conscientes con experiencias llaneras auténticas',
    type: 'website',
    locale: 'es_CO',
    images: ['/images/vipro-logo.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
