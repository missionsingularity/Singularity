import styles from "./styles.module.css"

export default function MultimodalCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["1"]}>
        <div className={styles["div-33"]}>
          <div className={styles["div-34"]}>
            <ul className={styles["ul"] + " " + styles["rv-1"]} data-reveal>
              <li className={styles["li"]}>
                <div className={styles["list"]}>
                  <div className={styles["div-35"]} />
                  <div className={styles["div-36"]}>
                    <p className={styles["p-27"]}>{slots[0] ?? "Text"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-2"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-37"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[1] ?? "Audio"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-2"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-39"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[2] ?? "Video"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-3"]}>
                <div className={styles["list-3"]}>
                  <div className={styles["div-40"]} />
                  <div className={styles["div-41"]}>
                    <p className={styles["p-29"]}>{slots[3] ?? "Web page"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-4"]}>
                <div className={styles["list"]}>
                  <div className={styles["div-35"]} />
                  <div className={styles["div-36"]}>
                    <p className={styles["p-27"]}>{slots[4] ?? "Text"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-5"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-37"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[5] ?? "Audio"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-5"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-39"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[6] ?? "Video"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-3"]}>
                <div className={styles["list-3"]}>
                  <div className={styles["div-40"]} />
                  <div className={styles["div-41"]}>
                    <p className={styles["p-29"]}>{slots[7] ?? "Web page"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-4"]}>
                <div className={styles["list"]}>
                  <div className={styles["div-35"]} />
                  <div className={styles["div-36"]}>
                    <p className={styles["p-27"]}>{slots[8] ?? "Text"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-5"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-37"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[9] ?? "Audio"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-5"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-39"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[10] ?? "Video"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-3"]}>
                <div className={styles["list-3"]}>
                  <div className={styles["div-40"]} />
                  <div className={styles["div-41"]}>
                    <p className={styles["p-29"]}>{slots[11] ?? "Web page"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-4"]}>
                <div className={styles["list"]}>
                  <div className={styles["div-35"]} />
                  <div className={styles["div-36"]}>
                    <p className={styles["p-27"]}>{slots[12] ?? "Text"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-5"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-37"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[13] ?? "Audio"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-5"]}>
                <div className={styles["list-2"]}>
                  <div className={styles["div-39"]} />
                  <div className={styles["div-38"]}>
                    <p className={styles["p-28"]}>{slots[14] ?? "Video"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-3"]}>
                <div className={styles["list-3"]}>
                  <div className={styles["div-40"]} />
                  <div className={styles["div-41"]}>
                    <p className={styles["p-29"]}>{slots[15] ?? "Web page"}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles["div-34"]}>
            <ul className={styles["ul-2"] + " " + styles["rv-1"]} data-reveal>
              <li className={styles["li-6"]}>
                <div className={styles["list-4"]}>
                  <div className={styles["div-42"]} />
                  <div className={styles["div-43"]}>
                    <p className={styles["p-30"]}>{slots[16] ?? "Documents"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-7"]}>
                <div className={styles["list-5"]}>
                  <div className={styles["div-44"]} />
                  <div className={styles["div-45"]}>
                    <p className={styles["p-31"]}>{slots[17] ?? "Spreadsheets"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-8"]}>
                <div className={styles["list-6"]}>
                  <div className={styles["div-46"]} />
                  <div className={styles["div-47"]}>
                    <p className={styles["p-32"]}>{slots[18] ?? "Conversations"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-9"]}>
                <div className={styles["list-4"]}>
                  <div className={styles["div-42"]} />
                  <div className={styles["div-43"]}>
                    <p className={styles["p-30"]}>{slots[19] ?? "Documents"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-10"]}>
                <div className={styles["list-5"]}>
                  <div className={styles["div-44"]} />
                  <div className={styles["div-45"]}>
                    <p className={styles["p-31"]}>{slots[20] ?? "Spreadsheets"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-8"]}>
                <div className={styles["list-6"]}>
                  <div className={styles["div-46"]} />
                  <div className={styles["div-47"]}>
                    <p className={styles["p-32"]}>{slots[21] ?? "Conversations"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-9"]}>
                <div className={styles["list-4"]}>
                  <div className={styles["div-42"]} />
                  <div className={styles["div-43"]}>
                    <p className={styles["p-30"]}>{slots[22] ?? "Documents"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-10"]}>
                <div className={styles["list-5"]}>
                  <div className={styles["div-44"]} />
                  <div className={styles["div-45"]}>
                    <p className={styles["p-31"]}>{slots[23] ?? "Spreadsheets"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-8"]}>
                <div className={styles["list-6"]}>
                  <div className={styles["div-46"]} />
                  <div className={styles["div-47"]}>
                    <p className={styles["p-32"]}>{slots[24] ?? "Conversations"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-9"]}>
                <div className={styles["list-4"]}>
                  <div className={styles["div-42"]} />
                  <div className={styles["div-43"]}>
                    <p className={styles["p-30"]}>{slots[25] ?? "Documents"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-10"]}>
                <div className={styles["list-5"]}>
                  <div className={styles["div-44"]} />
                  <div className={styles["div-45"]}>
                    <p className={styles["p-31"]}>{slots[26] ?? "Spreadsheets"}</p>
                  </div>
                </div>
              </li>
              <li className={styles["li-8"]}>
                <div className={styles["list-6"]}>
                  <div className={styles["div-46"]} />
                  <div className={styles["div-47"]}>
                    <p className={styles["p-32"]}>{slots[27] ?? "Conversations"}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
