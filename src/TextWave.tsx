import styles from "./styles.module.css"

export default function TextWave({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-18"]}>
        <div className={styles["span"]}>
          <span className={styles["span-2"]}>{slots[0] ?? "S"}</span>
          <span className={styles["span-3"]}>{slots[1] ?? "e"}</span>
          <span className={styles["span-3"]}>{slots[2] ?? "a"}</span>
          <span className={styles["span-4"]}>{slots[3] ?? "r"}</span>
          <span className={styles["span-3"]}>{slots[4] ?? "c"}</span>
          <span className={styles["span-3"]}>{slots[5] ?? "h"}</span>
          <span className={styles["span-5"]}>{slots[6] ?? "i"}</span>
          <span className={styles["span-3"]}>{slots[7] ?? "n"}</span>
          <span className={styles["span-2"]}>{slots[8] ?? "g"}</span>
        </div>
        <div className={styles["span-6"]}>
          <span className={styles["span-3"]}>{slots[9] ?? "a"}</span>
          <span className={styles["span-3"]}>{slots[10] ?? "c"}</span>
          <span className={styles["span-4"]}>{slots[11] ?? "r"}</span>
          <span className={styles["span-3"]}>{slots[12] ?? "o"}</span>
          <span className={styles["span-7"]}>{slots[13] ?? "s"}</span>
          <span className={styles["span-7"]}>{slots[14] ?? "s"}</span>
        </div>
        <div className={styles["span-8"]}>
          <span className={styles["span-3"]}>{slots[15] ?? "y"}</span>
          <span className={styles["span-3"]}>{slots[16] ?? "o"}</span>
          <span className={styles["span-3"]}>{slots[17] ?? "u"}</span>
          <span className={styles["span-9"]}>{slots[18] ?? "r"}</span>
        </div>
        <div className={styles["span-10"]}>
          <span className={styles["span-11"]}>{slots[19] ?? "s"}</span>
          <span className={styles["span-12"]}>{slots[20] ?? "y"}</span>
          <span className={styles["span-13"]}>{slots[21] ?? "s"}</span>
          <span className={styles["span-14"]}>{slots[22] ?? "t"}</span>
          <span className={styles["span-15"]}>{slots[23] ?? "e"}</span>
          <span className={styles["span-16"]}>{slots[24] ?? "m"}</span>
        </div>
      </div>
  )
}
