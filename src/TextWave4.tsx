import styles from "./styles.module.css"

export default function TextWave4({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-34"]}>
        <div className={styles["span-29"]}>
          <span className={styles["span-2"]}>{slots[0] ?? "S"}</span>
          <span className={styles["span-3"]}>{slots[1] ?? "e"}</span>
          <span className={styles["span-5"]}>{slots[2] ?? "l"}</span>
          <span className={styles["span-3"]}>{slots[3] ?? "e"}</span>
          <span className={styles["span-3"]}>{slots[4] ?? "c"}</span>
          <span className={styles["span-4"]}>{slots[5] ?? "t"}</span>
          <span className={styles["span-5"]}>{slots[6] ?? "i"}</span>
          <span className={styles["span-3"]}>{slots[7] ?? "n"}</span>
          <span className={styles["span-2"]}>{slots[8] ?? "g"}</span>
        </div>
        <div className={styles["span-30"]}>
          <span className={styles["span-19"]}>{slots[9] ?? "m"}</span>
          <span className={styles["span-3"]}>{slots[10] ?? "o"}</span>
          <span className={styles["span-2"]}>{slots[11] ?? "d"}</span>
          <span className={styles["span-3"]}>{slots[12] ?? "e"}</span>
          <span className={styles["span-5"]}>{slots[13] ?? "l"}</span>
        </div>
      </div>
  )
}
