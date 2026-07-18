'use client'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const titleWords = ['Workflow &', 'AI Integration', 'Engineer.']

  return (
    <section className={styles.hero}>
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.mesh} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.dot} />
          available for freelance work
        </motion.div>

        <h1 className={styles.headline}>
          {titleWords.map((word, wi) => (
            <span key={wi} className={styles[`line${wi + 1}`]}>
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + wi * 0.12 + ci * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Connecting apps, eliminating manual processes, and building trigger-based systems
          that run unattended. n8n, Make, Zapier, and custom Python — whatever the job needs.
          Cairo-based, remote-first, async-preferred.
        </motion.p>

        <motion.div
          className={styles.stack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          {['n8n', 'Make.com', 'Zapier', 'Python', 'REST APIs', 'Google Apps Script', 'Supabase', 'Next.js'].map((t, i) => (
            <motion.span
              key={t}
              className={styles.pill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.1 + i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--border-hover)' }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="#projects" className={styles.primary}>
            see my work
          </MagneticButton>
          <MagneticButton href="#contact" className={styles.secondary}>
            get in touch
          </MagneticButton>
        </motion.div>
      </div>

      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className={styles.cell} />
        ))}
      </div>

      <motion.div
        className={styles.stat1}
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className={styles.statNum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          50+
        </motion.span>
        <span className={styles.statLabel}>workflows built</span>
      </motion.div>

      <motion.div
        className={styles.stat2}
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className={styles.statNum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.75 }}
        >
          5+
        </motion.span>
        <span className={styles.statLabel}>live systems</span>
      </motion.div>

      <motion.div
        className={styles.stat3}
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className={styles.statNum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          5K+
        </motion.span>
        <span className={styles.statLabel}>hours saved/yr</span>
      </motion.div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
