import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>halim<span>.pro</span></span>
          <span className={styles.copy}>© {year} Mohamed Abdulhalim</span>
        </div>
        <div className={styles.right}>
          <a href="https://github.com/Mohamed-Abdulhalim" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/halim99" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~01d5c3c0ed52285018" target="_blank" rel="noopener noreferrer">Upwork</a>
          <a href="mailto:mohamed@halim.pro">mohamed@halim.pro</a>
        </div>
      </div>
    </footer>
  )
}
