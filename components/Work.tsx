import styles from './Work.module.css'
import AnimateIn from './AnimateIn'

const work = [
  {
    client: 'Education Consultancy Client',
    role: 'AI Study-Abroad Advisor Agent',
    platform: 'n8n',
    outcome: 'Every inbound student lead is qualified and scored without staff, and hot leads reach a human on WhatsApp the moment they qualify.',
    desc: 'A conversational AI agent qualifies leads over chat (nationality, qualifications, program level, budget, and timeline) through natural back-and-forth rather than a rigid form. Structured field extraction runs in parallel, auto-classifies lead heat, and logs everything to a live sheet.',
    tags: ['n8n', 'AI Agent', 'Information Extraction', 'WhatsApp', 'Lead Scoring'],
    status: 'case study',
  },
  {
    client: 'Peaky Scouts / Datalytics',
    role: 'Candidate Routing Automation',
    platform: 'Google Sheets',
    outcome: 'A manual job someone ran every night is gone. Candidate routing now runs unattended, with zero human steps.',
    desc: 'A Google Apps Script automation routes candidates between a Master System sheet and multiple client sheets on a schedule.',
    tags: ['Google Apps Script', 'Workflow Automation', 'Sheets'],
    status: 'completed',
  },
  {
    client: 'Highspire / People Compass',
    role: 'Google Apps Script Portal',
    platform: 'Google Workspace',
    outcome: '300+ people across five organizational tiers work from one portal, each seeing exactly what their role allows.',
    desc: 'A hierarchical role-based portal built from scratch, with a custom permission system, dynamic dashboards, and multi-sheet data orchestration, all in Google Apps Script.',
    tags: ['Google Apps Script', 'RBAC', 'Automation', '300+ users'],
    status: 'completed',
  },
  {
    client: 'E-commerce Fulfillment',
    role: 'Zero-Touch Fulfillment Automation',
    platform: 'n8n',
    outcome: 'From paid order to warehouse alert with no human in the primary path, including recovery when a payment fails.',
    desc: 'An event-driven orchestration layer across Shopify, Stripe, and HubSpot. Handles payment verification, automatic retry on failed payments, CRM upsert logic, and warehouse Slack alerts.',
    tags: ['n8n', 'Shopify', 'Stripe', 'HubSpot', 'Webhook Automation'],
    status: 'demo build',
  },
]

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <AnimateIn>
          <div className={styles.header}>
            <span className={styles.label}>// client work &amp; case studies</span>
            <h2 className={styles.title}>Real operations problems, solved end to end.</h2>
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
                  <p className={styles.outcome}>
                    <span className={styles.outcomeLabel}>result</span>
                    {w.outcome}
                  </p>
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
