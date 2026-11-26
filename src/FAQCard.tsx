import styles from "./styles.module.css"

export default function FAQCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["expanded"]}>
        <div className={styles["outer-container"]}>
          <div className={styles["text-content"]}>
            <div className={styles["div-99"]}>
              <h6 className={styles["h6-7"]}>{slots[0] ?? "How quickly can we get started?"}</h6>
            </div>
            <div className={styles["div-100"]}>
              <p className={styles["p-56"]}>{slots[1] ?? "Most teams can begin with one focused workflow, then expand as their needs grow."}</p>
            </div>
          </div>
          <div className={styles["icon-container-2"]}>
            <div className={styles["div-101"]} />
          </div>
          <div className={styles["white-overlay-frame"]} />
        </div>
      </div>
  )
}
