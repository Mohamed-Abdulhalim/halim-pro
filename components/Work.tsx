import styles from './Work.module.css'

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
    status: 'case study',
  },
  {
    client: 'عتاد (3tadksa.com)',
    role: 'E-commerce Redesign',
    platform: 'Salla',
    desc: 'Full storefront redesign for a heavy truck parts distributor on the Salla platform. Delivered a complete visual overhaul with improved navigation, product structure, and mobile experience.',
    tags: ['Salla', 'E-commerce', 'UI/UX'],
    status: 'completed',
  },
]

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>// client work</span>
          <h2 className={styles.title}>Problems I've solved for real businesses.</h2>
        </div>

        <div className={styles.list}>
          {work.map((w, i) => (
            <div key={i} className={styles.item}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
