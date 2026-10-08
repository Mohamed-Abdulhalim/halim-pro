'use client'
import styles from './Projects.module.css'
import AnimateIn from './AnimateIn'

const projects = [
  {
    id: 'leadsignal',
    name: 'LeadSignal',
    tagline: 'B2B lead intelligence, globally verified.',
    desc: 'A production lead database with 346K+ phone-verified records fed by a fully automated scrape, clean, enrich, and push pipeline. Includes 11K+ programmatic SEO pages and a self-service search interface.',
    stack: ['Python', 'Supabase', 'GitHub Actions', 'Next.js', 'Playwright'],
    link: 'https://leadsignal.halim.pro',
    accent: 'teal',
    metrics: ['346K+ records', '11K SEO pages', 'runs every 2h'],
  },
  {
    id: 'cashrunway',
    name: 'CashRunway',
    tagline: 'Cash flow intelligence for bookkeepers.',
    desc: "A Next.js SaaS tool with full Xero OAuth integration. Gives bookkeepers a live cash flow runway view that Xero's native UI doesn't provide. Targets the Xero App Marketplace.",
    stack: ['Next.js', 'Xero OAuth', 'Supabase', 'TypeScript'],
    link: 'https://cashrunway.halim.pro',
    accent: 'blue',
    metrics: ['Xero OAuth', 'real-time data', 'multi-client'],
  },
  {
    id: 'edgepulse',
    name: 'EdgePulse',
    tagline: 'Commodity intelligence dashboard.',
    desc: 'A Flask-based market intelligence tool with automated commodity forecasting, price delta tracking, and a 294-entry backtested track record. Built as a forecasting and data-engineering showcase, not a trading signal product.',
    stack: ['Flask', 'Python', 'yfinance', 'Vercel', 'Supabase'],
    link: 'https://edgepulse.halim.pro',
    accent: 'amber',
    metrics: ['294 track records', '5 live signals', 'auto-refresh'],
  },
]

const accentColors: Record<string, { border: string; glow: string; text: string; bg: string }> = {
  teal:  { border: 'rgba(232,68,15,0.28)',  glow: 'rgba(232,68,15,0.06)',  text: 'var(--accent)', bg: 'rgba(232,68,15,0.08)' },
  blue:  { border: 'rgba(47,111,106,0.30)', glow: 'rgba(47,111,106,0.06)', text: 'var(--teal)',   bg: 'rgba(47,111,106,0.08)' },
  amber: { border: 'rgba(168,112,26,0.30)', glow: 'rgba(168,112,26,0.06)', text: 'var(--amber)',  bg: 'rgba(168,112,26,0.08)' },
}

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <AnimateIn>
          <div className={styles.header}>
            <span className={styles.label}>// products i built and run</span>
            <h2 className={styles.title}>Live in production, not a demo.</h2>
          </div>
        </AnimateIn>
        <div className={styles.grid}>
          {projects.map((p, i) => {
            const c = accentColors[p.accent]
            return (
              <AnimateIn key={p.id} delay={i * 0.1}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  style={{
                    '--card-border': c.border,
                    '--card-glow': c.glow,
                    '--card-text': c.text,
                    '--card-bg': c.bg,
                  } as React.CSSProperties}
                  onMouseMove={handleMouseMove}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.cardName}>{p.name}</div>
                    <div className={styles.cardLink}>↗</div>
                  </div>
                  <p className={styles.tagline}>{p.tagline}</p>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.metrics}>
                    {p.metrics.map(m => (
                      <span key={m} className={styles.metric}>{m}</span>
                    ))}
                  </div>
                  <div className={styles.stack}>
                    {p.stack.map(s => (
                      <span key={s} className={styles.tag}>{s}</span>
                    ))}
                  </div>
                </a>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
