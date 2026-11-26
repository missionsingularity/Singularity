import styles from "./styles.module.css"

export default function TextWave3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-33"]}>
        <div className={styles["span-20"]}>
          <span className={styles["span-21"]}>{slots[0] ?? "S"}</span>
          <span className={styles["span-22"]}>{slots[1] ?? "u"}</span>
          <span className={styles["span-23"]}>{slots[2] ?? "m"}</span>
          <span className={styles["span-24"]}>{slots[3] ?? "m"}</span>
          <span className={styles["span-25"]}>{slots[4] ?? "a"}</span>
          <span className={styles["span-26"]}>{slots[5] ?? "r"}</span>
          <span className={styles["span-27"]}>{slots[6] ?? "i"}</span>
          <span className={styles["span-7"]}>{slots[7] ?? "s"}</span>
          <span className={styles["span-5"]}>{slots[8] ?? "i"}</span>
          <span className={styles["span-3"]}>{slots[9] ?? "n"}</span>
          <span className={styles["span-2"]}>{slots[10] ?? "g"}</span>
        </div>
        <div className={styles["span-28"]}>
          <span className={styles["span-7"]}>{slots[11] ?? "s"}</span>
          <span className={styles["span-2"]}>{slots[12] ?? "p"}</span>
          <span className={styles["span-4"]}>{slots[13] ?? "r"}</span>
          <span className={styles["span-3"]}>{slots[14] ?? "e"}</span>
          <span className={styles["span-3"]}>{slots[15] ?? "a"}</span>
          <span className={styles["span-2"]}>{slots[16] ?? "d"}</span>
          <span className={styles["span-7"]}>{slots[17] ?? "s"}</span>
          <span className={styles["span-3"]}>{slots[18] ?? "h"}</span>
          <span className={styles["span-3"]}>{slots[19] ?? "e"}</span>
          <span className={styles["span-3"]}>{slots[20] ?? "e"}</span>
          <span className={styles["span-4"]}>{slots[21] ?? "t"}</span>
        </div>
      </div>
  )
}
