import styles from "./styles.module.css"

export default function NavigationBar({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["logo-container"]}>
          <a className={styles["company-logo"]} href="/#hero">
            <div className={styles["div"]}>
              <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/zXeV3rNdqpRtATyUuajWNzXy7jg.svg?width=109&height=155"} alt="" />
            </div>
          </a>
          <div className={styles["singularity-wordmark"]}>
            <p className={styles["p"]}>{slots[1] ?? "Singularity"}</p>
          </div>
        </div>
        <div className={styles["navigation-links"]}>
          <div className={styles["div-2"]}>
            <div className={styles["p-2"]}>
              <a className={styles["a"]} href="/#features">{slots[2] ?? "Features"}</a>
            </div>
          </div>
          <div className={styles["div-3"]}>
            <div className={styles["p-3"]}>
              <a className={styles["a"]} href="/#capabilities">{slots[3] ?? "Capabilities"}</a>
            </div>
          </div>
          <div className={styles["div-4"]}>
            <div className={styles["p-4"]}>
              <a className={styles["a"]} href="/#pricing">{slots[4] ?? "Implementation"}</a>
            </div>
          </div>
          <div className={styles["div-5"]}>
            <div className={styles["p-5"]}>
              <a className={styles["a"]} href="/#security">{slots[5] ?? "Security"}</a>
            </div>
          </div>
        </div>
        <div className={styles["navigation-actions"]}>
          <div className={styles["div-6"]}>
            <a className={styles["desktop-secondary-small"]} href="https://framer.link/ridham43">
              <div className={styles["div-7"]}>
                <p className={styles["p-6"]}>{slots[6] ?? "Log in"}</p>
              </div>
            </a>
          </div>
        </div>
      </nav>
  )
}
