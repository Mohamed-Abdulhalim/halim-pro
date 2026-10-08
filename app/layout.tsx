import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'

const title = 'Mohamed Abdulhalim | AI Agents & Automation Engineer'
const description =
  'I build AI agents and automation systems that take the busywork off your team: lead qualification, data pipelines, CRM sync, and RAG over your own documents. Python, n8n, Supabase, LLM APIs. Based in Cairo, working async worldwide.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://halim.pro'),
  openGraph: {
    title,
    description,
    url: 'https://halim.pro',
    siteName: 'halim.pro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
