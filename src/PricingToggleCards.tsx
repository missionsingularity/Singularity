import styles from "./styles.module.css"
import States from "./States"
import { SvgGraphic } from "./RichText"

export default function PricingToggleCards({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-standard"]}>
        <div className={styles["toggle-button"]}>
          <States
            a={<>
              <div className={styles["monthly"]}>
                <div className={styles["div-69"]}>
                  <p className={styles["p-40"]}>{"Standard"}</p>
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["monthly-2"]}>
                <div className={styles["div-69"]}>
                  <div className={styles["p-41"]}>
                    <span className={styles["span-31"]}>{"Standard"}</span>
                  </div>
                </div>
              </div>
            </>}
          />
          <div className={styles["annual-selected"]}>
            <div className={styles["div-70"]}>
              <div className={styles["p-42"]}>
                <span className={styles["span-32"]}>{slots[0] ?? "Express"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["pricing-card-container"]}>
          <div className={styles["div-71"]}>
            <div className={styles["desktop-5"]}>
              <div className={styles["starter-plan"]}>
                <div className={styles["starter-heading"]}>
                  <div className={styles["starter-name"]}>
                    <div className={styles["plan-name"]}>
                      <div className={styles["div-72"]}>
                        <h4 className={styles["h4"]}>{slots[1] ?? "Pilot"}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-73"]}>
                  <div className={styles["starter-price"]}>
                    <div className={styles["div-74"]}>
                      <div className={styles["div-75"]}>
                        <div className={styles["span-33"]}>
                          <div className={styles["span-34"]}>
                            <div className={styles["span-35"]}>
                              <span className={styles["span-36"]}>{slots[2] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[3] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[4] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[5] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[6] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[7] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[8] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[9] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[10] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[11] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[12] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[13] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[14] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[15] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[16] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[17] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[18] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[19] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[20] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[21] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[22] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[23] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[24] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[25] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[26] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[27] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[28] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[29] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[30] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[31] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[32] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[33] ?? "1"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-76"]}>
                      <p className={styles["p-43"]}>{slots[34] ?? "2 weeks / project"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["div-77"]}>
                  <p className={styles["p-44"]}>{slots[35] ?? "Test on a smaller scale before committing to full deployment."}</p>
                </div>
                <div className={styles["starter-divider"]} />
                <div className={styles["div-78"]}>
                  <p className={styles["p-45"]}>{slots[36] ?? "INCLUDES"}</p>
                </div>
                <div className={styles["starter-features"]}>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2957\"><use href=\"#2883338743\" data-f2c-idx=\"2958\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[37] ?? "Build prototype"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2963\"><use href=\"#2883338743\" data-f2c-idx=\"2964\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[38] ?? "Integrate data"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2969\"><use href=\"#2883338743\" data-f2c-idx=\"2970\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[39] ?? "Test workflows"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2975\"><use href=\"#2883338743\" data-f2c-idx=\"2976\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[40] ?? "Measure performance"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2981\"><use href=\"#2883338743\" data-f2c-idx=\"2982\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[41] ?? "Validate results"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-81"]}>
                  <a className={styles["desktop-secondary-2"]} href="https://framer.link/ridham43">
                    <div className={styles["div-9"]}>
                      <p className={styles["p-47"]}>{slots[42] ?? "Get started"}</p>
                    </div>
                    <div className={styles["icon-container"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-7ce17e0b-526a-4831-8d21-f7773fb57072, rgb(0, 0, 0)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"2990\"><use href=\"#1175957644\" data-f2c-idx=\"2991\"></use></svg>"} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-82"]}>
            <div className={styles["desktop-6"]}>
              <div className={styles["starter-plan-2"]}>
                <div className={styles["starter-heading-2"]}>
                  <div className={styles["starter-name-2"]}>
                    <div className={styles["plan-name-2"]}>
                      <div className={styles["div-83"]}>
                        <h4 className={styles["h4-2"]}>{slots[43] ?? "Scale"}</h4>
                      </div>
                    </div>
                    <div className={styles["tag-squared-small-before-shine"]}>
                      <div className={styles["text-badge-container"]}>
                        <div className={styles["div-84"]}>
                          <p className={styles["p-48"]}>{slots[44] ?? "Most popular"}</p>
                        </div>
                      </div>
                      <div className={styles["shiny-frame"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-85"]}>
                  <div className={styles["starter-price-2"]}>
                    <div className={styles["div-74"]}>
                      <div className={styles["div-75"]}>
                        <div className={styles["span-33"]}>
                          <div className={styles["span-34"]}>
                            <div className={styles["span-37"]}>
                              <span className={styles["span-36"]}>{slots[45] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[46] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[47] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[48] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[49] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[50] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[51] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[52] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[53] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[54] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[55] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[56] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[57] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[58] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[59] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[60] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[61] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[62] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[63] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[64] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[65] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[66] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[67] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[68] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[69] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[70] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[71] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[72] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[73] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[74] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[75] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[76] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[77] ?? "2"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-86"]}>
                      <p className={styles["p-49"]}>{slots[78] ?? "2 months / project"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["div-87"]}>
                  <p className={styles["p-50"]}>{slots[79] ?? "Scale tested capabilities across the entire organization."}</p>
                </div>
                <div className={styles["starter-divider-2"]} />
                <div className={styles["div-78"]}>
                  <p className={styles["p-45"]}>{slots[80] ?? "INCLUDES"}</p>
                </div>
                <div className={styles["starter-features-2"]}>
                  <div className={styles["div-88"]}>
                    <div className={styles["list-8"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3055\"><use href=\"#2883338743\" data-f2c-idx=\"3056\"></use></svg>"} />
                      <div className={styles["div-89"]}>
                        <p className={styles["p-51"]}>{slots[81] ?? "Data analytics"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-88"]}>
                    <div className={styles["list-8"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3061\"><use href=\"#2883338743\" data-f2c-idx=\"3062\"></use></svg>"} />
                      <div className={styles["div-89"]}>
                        <p className={styles["p-51"]}>{slots[82] ?? "Configure servers"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-88"]}>
                    <div className={styles["list-8"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3067\"><use href=\"#2883338743\" data-f2c-idx=\"3068\"></use></svg>"} />
                      <div className={styles["div-89"]}>
                        <p className={styles["p-51"]}>{slots[83] ?? "AI agents"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-88"]}>
                    <div className={styles["list-8"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3073\"><use href=\"#2883338743\" data-f2c-idx=\"3074\"></use></svg>"} />
                      <div className={styles["div-89"]}>
                        <p className={styles["p-51"]}>{slots[84] ?? "Legacy systems"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-88"]}>
                    <div className={styles["list-8"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3079\"><use href=\"#2883338743\" data-f2c-idx=\"3080\"></use></svg>"} />
                      <div className={styles["div-89"]}>
                        <p className={styles["p-51"]}>{slots[85] ?? "Train teams"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-90"]}>
                  <a className={styles["desktop-primary-2"]} href="https://framer.link/ridham43">
                    <div className={styles["div-91"]}>
                      <p className={styles["p-52"]}>{slots[86] ?? "Start with team"}</p>
                    </div>
                    <div className={styles["icon-container"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-4b2e1e47-a7ec-4fea-a0ce-eadd74c77d3b, rgb(255, 255, 255)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"3088\"><use href=\"#1175957644\" data-f2c-idx=\"3089\"></use></svg>"} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-71"]}>
            <div className={styles["desktop-5"]}>
              <div className={styles["starter-plan"]}>
                <div className={styles["starter-heading"]}>
                  <div className={styles["starter-name"]}>
                    <div className={styles["plan-name"]}>
                      <div className={styles["div-92"]}>
                        <h4 className={styles["h4-3"]}>{slots[87] ?? "Transform"}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-73"]}>
                  <div className={styles["starter-price-2"]}>
                    <div className={styles["div-74"]}>
                      <div className={styles["div-75"]}>
                        <div className={styles["span-33"]}>
                          <div className={styles["span-34"]}>
                            <div className={styles["span-38"]}>
                              <span className={styles["span-36"]}>{slots[88] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[89] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[90] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[91] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[92] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[93] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[94] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[95] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[96] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[97] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[98] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[99] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[100] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[101] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[102] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[103] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[104] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[105] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[106] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[107] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[108] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[109] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[110] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[111] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[112] ?? "4"}</span>
                              <span className={styles["span-36"]}>{slots[113] ?? "5"}</span>
                              <span className={styles["span-36"]}>{slots[114] ?? "6"}</span>
                              <span className={styles["span-36"]}>{slots[115] ?? "7"}</span>
                              <span className={styles["span-36"]}>{slots[116] ?? "8"}</span>
                              <span className={styles["span-36"]}>{slots[117] ?? "9"}</span>
                              <span className={styles["span-36"]}>{slots[118] ?? "0"}</span>
                              <span className={styles["span-36"]}>{slots[119] ?? "1"}</span>
                              <span className={styles["span-36"]}>{slots[120] ?? "2"}</span>
                              <span className={styles["span-36"]}>{slots[121] ?? "3"}</span>
                              <span className={styles["span-36"]}>{slots[122] ?? "4"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-86"]}>
                      <p className={styles["p-49"]}>{slots[123] ?? "4 months / project"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["div-77"]}>
                  <p className={styles["p-44"]}>{slots[124] ?? "Move towards intelligent systems capable of operating independently."}</p>
                </div>
                <div className={styles["starter-divider"]} />
                <div className={styles["div-78"]}>
                  <p className={styles["p-45"]}>{slots[125] ?? "INCLUDES"}</p>
                </div>
                <div className={styles["starter-features"]}>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3150\"><use href=\"#2883338743\" data-f2c-idx=\"3151\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[126] ?? "Automate processes"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3156\"><use href=\"#2883338743\" data-f2c-idx=\"3157\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[127] ?? "Predict outcomes"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3162\"><use href=\"#2883338743\" data-f2c-idx=\"3163\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[128] ?? "Decision intelligence"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3168\"><use href=\"#2883338743\" data-f2c-idx=\"3169\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[129] ?? "Reduce costs"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-79"]}>
                    <div className={styles["list-7"]}>
                      <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"3174\"><use href=\"#2883338743\" data-f2c-idx=\"3175\"></use></svg>"} />
                      <div className={styles["div-80"]}>
                        <p className={styles["p-46"]}>{slots[130] ?? "Simulate scenarios"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-81"]}>
                  <a className={styles["desktop-secondary-2"]} href="https://framer.link/ridham43">
                    <div className={styles["div-93"]}>
                      <p className={styles["p-53"]}>{slots[131] ?? "Talk to sales"}</p>
                    </div>
                    <div className={styles["icon-container"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-7ce17e0b-526a-4831-8d21-f7773fb57072, rgb(0, 0, 0)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"3183\"><use href=\"#1175957644\" data-f2c-idx=\"3184\"></use></svg>"} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
