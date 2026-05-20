import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import styles from './Contact.module.css'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    social: 'linkedin',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ZarbL',
    social: 'github',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/luiszarbielli',
    social: 'instagram',
    icon: FaInstagram,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
    social: 'youtube',
    icon: FaYoutube,
  },
]

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.copy}>
        <p>Contato</p>
        <h2>Vamos conversar?</h2>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formInner}>
          <form
            className={styles.form}
            onSubmit={event => event.preventDefault()}
          >
            <p className={styles.formHeading}>Get In Touch</p>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                placeholder="Name"
                required
                type="text"
              />
            </div>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                placeholder="Email"
                required
                type="email"
              />
            </div>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                placeholder="Subject"
                required
                type="text"
              />
            </div>
            <div className={styles.formField}>
              <textarea
                className={styles.inputField}
                cols={30}
                placeholder="Message"
                required
                rows={3}
              />
            </div>
            <button className={styles.sendMessageBtn} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ul className={styles.socialList} aria-label="Redes sociais">
        {socialLinks.map(({ href, icon: Icon, label, social }) => (
          <li className={styles.iconContent} key={label}>
            <a
              href={href}
              aria-label={label}
              data-social={social}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.filled} />
              <Icon aria-hidden="true" />
            </a>
            <div className={styles.tooltip}>{label}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
