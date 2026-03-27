import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'VectorClose — Autonomous Sales, Real Revenue',
  description: 'AI that prospects, qualifies, engages, handles objections, and closes — you just approve the deals.',
  openGraph: {
    title: 'VectorClose — Autonomous Sales, Real Revenue',
    description: 'AI that prospects, qualifies, engages, handles objections, and closes — you just approve the deals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-bg-base text-white`}>
        {children}
      </body>
    </html>
  )
}
