import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PricingPlanCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-5"]}>
        <div className={styles["starter-plan"]}>
          <div className={styles["starter-heading"]}>
            <div className={styles["starter-name"]}>
              <div className={styles["plan-name"]}>
                <div className={styles["div-94"]}>
                  <h4 className={styles["h4-4"]}>{slots[0] ?? "Pilot"}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-73"]}>
            <div className={styles["starter-price-3"]}>
              <div className={styles["div-74"]}>
                <div className={styles["div-75"]}>
                  <div className={styles["span-33"]}>
                    <div className={styles["span-34"]}>
                      <div className={styles["span-35"]}>
                        <span className={styles["span-36"]}>{slots[1] ?? "0"}</span>
                        <span className={styles["span-36"]}>{slots[2] ?? "1"}</span>
                        <span className={styles["span-36"]}>{slots[3] ?? "2"}</span>
                        <span className={styles["span-36"]}>{slots[4] ?? "3"}</span>
                        <span className={styles["span-36"]}>{slots[5] ?? "4"}</span>
                        <span className={styles["span-36"]}>{slots[6] ?? "5"}</span>
                        <span className={styles["span-36"]}>{slots[7] ?? "6"}</span>
                        <span className={styles["span-36"]}>{slots[8] ?? "7"}</span>
                        <span className={styles["span-36"]}>{slots[9] ?? "8"}</span>
                        <span className={styles["span-36"]}>{slots[10] ?? "9"}</span>
                        <span className={styles["span-36"]}>{slots[11] ?? "0"}</span>
                        <span className={styles["span-36"]}>{slots[12] ?? "1"}</span>
                        <span className={styles["span-36"]}>{slots[13] ?? "2"}</span>
                        <span className={styles["span-36"]}>{slots[14] ?? "3"}</span>
                        <span className={styles["span-36"]}>{slots[15] ?? "4"}</span>
                        <span className={styles["span-36"]}>{slots[16] ?? "5"}</span>
                        <span className={styles["span-36"]}>{slots[17] ?? "6"}</span>
                        <span className={styles["span-36"]}>{slots[18] ?? "7"}</span>
                        <span className={styles["span-36"]}>{slots[19] ?? "8"}</span>
                        <span className={styles["span-36"]}>{slots[20] ?? "9"}</span>
                        <span className={styles["span-36"]}>{slots[21] ?? "0"}</span>
                        <span className={styles["span-36"]}>{slots[22] ?? "1"}</span>
                        <span className={styles["span-36"]}>{slots[23] ?? "2"}</span>
                        <span className={styles["span-36"]}>{slots[24] ?? "3"}</span>
                        <span className={styles["span-36"]}>{slots[25] ?? "4"}</span>
                        <span className={styles["span-36"]}>{slots[26] ?? "5"}</span>
                        <span className={styles["span-36"]}>{slots[27] ?? "6"}</span>
                        <span className={styles["span-36"]}>{slots[28] ?? "7"}</span>
                        <span className={styles["span-36"]}>{slots[29] ?? "8"}</span>
                        <span className={styles["span-36"]}>{slots[30] ?? "9"}</span>
                        <span className={styles["span-36"]}>{slots[31] ?? "0"}</span>
                        <span className={styles["span-36"]}>{slots[32] ?? "1"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-95"]}>
                <p className={styles["p-54"]}>{slots[33] ?? "2 weeks / project"}</p>
              </div>
            </div>
          </div>
          <div className={styles["div-77"]}>
            <p className={styles["p-44"]}>{slots[34] ?? "Test on a smaller scale before committing to full deployment."}</p>
          </div>
          <div className={styles["starter-divider"]} />
          <div className={styles["div-78"]}>
            <p className={styles["p-45"]}>{slots[35] ?? "INCLUDES"}</p>
          </div>
          <div className={styles["starter-features"]}>
            <div className={styles["div-79"]}>
              <div className={styles["list-7"]}>
                <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2957\"><use href=\"#2883338743\" data-f2c-idx=\"2958\"></use></svg>"} />
                <div className={styles["div-80"]}>
                  <p className={styles["p-46"]}>{slots[36] ?? "Build prototype"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-79"]}>
              <div className={styles["list-7"]}>
                <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2963\"><use href=\"#2883338743\" data-f2c-idx=\"2964\"></use></svg>"} />
                <div className={styles["div-80"]}>
                  <p className={styles["p-46"]}>{slots[37] ?? "Integrate data"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-79"]}>
              <div className={styles["list-7"]}>
                <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2969\"><use href=\"#2883338743\" data-f2c-idx=\"2970\"></use></svg>"} />
                <div className={styles["div-80"]}>
                  <p className={styles["p-46"]}>{slots[38] ?? "Test workflows"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-79"]}>
              <div className={styles["list-7"]}>
                <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2975\"><use href=\"#2883338743\" data-f2c-idx=\"2976\"></use></svg>"} />
                <div className={styles["div-80"]}>
                  <p className={styles["p-46"]}>{slots[39] ?? "Measure performance"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-79"]}>
              <div className={styles["list-7"]}>
                <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2981\"><use href=\"#2883338743\" data-f2c-idx=\"2982\"></use></svg>"} />
                <div className={styles["div-80"]}>
                  <p className={styles["p-46"]}>{slots[40] ?? "Validate results"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-81"]}>
            <a className={styles["desktop-secondary-2"]} href="https://framer.link/ridham43">
              <div className={styles["div-96"]}>
                <p className={styles["p-55"]}>{slots[41] ?? "Get started"}</p>
              </div>
              <div className={styles["icon-container"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-7ce17e0b-526a-4831-8d21-f7773fb57072, rgb(0, 0, 0)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"2990\"><use href=\"#1175957644\" data-f2c-idx=\"2991\"></use></svg>"} />
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}
