import styles from "./styles.module.css"

export default function CapabilityCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["6"]}>
        <div className={styles["overall-container"] + " " + styles["rv-2"]} data-reveal>
          <div className={styles["prompt-card"]}>
            <div className={styles["div-48"]}>
              <div className={styles["div-49"]}>
                <div className={styles["div-50"]}>
                  <div className={styles["div-51"] + " " + styles["loop-1"]} />
                  <div className={styles["div-51"] + " " + styles["loop-2"]} />
                  <div className={styles["div-51"] + " " + styles["loop-3"]} />
                  <div className={styles["div-51"] + " " + styles["loop-4"]} />
                  <div className={styles["div-51"] + " " + styles["loop-5"]} />
                  <div className={styles["div-51"] + " " + styles["loop-6"]} />
                  <div className={styles["div-52"] + " " + styles["loop-7"]} />
                  <div className={styles["div-52"] + " " + styles["loop-8"]} />
                  <div className={styles["div-53"] + " " + styles["loop-9"]} />
                </div>
              </div>
            </div>
            <div className={styles["div-54"]}>
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
            </div>
          </div>
          <div className={styles["div-55"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "116ms" }}>
            <div className={styles["p-34"]}>
              <div className={styles["span-29"]}>
                <span className={styles["span-2"]}>{slots[22] ?? "S"}</span>
                <span className={styles["span-3"]}>{slots[23] ?? "e"}</span>
                <span className={styles["span-5"]}>{slots[24] ?? "l"}</span>
                <span className={styles["span-3"]}>{slots[25] ?? "e"}</span>
                <span className={styles["span-3"]}>{slots[26] ?? "c"}</span>
                <span className={styles["span-4"]}>{slots[27] ?? "t"}</span>
                <span className={styles["span-5"]}>{slots[28] ?? "i"}</span>
                <span className={styles["span-3"]}>{slots[29] ?? "n"}</span>
                <span className={styles["span-2"]}>{slots[30] ?? "g"}</span>
              </div>
              <div className={styles["span-30"]}>
                <span className={styles["span-19"]}>{slots[31] ?? "m"}</span>
                <span className={styles["span-3"]}>{slots[32] ?? "o"}</span>
                <span className={styles["span-2"]}>{slots[33] ?? "d"}</span>
                <span className={styles["span-3"]}>{slots[34] ?? "e"}</span>
                <span className={styles["span-5"]}>{slots[35] ?? "l"}</span>
              </div>
            </div>
          </div>
          <div className={styles["model-container"]}>
            <div className={styles["model-info"]}>
              <div className={styles["image-container"]}>
                <div className={styles["div-56"]}>
                  <img className={styles["img-4"]} src={slots[36] ?? "https://framerusercontent.com/images/8KaKKxU7M28Rzb4GcWcA3KaCnQ4.png?width=100&height=100"} alt="" />
                </div>
              </div>
              <div className={styles["div-57"]}>
                <p className={styles["p-35"]}>{slots[37] ?? "Chatgpt"}</p>
              </div>
            </div>
            <div className={styles["model-info"]}>
              <div className={styles["image-container-2"]}>
                <div className={styles["div-56"]}>
                  <img className={styles["img-4"]} src={slots[38] ?? "https://framerusercontent.com/images/D78PPxXxhqJnQlCBn2cmf5ueuQ.png?width=100&height=100"} alt="" />
                </div>
              </div>
              <div className={styles["div-58"]}>
                <p className={styles["p-36"]}>{slots[39] ?? "Claude"}</p>
              </div>
              <div className={styles["div-59"]} />
            </div>
            <div className={styles["selector"]} />
          </div>
        </div>
      </div>
  )
}
