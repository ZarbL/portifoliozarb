import { motion } from 'framer-motion'
import styles from './ProjectsIntro.module.css'

export function ProjectsIntro() {
  return (
    <section id="projects" className={styles.projectsIntro}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.45, once: false }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Projetos
      </motion.h2>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.45, once: false }}
        transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
      >
        <div className={styles.scrolldown}>
          <div className={styles.chevrons}>
            <div className={styles.chevrondown} />
            <div className={styles.chevrondown} />
          </div>
        </div>
        <span>Role para mais</span>
      </motion.div>
    </section>
  )
}
