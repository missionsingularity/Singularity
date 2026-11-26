import styles from "./styles.module.css"

export default function FeatureIndicator({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["inactive"]}>
        <div className={styles["number-container"]}>
          <div className={styles["div-27"]}>
            <h6 className={styles["h6"]}>{slots[0] ?? "01"}</h6>
          </div>
        </div>
        <div className={styles["div-28"]}>
          <h6 className={styles["h6-2"]}>{slots[1] ?? "Intelligent search"}</h6>
        </div>
      </div>
  )
}
