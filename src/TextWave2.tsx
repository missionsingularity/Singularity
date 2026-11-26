import styles from "./styles.module.css"

export default function TextWave2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-19"]}>
        <div className={styles["span-17"]}>
          <span className={styles["span-18"]}>{slots[0] ?? "A"}</span>
          <span className={styles["span-3"]}>{slots[1] ?? "u"}</span>
          <span className={styles["span-4"]}>{slots[2] ?? "t"}</span>
          <span className={styles["span-3"]}>{slots[3] ?? "o"}</span>
          <span className={styles["span-19"]}>{slots[4] ?? "m"}</span>
          <span className={styles["span-3"]}>{slots[5] ?? "a"}</span>
          <span className={styles["span-4"]}>{slots[6] ?? "t"}</span>
          <span className={styles["span-5"]}>{slots[7] ?? "i"}</span>
          <span className={styles["span-3"]}>{slots[8] ?? "n"}</span>
          <span className={styles["span-2"]}>{slots[9] ?? "g"}</span>
        </div>
      </div>
  )
}
