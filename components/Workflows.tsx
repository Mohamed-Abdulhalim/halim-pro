import styles from './Workflows.module.css'
import AnimateIn from './AnimateIn'

const workflows = [
  {
    name: 'RAG Chatbot on Product Catalogue',
    tagline: 'Ask the catalogue anything, get grounded answers.',
    desc: 'Retrieval-augmented chatbot over a client equipment catalogue. Supabase pgvector for vector storage, Ollama nomic-embed-text for embeddings, and Groq for inference. Answers come from the catalogue itself, not from the model guessing. Deployed and verified in production.',
    stack: ['Supabase pgvector', 'Ollama', 'Groq', 'Python'],
    metrics: ['RAG pipeline', 'vector search', 'production deployed'],
  },
  {
    name: 'Lead Intelligence Pipeline',
    tagline: 'Inbound leads enriched and briefed automatically.',
    desc: 'A form submission triggers contact enrichment via Hunter.io, a recent-news lookup on the company, and an LLM-generated outreach angle tailored to that news. Everything lands in a CRM record and an internal email brief, ready to send with no manual research.',
    stack: ['n8n', 'Hunter.io', 'Groq', 'Notion', 'Gmail API'],
    metrics: ['auto-enriched', 'news-aware', 'zero research time'],
  },
  {
    name: 'Job Market Intelligence Pipeline',
    tagline: 'Raw listings in, categorized market signal out.',
    desc: 'Scheduled pipeline pulls fresh listings, deduplicates by company and title, then runs each batch through an LLM classifier that tags category, top skills, and spam or anomaly flags. Results roll up into a weekly digest email with category breakdowns.',
    stack: ['n8n', 'Gemini', 'Google Sheets', 'Gmail API'],
    metrics: ['AI-categorized', 'anomaly detection', 'weekly digest'],
  },
  {
    name: 'Healthcare Operations System',
    tagline: '7-scenario Make.com orchestration for a clinic.',
    desc: 'Seven coordinated Make.com scenarios handling appointment scheduling, patient follow-ups, staff notifications, and reporting. Replaced a fully manual operations workflow.',
    stack: ['Make.com', 'Google Sheets', 'Gmail', 'WhatsApp'],
    metrics: ['7 scenarios', 'fully automated', 'ops replacement'],
  },
  {
    name: 'Client Onboarding Automation',
    tagline: 'New client intake without the back-and-forth.',
    desc: 'One form submission runs the full onboarding sequence: CRM record creation, an AI-drafted personalized welcome email, and a kickoff call scheduled on the calendar with the client already invited. No manual coordination.',
    stack: ['n8n', 'Notion', 'Gemini', 'Google Calendar', 'Gmail API'],
    metrics: ['single trigger', 'auto-scheduled', 'no human steps'],
  },
]

export default function Workflows() {
  return (
    <section className={styles.section} id="workflows">
      <div className={styles.inner}>
        <AnimateIn>
          <div className={styles.header}>
            <span className={styles.label}>// agents &amp; workflows</span>
            <h2 className={styles.title}>Agents and automations I've designed and shipped.</h2>
          </div>
        </AnimateIn>
        <div className={styles.grid}>
          {workflows.map((w, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardName}>{w.name}</div>
                <p className={styles.tagline}>{w.tagline}</p>
                <p className={styles.desc}>{w.desc}</p>
                <div className={styles.metrics}>
                  {w.metrics.map(m => (
                    <span key={m} className={styles.metric}>{m}</span>
                  ))}
                </div>
                <div className={styles.stack}>
                  {w.stack.map(s => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
          <AnimateIn delay={workflows.length * 0.08}>
            <a href="#contact" className={`${styles.card} ${styles.ctaCard}`}>
              <span className={styles.ctaLabel}>// next build</span>
              <div className={styles.ctaTitle}>Your workflow goes here.</div>
              <p className={styles.desc}>
                Tell me what comes in, what has to happen, and where it should end up.
                I&apos;ll reply with how I&apos;d automate it.
              </p>
              <span className={styles.ctaLink}>describe your problem →</span>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
