import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiCss,
  SiEslint,
  SiArduino,
  SiCplusplus,
  SiEspressif,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPlatformio,
  SiPython,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si'
import styles from './Stacks.module.css'

type StackItem = {
  label: string
  icon: IconType
  color: string
  href?: string
}

const stackGroups: Array<{ label: string; items: StackItem[] }> = [
  {
    label: 'Embarcados',
    items: [
      { label: 'ESP32', icon: SiEspressif, color: '#e7352c' },
      { label: 'Arduino', icon: SiArduino, color: '#00979d' },
      { label: 'C++', icon: SiCplusplus, color: '#00599c' },
      { label: 'PlatformIO', icon: SiPlatformio, color: '#f5822a' },
    ],
  },
  {
    label: 'Workflow',
    items: [
      { label: 'Git', icon: SiGit, color: '#f05032' },
      {
        label: 'GitHub',
        icon: SiGithub,
        color: '#8f8f8f',
        href: 'https://github.com/ZarbL',
      },
      { label: 'Vite', icon: SiVite, color: '#a855f7' },
      { label: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { label: 'Deploy', icon: SiVercel, color: '#b8b8b8' },
      { label: 'Clean Code', icon: SiEslint, color: '#4b32c3' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { label: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { label: 'Ruby', icon: SiRuby, color: '#cc342d' },
      { label: 'Ruby on Rails', icon: SiRubyonrails, color: '#d30001' },
      { label: 'Python', icon: SiPython, color: '#3776ab' },
      { label: 'APIs REST', icon: SiOpenapiinitiative, color: '#6ba539' },
      { label: 'Express', icon: SiExpress, color: '#8f8f8f' },
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { label: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { label: 'React', icon: SiReact, color: '#61dafb' },
      { label: 'Vue.js', icon: SiVuedotjs, color: '#42b883' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { label: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { label: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { label: 'CSS', icon: SiCss, color: '#1572b6' },
    ],
  },
]

export function Stacks() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const titleX = useTransform(scrollYProgress, [0, 0.6], [420, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 1])
  const embeddedY = useTransform(scrollYProgress, [0, 0.26], [-420, 0])
  const embeddedOpacity = useTransform(scrollYProgress, [0, 0.16], [0, 1])
  const workflowY = useTransform(scrollYProgress, [0.08, 0.36], [-420, 0])
  const workflowOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1])
  const backendY = useTransform(scrollYProgress, [0.16, 0.46], [-420, 0])
  const backendOpacity = useTransform(scrollYProgress, [0.16, 0.32], [0, 1])
  const frontendY = useTransform(scrollYProgress, [0.24, 0.56], [-420, 0])
  const frontendOpacity = useTransform(scrollYProgress, [0.24, 0.42], [0, 1])

  const groupMotion = {
    Embarcados: { y: embeddedY, opacity: embeddedOpacity },
    Workflow: { y: workflowY, opacity: workflowOpacity },
    Backend: { y: backendY, opacity: backendOpacity },
    Frontend: { y: frontendY, opacity: frontendOpacity },
  }

  return (
    <section id="skills" className={styles.stacks} ref={ref}>
      <motion.div
        className={styles.content}
      >
        {stackGroups.map(group => (
          <motion.section
            className={styles.group}
            key={group.label}
            style={groupMotion[group.label as keyof typeof groupMotion]}
          >
            <h3>{group.label}</h3>
            <div className={styles.items}>
              {group.items.map(item => {
                const ItemTag = item.href ? 'a' : 'span'

                return (
                  <ItemTag
                    className={styles.item}
                    href={item.href}
                    key={item.label}
                    rel={item.href ? 'noreferrer' : undefined}
                    target={item.href ? '_blank' : undefined}
                  >
                    <item.icon
                      className={styles.icon}
                      style={{ color: item.color }}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </ItemTag>
                )
              })}
            </div>
          </motion.section>
        ))}
      </motion.div>

      <motion.div
        className={styles.heading}
        style={{ x: titleX, opacity: titleOpacity }}
      >
        <span>My</span>
        <span>Stacks</span>
      </motion.div>
    </section>
  )
}
