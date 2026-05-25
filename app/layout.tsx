import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohamed Abdulhalim — Workflow Automation Engineer',
  description: 'Workflow automation, app integrations, and ETL pipelines using n8n, Make.com, Zapier, and Python. Cairo-based, remote-first.',
  metadataBase: new URL('https://halim.pro'),
  openGraph: {
    title: 'Mohamed Abdulhalim — Workflow Automation Engineer',
    description: 'Workflow automation, app integrations, and ETL pipelines using n8n, Make.com, Zapier, and Python.',
    url: 'https://halim.pro',
    siteName: 'halim.pro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Abdulhalim — Workflow Automation Engineer',
    description: 'Workflow automation, app integrations, and ETL pipelines using n8n, Make.com, Zapier, and Python.',
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
