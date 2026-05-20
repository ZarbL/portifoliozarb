import styles from './RocketMan.module.css'

export function RocketMan() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.rocket}>
        <div className={styles.loader}>
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className={styles.base}>
            <span />
            <div className={styles.face} />
          </div>
        </div>
        <div className={styles.longfazers}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
