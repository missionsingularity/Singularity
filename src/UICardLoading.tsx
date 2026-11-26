import styles from "./styles.module.css"

export default function UICardLoading({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["completed"]}>
        <div className={styles["div-25"]}>
          <p className={styles["p-17"]}>{slots[0] ?? "Collecting recent updates"}</p>
        </div>
        <div className={styles["div-26"]} />
      </div>
  )
}
