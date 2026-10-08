'use client'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import MagneticButton from './MagneticButton'
import SignalLine from './SignalLine'

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  { num: '346K+', label: 'verified records in production' },
  { num: '300+', label: 'users on a portal I built' },
  { num: '50+', label: 'workflows shipped' },
]

const stack = ['Python', 'n8n', 'Supabase', 'RAG', 'LLM APIs', 'Next.js', 'Make.com', 'Zapier']

export default function Hero() {
  const titleLines = ['Messy operations in.', 'Autonomous systems out.']

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          AI agents &amp; automation engineer
        </motion.p>

        <h1 className={styles.headline}>
          {titleLines.map((line, li) => (
            <span key={li} className={styles[`line${li + 1}`]}>
              {line.split(' ').map((word, wi, words) => {
                const offset = words.slice(0, wi).join(' ').length + (wi ? 1 : 0)
                return (
                  <span key={wi} className={styles.word}>
                    {word.split('').map((char, ci) => (
                      <motion.span
                        key={ci}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 + li * 0.18 + (offset + ci) * 0.018, ease }}
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wi < words.length - 1 ? ' ' : ''}
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
        >
          I build AI agents and automation systems that take the busywork off your team:
          lead qualification, data pipelines, CRM sync, and Q&amp;A over your own documents.
          Shipped to production, not just demoed.
        </motion.p>

        <motion.div
          className={styles.stack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease }}
        >
          {stack.map((t) => (
            <span key={t} className={styles.pill}>{t}</span>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease }}
        >
          <MagneticButton href="#projects" className={styles.primary}>
            see the work
          </MagneticButton>
          <MagneticButton href="#contact" className={styles.secondary}>
            describe your problem
          </MagneticButton>
        </motion.div>

        <motion.dl
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease }}
        >
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statNum}>{s.num}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className={styles.visual}>
        <SignalLine />
      </div>
    </section>
  )
}
