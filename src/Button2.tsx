import styles from "./styles.module.css"

export default function Button2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-secondary"]} href="./#features">
        <div className={styles["div-8"]}>
          <p className={styles["p-7"]}>{slots[0] ?? "Explore features"}</p>
        </div>
      </a>
  )
}
