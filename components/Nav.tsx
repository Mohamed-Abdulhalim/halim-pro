'use client'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          halim<span>.pro</span>
        </a>
        <div className={styles.links}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>projects</a>
          <a href="#workflows" onClick={(e) => { e.preventDefault(); scrollTo('#workflows') }}>workflows</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('#work') }}>work</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about') }}>about</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className={styles.cta}>get in touch</a>
          <div className={styles.themeWrap}><ThemeToggle /></div>
        </div>
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <div
          className={styles.progress}
          style={{ width: `${progress}%`, opacity: scrolled ? 1 : 0 }}
        />
      </nav>
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.active : ''}`}>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>projects</a>
        <a href="#workflows" onClick={(e) => { e.preventDefault(); scrollTo('#workflows') }}>workflows</a>
        <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('#work') }}>work</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about') }}>about</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className={styles.cta}>get in touch</a>
        <div style={{ marginTop: '1rem' }}><ThemeToggle /></div>
      </div>
    </>
  )
}
