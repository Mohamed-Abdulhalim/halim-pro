import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <span className={styles.label}>// contact</span>
        <h2 className={styles.title}>
          Let's work together<span className={styles.accent}>.</span>
        </h2>
        <p className={styles.sub}>
          Available for workflow automation, app integrations, and ETL projects. No calls required.
          Email works fine — I respond within 24 hours.
        </p>
        <div className={styles.actions}>
          <a href="mailto:mohamed@halim.pro" className={styles.primary}>
            mohamed@halim.pro
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01d5c3c0ed52285018"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            hire on Upwork ↗
          </a>
        </div>
        <div className={styles.note}>
          Async-first. Text-based. Cairo (GMT+2). Available immediately.
        </div>
      </div>
    </section>
  )
}
