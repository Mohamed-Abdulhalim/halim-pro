'use client'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        halim<span>.pro</span>
      </a>
      <div className={styles.links}>
        <a href="#projects">projects</a>
        <a href="#work">work</a>
        <a href="#about">about</a>
        <a href="#contact" className={styles.cta}>get in touch</a>
      </div>
    </nav>
  )
}
