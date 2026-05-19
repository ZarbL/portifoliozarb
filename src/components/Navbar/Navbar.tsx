import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import logoDark from '../../assets/zarbdark.png'
import logoWhite from '../../assets/zarbwhite.png'
import { Switch } from '../Switch/Switch'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const logo = theme === 'dark' ? logoWhite : logoDark

  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.logo}>
        <img src={logo} alt="ZarbL" />
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <Switch />

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
