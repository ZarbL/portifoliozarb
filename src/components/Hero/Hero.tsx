import { useTheme } from '../../contexts/ThemeContext'
import logoDark from '../../assets/zarbdark.png'
import logoWhite from '../../assets/zarbwhite.png'
import styles from './Hero.module.css'

export function Hero() {
  const { theme } = useTheme()
  const bgImage = theme === 'dark' ? logoDark : logoWhite

  return (
    <section id="home" className={styles.hero}>
      <img
        src={bgImage}
        alt=""
        className={styles.bgImage}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <p className={styles.greeting}>Olá, eu sou</p>
        <h1 className={styles.name}>Luis Zarbielli</h1>
        <p className={styles.role}>
          Full Stack Developer
          <span className={styles.dot}>·</span>
          Vue.js & React
          <span className={styles.dot}>·</span>
          TypeScript
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            Ver projetos
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
