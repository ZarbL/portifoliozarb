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
    </section>
  )
}
