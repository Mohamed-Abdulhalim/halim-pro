'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'
import MagneticButton from './MagneticButton'
import AnimateIn from './AnimateIn'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('mohamed@halim.pro')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <AnimateIn>
          <span className={styles.label}>// contact</span>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className={styles.title}>
            Let's work together<span className={styles.accent}>.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className={styles.sub}>
            Available for workflow automation, app integrations, and ETL projects. No calls required.
            Email works fine — I respond within 24 hours.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className={styles.actions}>
            <motion.button
              onClick={copyEmail}
              className={styles.primary}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? 'copied to clipboard!' : 'mohamed@halim.pro'}
            </motion.button>
            <MagneticButton
              href="https://www.upwork.com/freelancers/~01d5c3c0ed52285018"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              hire on Upwork ↗
            </MagneticButton>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className={styles.note}>
            Async-first. Text-based. Cairo (GMT+2). Available immediately.
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
