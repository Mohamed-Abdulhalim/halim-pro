import styles from './Workflows.module.css'

const workflows = [
  {
    name: 'LinkedIn Job Scraper',
    tagline: 'Daily job alerts, zero manual effort.',
    desc: 'Apify-powered scraper triggered on a schedule via n8n. Fetches fresh LinkedIn listings, aggregates results, and delivers a formatted HTML digest by email every morning.',
    stack: ['n8n', 'Apify', 'Gmail API'],
    metrics: ['daily schedule', 'email digest', 'zero touch'],
  },
  {
    name: 'Lead Intelligence Pipeline',
    tagline: 'Inbound leads enriched and routed automatically.',
    desc: 'Tally form submission triggers enrichment via Hunter.io, LLM-based ICP scoring, HubSpot CRM upsert, and Slack alert for qualified leads. Unqualified leads route to Airtable nurture queue.',
    stack: ['n8n', 'Hunter.io', 'HubSpot', 'Airtable', 'OpenAI'],
    metrics: ['sub-second', 'AI scoring', 'auto-routing'],
  },
  {
    name: 'Client Onboarding Automation',
    tagline: 'New client intake without the back-and-forth.',
    desc: 'Tally form triggers a full onboarding sequence: contract generation, welcome email, CRM record creation, and internal Slack notification. All steps run unattended from a single form submission.',
    stack: ['n8n', 'Tally', 'Gmail API', 'Slack'],
    metrics: ['single trigger', 'multi-step', 'no human steps'],
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
        <div className={styles.header}>
          <span className={styles.label}>// workflows</span>
          <h2 className={styles.title}>Automations I've designed and shipped.</h2>
        </div>
        <div className={styles.grid}>
          {workflows.map((w, i) => (
            <div key={i} className={styles.card}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
