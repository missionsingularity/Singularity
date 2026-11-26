import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PromptCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["5"]}>
        <div className={styles["container"]}>
          <div className={styles["prompt-bar"]}>
            <div className={styles["div-10"]}>
              <p className={styles["p-9"]}>{slots[0] ?? "Connect the tools and information available in my workspace."}</p>
            </div>
          </div>
          <div className={styles["div-11"]}>
            <div className={styles["prompt-bar-2"]}>
              <div className={styles["div-12"]}>
                <p className={styles["p-10"]}>{slots[1] ?? "I found your connected tools, documents, and recent activity. I’ve organized the available information so it’s ready to support your next request."}</p>
              </div>
            </div>
          </div>
          <div className={styles["div-13"]}>
            <div className={styles["div-14"]}>
              <div className={styles["prompt-bar-3"]}>
                <div className={styles["div-15"]}>
                  <p className={styles["p-11"]}>{slots[2] ?? "View connect information"}</p>
                </div>
              </div>
              <div className={styles["prompt-bar-4"]}>
                <div className={styles["div-16"]}>
                  <p className={styles["p-12"]}>{slots[3] ?? "Create a plan from this context"}</p>
                </div>
              </div>
              <div className={styles["prompt-bar-5"]}>
                <div className={styles["div-17"]}>
                  <p className={styles["p-13"]}>{slots[4] ?? "Choose what to include"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-18"]}>
              <div className={styles["div-19"]}>
                <p className={styles["p-14"]}>{slots[5] ?? "Suggestions"}</p>
              </div>
            </div>
          </div>
          <div className={styles["div-18"]}>
            <div className={styles["div-20"]} />
            <div className={styles["div-21"]}>
              <p className={styles["p-15"]}>{slots[6] ?? "Thinking completed"}</p>
            </div>
          </div>
        </div>
        <div className={styles["prompt-bar-6"]}>
          <div className={styles["div-22"]}>
            <p className={styles["p-16"]}>{slots[7] ?? "Your reply.."}</p>
          </div>
          <div className={styles["container-2"]}>
            <div className={styles["bar-right"]}>
              <div className={styles["div-23"]}>
                <SvgGraphic className={styles["svg-2"]} html={"<svg class=\"framer-NOIZ8 framer-12ar9xw\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: rgba(17, 22, 46, 0.45); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"150\"><use href=\"#924565091\" data-f2c-idx=\"151\"></use></svg>"} />
              </div>
              <SvgGraphic className={styles["svg-2"]} html={"<svg class=\"framer-cnenU framer-150isse\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: rgba(17, 22, 46, 0.45); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"152\"><use href=\"#3473725508\" data-f2c-idx=\"153\"></use></svg>"} />
              <div className={styles["run-agent"]}>
                <SvgGraphic className={styles["svg-3"]} html={"<svg class=\"framer-dHrVN framer-6p4uvo\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-4b2e1e47-a7ec-4fea-a0ce-eadd74c77d3b, rgb(255, 255, 255)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"155\"><use href=\"#1247979269\" data-f2c-idx=\"156\"></use></svg>"} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
