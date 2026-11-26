import styles from "./styles.module.css"

export default function SlotCounter({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-75"]}>
        <div className={styles["span-33"]}>
          <div className={styles["span-34"]}>
            <div className={styles["span-35"]}>
              <span className={styles["span-36"]}>{slots[0] ?? "0"}</span>
              <span className={styles["span-36"]}>{slots[1] ?? "1"}</span>
              <span className={styles["span-36"]}>{slots[2] ?? "2"}</span>
              <span className={styles["span-36"]}>{slots[3] ?? "3"}</span>
              <span className={styles["span-36"]}>{slots[4] ?? "4"}</span>
              <span className={styles["span-36"]}>{slots[5] ?? "5"}</span>
              <span className={styles["span-36"]}>{slots[6] ?? "6"}</span>
              <span className={styles["span-36"]}>{slots[7] ?? "7"}</span>
              <span className={styles["span-36"]}>{slots[8] ?? "8"}</span>
              <span className={styles["span-36"]}>{slots[9] ?? "9"}</span>
              <span className={styles["span-36"]}>{slots[10] ?? "0"}</span>
              <span className={styles["span-36"]}>{slots[11] ?? "1"}</span>
              <span className={styles["span-36"]}>{slots[12] ?? "2"}</span>
              <span className={styles["span-36"]}>{slots[13] ?? "3"}</span>
              <span className={styles["span-36"]}>{slots[14] ?? "4"}</span>
              <span className={styles["span-36"]}>{slots[15] ?? "5"}</span>
              <span className={styles["span-36"]}>{slots[16] ?? "6"}</span>
              <span className={styles["span-36"]}>{slots[17] ?? "7"}</span>
              <span className={styles["span-36"]}>{slots[18] ?? "8"}</span>
              <span className={styles["span-36"]}>{slots[19] ?? "9"}</span>
              <span className={styles["span-36"]}>{slots[20] ?? "0"}</span>
              <span className={styles["span-36"]}>{slots[21] ?? "1"}</span>
              <span className={styles["span-36"]}>{slots[22] ?? "2"}</span>
              <span className={styles["span-36"]}>{slots[23] ?? "3"}</span>
              <span className={styles["span-36"]}>{slots[24] ?? "4"}</span>
              <span className={styles["span-36"]}>{slots[25] ?? "5"}</span>
              <span className={styles["span-36"]}>{slots[26] ?? "6"}</span>
              <span className={styles["span-36"]}>{slots[27] ?? "7"}</span>
              <span className={styles["span-36"]}>{slots[28] ?? "8"}</span>
              <span className={styles["span-36"]}>{slots[29] ?? "9"}</span>
              <span className={styles["span-36"]}>{slots[30] ?? "0"}</span>
              <span className={styles["span-36"]}>{slots[31] ?? "1"}</span>
            </div>
          </div>
        </div>
      </div>
  )
}
