import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Lee Robin Dela Cruz — Portfolio',
  description: 'Talent Acquisition, Recruitment Coordinator & Operations Professional. Remote-first. Builder.',
  openGraph: {
    title: 'Lee Robin Dela Cruz',
    description: 'Recruitment · Operations · Automation · Builder',
    url: 'https://leerobindelacruz.vercel.app',
    siteName: 'Lee Robin Dela Cruz',
    locale: 'en_PH',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
