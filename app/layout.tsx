import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohamed Abdulhalim — Data & Automation Engineer',
  description: 'ETL pipelines, automation systems, and full-stack tools. 400K+ records in production. Cairo-based, remote-first.',
  metadataBase: new URL('https://halim.pro'),
  openGraph: {
    title: 'Mohamed Abdulhalim — Data & Automation Engineer',
    description: 'ETL pipelines, automation systems, and full-stack tools. 400K+ records in production.',
    url: 'https://halim.pro',
    siteName: 'halim.pro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Abdulhalim — Data & Automation Engineer',
    description: 'ETL pipelines, automation systems, and full-stack tools. 400K+ records in production.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
