import styles from './Workflows.module.css'
import AnimateIn from './AnimateIn'

const workflows = [
  {
    name: 'Job Market Intelligence Pipeline',
    tagline: 'Raw listings in, categorized market signal out.',
    desc: 'Scheduled pipeline pulls fresh listings, deduplicates by company + title, then runs each batch through an LLM classifier that tags category, top skills, and spam/anomaly flags. Results land in a running dataset and roll up into a weekly digest email with category breakdowns.',
    stack: ['n8n', 'Gemini', 'Google Sheets', 'Gmail API'],
    metrics: ['AI-categorized', 'anomaly detection', 'weekly digest'],
  },
  {
    name: 'Lead Intelligence Pipeline',
    tagline: 'Inbound leads enriched and briefed automatically.',
    desc: 'Form submission triggers contact enrichment via Hunter.io, a recent-news lookup on the company, and an LLM-generated outreach angle tailored to that news. Everything lands in a CRM record and an internal email brief, ready to send with zero manual research.',
    stack: ['n8n', 'Hunter.io', 'Groq', 'Notion', 'Gmail API'],
    metrics: ['auto-enriched', 'news-aware', 'zero research time'],
  },
  {
    name: 'Client Onboarding Automation',
    tagline: 'New client intake without the back-and-forth.',
    desc: 'Form submission triggers a full onboarding sequence: CRM record creation, an AI-drafted personalized welcome email, and an auto-scheduled kickoff call on the calendar with the client pre-attached. One submission, zero manual coordination.',
    stack: ['n8n', 'Notion', 'Gemini', 'Google Calendar', 'Gmail API'],
    metrics: ['single trigger', 'auto-scheduled', 'no human steps'],
  },
  {
    name: 'Healthcare Operations System',
    tagline: '7-scenario Make.com orchestration for a clinic.',
    desc: 'Built 7 coordinated Make.com scenarios handling appointment scheduling, patient follow-ups, staff notifications, and reporting. Replaced a fully manual operations workflow.',
    stack: ['Make.com', 'Google Sheets', 'Gmail', 'WhatsApp'],
    metrics: ['7 scenarios', 'fully automated', 'ops replacement'],
  },
  {
    name: 'RAG Chatbot on Product Catalogue',
    tagline: 'Ask the catalogue anything, get instant answers.',
    desc: 'Trained a retrieval-augmented chatbot on a client equipment catalogue using Supabase pgvector for vector storage, Ollama nomic-embed-text for embeddings, and Groq for inference. Deployed and verified in production.',
    stack: ['Supabase pgvector', 'Ollama', 'Groq', 'Python'],
    metrics: ['RAG pipeline', 'vector search', 'production deployed'],
  },
  {
    name: 'Visitor Tracking Pixel',
    tagline: 'Know when someone views your portfolio.',
    desc: 'A 1x1 tracking pixel embedded in halim.pro fires a webhook on every page load. n8n captures visitor IP, referrer, and user agent, then sends an instant email notification.',
    stack: ['n8n', 'Next.js', 'Gmail API', 'Webhooks'],
    metrics: ['real-time', 'zero dependencies', 'self-built'],
  },
]

export default function Workflows() {
  return (
    <section className={styles.section} id="workflows">
      <div className={styles.inner}>
        <AnimateIn>
          <div className={styles.header}>
            <span className={styles.label}>// workflows</span>
            <h2 className={styles.title}>Automations I've designed and shipped.</h2>
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
        </div>
      </div>
    </section>
  )
}
