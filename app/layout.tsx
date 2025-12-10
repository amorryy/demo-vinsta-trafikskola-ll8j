import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinsta Trafikskola - Få ditt körkort snabbt och säkert',
  description: 'Vinsta Trafikskola erbjuder körkortsutbildning med erfarna lärare. Kontakta oss på 01266163 för att boka din första körlektion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>{children}</body>
    </html>
  )
}