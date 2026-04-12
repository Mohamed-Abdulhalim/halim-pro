import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          available for freelance work
        </div>

        <h1 className={styles.headline}>
          <span className={styles.line1}>Data Operations</span>
          <span className={styles.line2}>& Automation</span>
          <span className={styles.line3}>Engineer<span className={styles.accent}>.</span></span>
        </h1>

        <p className={styles.sub}>
          ETL pipelines, automation systems, and full-stack tools that run unattended and scale.
          400K+ records in production. Cairo-based, remote-first, async-preferred.
        </p>

        <div className={styles.stack}>
          {['Python', 'Next.js', 'Flask', 'Supabase', 'Google Apps Script', 'AppSheet'].map(t => (
            <span key={t} className={styles.pill}>{t}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>see my work</a>
          <a href="#contact" className={styles.secondary}>get in touch</a>
        </div>
      </div>

      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className={styles.cell} />
        ))}
      </div>

      <div className={styles.stat1} aria-hidden="true">
        <span className={styles.statNum}>346K+</span>
        <span className={styles.statLabel}>verified records</span>
      </div>

      <div className={styles.stat2} aria-hidden="true">
        <span className={styles.statNum}>5+</span>
        <span className={styles.statLabel}>live systems</span>
      </div>
    </section>
  )
}
