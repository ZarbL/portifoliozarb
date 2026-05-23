import { useState } from 'react'
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

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Erro ao enviar mensagem.')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar mensagem.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.copy}>
        <p>Contato</p>
        <h2>Vamos conversar?</h2>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formInner}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.formHeading}>Get In Touch</p>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                placeholder="Name"
                required
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                placeholder="Email"
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                placeholder="Subject"
                required
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div className={styles.formField}>
              <textarea
                className={styles.inputField}
                cols={30}
                placeholder="Message"
                required
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'success' && (
              <p className={styles.successMsg}>Mensagem enviada com sucesso!</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>{errorMsg}</p>
            )}

            <button
              className={styles.sendMessageBtn}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Send Message'}
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
