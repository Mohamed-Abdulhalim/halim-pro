'use client'
import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'
import MagneticButton from './MagneticButton'
import AnimateIn from './AnimateIn'

const EMAIL = 'mohamed@halim.pro'
const WEBHOOK = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || 'https://halim99-n8n.hf.space/webhook/halim-contact-form'

const frequencies = [
  'Several times a day',
  'Daily',
  'Weekly',
  'Monthly or less',
  'Not sure yet',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    email: '',
    input: '',
    process: '',
    output: '',
    frequency: frequencies[1],
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const openMail = () => {
    const body = [
      `What comes in:\n${form.input}`,
      `What has to happen:\n${form.process}`,
      `Where it should end up:\n${form.output}`,
      `How often:\n${form.frequency}`,
      `Reply to:\n${form.email}`,
    ].join('\n\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Automation request')}&body=${encodeURIComponent(body)}`
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!WEBHOOK) {
      openMail()
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'halim.pro', sentAt: new Date().toISOString() }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
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
            Describe the process that eats your team&apos;s time. No call needed to start.
            I reply within 24 hours with how I&apos;d automate it.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          {status === 'sent' ? (
            <div className={styles.done}>
              <div className={styles.doneTitle}>Got it.</div>
              <p className={styles.doneText}>
                {WEBHOOK
                  ? 'Your request is in. Expect a reply at the email you gave within 24 hours.'
                  : 'Your email app should have opened with everything filled in. Hit send and I will reply within 24 hours.'}
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>01 · what comes in</span>
                <textarea
                  required
                  rows={2}
                  value={form.input}
                  onChange={set('input')}
                  placeholder="e.g. order emails, PDF invoices, form submissions"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>02 · what has to happen</span>
                <textarea
                  required
                  rows={3}
                  value={form.process}
                  onChange={set('process')}
                  placeholder="e.g. someone copies the details into a sheet and checks them"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>03 · where it should end up</span>
                <textarea
                  required
                  rows={2}
                  value={form.output}
                  onChange={set('output')}
                  placeholder="e.g. HubSpot, a Slack alert, a Google Sheet"
                />
              </label>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>how often it happens</span>
                  <select value={form.frequency} onChange={set('frequency')}>
                    {frequencies.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </label>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>your email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <motion.button
                type="submit"
                className={styles.submit}
                whileTap={{ scale: 0.97 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'sending…' : 'send my process →'}
              </motion.button>
              {status === 'error' && (
                <p className={styles.error}>
                  That didn&apos;t go through. Email me directly at {EMAIL}.
                </p>
              )}
            </form>
          )}
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className={styles.actions}>
            <motion.button
              onClick={copyEmail}
              className={styles.secondary}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? 'copied to clipboard!' : `or email ${EMAIL}`}
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

        <AnimateIn delay={0.5}>
          <div className={styles.note}>
            Async-first · Cairo, Egypt · Select projects
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
