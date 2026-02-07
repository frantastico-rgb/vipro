import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Improved font loading
  preload: true,
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap', // Improved font loading
  preload: true,
})

export const metadata: Metadata = {
  title: 'VIPRO - Donde el viaje y la vida se encuentran',
  description: 'Experiencias auténticas de inmersión cultural en los Llanos Orientales de Colombia. Para nómadas digitales, familias conscientes y viajeros con propósito.',
  metadataBase: new URL('http://localhost:3000'),
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
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('vipro-theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <style>{`body{margin:0;font-family:Inter,system-ui,sans-serif;background-color:#F4E4C1;color:#1A1A2E;transition:background-color 0.3s ease}.loading-skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}@keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/globals.css" as="style" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
