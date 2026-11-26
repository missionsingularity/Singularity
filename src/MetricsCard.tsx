import styles from "./styles.module.css"

export default function MetricsCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-2"]}>
        <div className={styles["div-60"]}>
          <h3 className={styles["h3"]}>{slots[0] ?? "3.2×"}</h3>
        </div>
        <div className={styles["div-61"]}>
          <p className={styles["p-37"]}>{slots[1] ?? "workflow throughput"}</p>
        </div>
      </div>
  )
}
