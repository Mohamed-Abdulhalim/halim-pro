import styles from './Work.module.css'
import AnimateIn from './AnimateIn'

const work = [
  {
    client: 'Peaky Scouts / Datalytics',
    role: 'Candidate Routing Automation',
    platform: 'Google Sheets',
    desc: 'Built a Google Apps Script automation that eliminated a manual nightly process entirely — candidate routing between a Master System sheet and multiple client sheets, running unattended on schedule. Zero human steps remaining.',
    tags: ['Google Apps Script', 'Workflow Automation', 'Sheets'],
    status: 'completed',
  },
  {
    client: 'Highspire / People Compass',
    role: 'Google Apps Script Portal',
    platform: 'Google Workspace',
    desc: 'Designed and built a hierarchical role-based portal from scratch, serving 300+ users across a five-tier organizational structure. Custom permission system, dynamic dashboards, and multi-sheet data orchestration — all in Google Apps Script.',
    tags: ['Google Apps Script', 'RBAC', 'Automation', '300+ users'],
    status: 'completed',
  },
  {
    client: 'E-commerce Client',
    role: 'Zero-Touch Fulfillment Automation',
    platform: 'n8n',
    desc: 'Built an event-driven orchestration layer across Shopify, Stripe, and HubSpot. Handles payment verification, automatic retry on failed payments, CRM upsert logic, and warehouse Slack alerts — zero human touchpoints in the primary path, sub-200ms order-to-warehouse latency.',
    tags: ['n8n', 'Shopify', 'Stripe', 'HubSpot', 'Webhook Automation'],
    status: 'case study',
  },
  {
    client: 'Education Consultancy Client',
    role: 'AI Study-Abroad Advisor Agent',
    platform: 'n8n',
    desc: 'Built a conversational AI agent that qualifies inbound student leads over chat — nationality, qualifications, program level, budget, and timeline — through natural back-and-forth rather than a rigid form. Structured field extraction runs in parallel, auto-classifies lead heat, logs everything to a live sheet, and hands hot leads straight to a human via instant WhatsApp alert.',
    tags: ['n8n', 'AI Agent', 'Information Extraction', 'WhatsApp', 'Lead Scoring'],
    status: 'case study',
  },
]

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <AnimateIn>
          <div className={styles.header}>
            <span className={styles.label}>// client work</span>
            <h2 className={styles.title}>Problems I've solved for real businesses.</h2>
          </div>
        </AnimateIn>
        <div className={styles.list}>
          {work.map((w, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className={styles.item}>
                <div className={styles.left}>
                  <div className={styles.index}>0{i + 1}</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.top}>
                    <div>
                      <div className={styles.client}>{w.client}</div>
                      <div className={styles.role}>{w.role} · {w.platform}</div>
                    </div>
                    <span className={`${styles.status} ${styles[w.status.replace(' ', '_')]}`}>
                      {w.status}
                    </span>
                  </div>
                  <p className={styles.desc}>{w.desc}</p>
                  <div className={styles.tags}>
                    {w.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
