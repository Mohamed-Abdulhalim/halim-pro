import styles from './About.module.css'
import AnimateIn from './AnimateIn'

const pillars = [
  {
    title: 'AI agents & RAG',
    body: 'Conversational agents that qualify leads, extract structured data, and hand off to a human at the right moment. RAG pipelines over your own documents for grounded Q&A. Gemini, Groq, and OpenAI as the reasoning layer.',
  },
  {
    title: 'Workflow automation',
    body: 'Replacing manual processes with trigger-based workflows across your apps. n8n, Make.com, and Zapier as the execution layer, or custom Python where no-code hits its ceiling. If a human does it on a schedule, it can probably be automated.',
  },
  {
    title: 'Data pipelines',
    body: 'Scrape, clean, enrich, push. Verified records at scale, running unattended on GitHub Actions or cron, landing in Supabase where your team can actually use them.',
  },
]

const certs = ['Zapier Silver Solution Partner', 'n8n Certified']

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateIn direction="left">
            <div className={styles.left}>
              <span className={styles.label}>// about</span>
              <h2 className={styles.title}>
                Agents engineer.<br />
                Async-first.<br />
                <em>Cairo.</em>
              </h2>
              <p className={styles.bio}>
                I'm Mohamed, an AI agents and automation engineer. I design agents and workflows that remove manual work from real operations, using n8n, Make.com, and Zapier where they fit and custom Python where the no-code tools run out of road. My background spans BPO operations at Concentrix (Microsoft Azure) and Transcom (TUI UK), a degree in Management Information Systems, and several years of independent client work across Upwork and direct contracts.
              </p>
              <p className={styles.bio}>
                I prefer text-based async communication. I work across time zones without friction. I don't bill by the hour for things that should run automatically.
              </p>
              <div className={styles.certs}>
                {certs.map(c => (
                  <span key={c} className={styles.cert}>✓ {c}</span>
                ))}
              </div>
              <div className={styles.platforms}>
                <span className={styles.platformLabel}>find me on</span>
                <div className={styles.platformLinks}>
                  {[
                    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01d5c3c0ed52285018' },
                    { label: 'GitHub', href: 'https://github.com/Mohamed-Abdulhalim' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/halim99' },
                  ].map(p => (
                    <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
                      {p.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.2}>
            <div className={styles.right}>
              {pillars.map((p, i) => (
                <div key={i} className={styles.pillar}>
                  <div className={styles.pillarNum}>0{i + 1}</div>
                  <div>
                    <div className={styles.pillarTitle}>{p.title}</div>
                    <p className={styles.pillarBody}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
