import styles from './About.module.css'

const pillars = [
  {
    title: 'Data pipelines',
    body: 'Scrape, clean, enrich, push. Phone-verified records at scale. Unattended runs on GitHub Actions or cron. Full pipeline architecture design.',
  },
  {
    title: 'Automation systems',
    body: 'Google Apps Script portals with role-based access, multi-sheet orchestration, and org-spanning workflows. Replaces manual nightly processes permanently.',
  },
  {
    title: 'Full-stack tools',
    body: 'Flask and Next.js apps backed by Supabase. OAuth integrations, REST APIs, production deployments. Tools that bookkeepers and operators actually use.',
  },
]

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.label}>// about</span>
            <h2 className={styles.title}>
              Remote engineer.<br />
              Async-first.<br />
              Cairo.
            </h2>
            <p className={styles.bio}>
              I'm Mohamed, a freelance data and automation engineer. My background spans BPO operations at Concentrix (Microsoft Azure) and Transcom (TUI UK), a degree in Management Information Systems, and several years of independent client work across Upwork and direct contracts.
            </p>
            <p className={styles.bio}>
              I prefer text-based async communication. I work across time zones without friction. I don't bill by the hour for things that should run automatically.
            </p>
            <div className={styles.platforms}>
              <span className={styles.platformLabel}>find me on</span>
              <div className={styles.platformLinks}>
                {[
                  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01b7a9e9b4e3b8f9a1' },
                  { label: 'GitHub', href: 'https://github.com/Mohamed-Abdulhalim' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/mohamedalim' },
                ].map(p => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
                    {p.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  )
}
