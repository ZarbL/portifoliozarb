import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profilePhoto from '../../assets/luiszarbielli.jpg'
import { RocketMan } from '../RocketMan/RocketMan'
import styles from './About.module.css'

export function About() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const line1X      = useTransform(scrollYProgress, [0, 0.55], [-500, 0])
  const line1Opacity = useTransform(scrollYProgress, [0, 0.45], [0, 1])

  const line2X      = useTransform(scrollYProgress, [0.1, 0.65], [-500, 0])
  const line2Opacity = useTransform(scrollYProgress, [0.1, 0.55], [0, 1])

  const photoY       = useTransform(scrollYProgress, [0.15, 0.65], [160, 0])
  const photoScale   = useTransform(scrollYProgress, [0.15, 0.65], [0.86, 1])
  const photoOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1])

  const rocketY       = useTransform(scrollYProgress, [0, 0.5, 1], [360, 0, -420])
  const rocketOpacity = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [0, 1, 1, 0])
  const rocketScale   = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1, 0.9])

  const bioX       = useTransform(scrollYProgress, [0.3, 0.8], [-400, 0])
  const bioOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.name}>
        <motion.span className={styles.line1} style={{ x: line1X, opacity: line1Opacity }}>
          Luis
        </motion.span>
        <motion.span className={styles.line2} style={{ x: line2X, opacity: line2Opacity }}>
          Zarbielli
        </motion.span>

        <motion.figure
          className={styles.portrait}
          style={{ y: photoY, scale: photoScale, opacity: photoOpacity }}
        >
          <img src={profilePhoto} alt="Luis Zarbielli" />
        </motion.figure>
      </div>

      <div className={styles.rocketAnchor}>
        <motion.div
          className={styles.rocketMotion}
          style={{ y: rocketY, scale: rocketScale, opacity: rocketOpacity }}
        >
          <RocketMan />
        </motion.div>
      </div>

      <motion.div className={styles.bio} style={{ x: bioX, opacity: bioOpacity }}>
        <p>
          Tenho 24 anos, sou desenvolvedor full stack e estudante de Engenharia
          de Software na Universidade de Brasília (UnB). Atualmente trabalho como
          desenvolvedor na{' '}
          <a
            className={styles.highlightLink}
            href="https://IdeiaSpace.com"
            target="_blank"
            rel="noreferrer"
          >
            IdeiaSpace
          </a>
          , empresa pioneira em educação espacial, além de atuar como freelancer.
          Sou movido por criar soluções digitais eficientes, bem pensadas e com
          impacto real.
        </p>
      </motion.div>
    </section>
  )
}
