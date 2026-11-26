import styles from "./styles.module.css"
import States from "./States"

export default function FAQsCardContainer({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["1-2"]}>
        <div className={styles["div-98"]}>
          <div className={styles["expanded"]}>
            <div className={styles["outer-container"]}>
              <div className={styles["text-content"]}>
                <div className={styles["div-99"]}>
                  <h6 className={styles["h6-7"]}>{slots[0] ?? "How quickly can we get started?"}</h6>
                </div>
                <div className={styles["div-100"]}>
                  <p className={styles["p-56"]}>{slots[1] ?? "Most teams can begin with one focused workflow, then expand as their needs grow."}</p>
                </div>
              </div>
              <div className={styles["icon-container-2"]}>
                <div className={styles["div-101"]} />
              </div>
              <div className={styles["white-overlay-frame"]} />
            </div>
          </div>
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"What tools can Singularity connect to?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"What tools can Singularity connect to?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"Singularity connects with the tools your team already uses to keep information and work in sync."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Can we start with one workflow?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Can we start with one workflow?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"Yes. Start small, validate the setup with your team, and add more workflows when ready."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Does Singularity replace our existing tools?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Does Singularity replace our existing tools?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"No. Singularity works across your current stack, helping your tools operate as one connected system."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Can we control what Singularity can access?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Can we control what Singularity can access?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"Singularity uses secure access controls and keeps your information within the permissions you define."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"How is our company data protected?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"How is our company data protected?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"Singularity protects company data with access controls and permissions your organization defines."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Can workflows be customized for our team?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"Can workflows be customized for our team?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"Yes. Each workflow can match your processes, terminology, tools, and approval requirements."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
        <div className={styles["div-102"]}>
          <States
            a={<>
              <div className={styles["collapsed"]}>
                <div className={styles["outer-container-2"]}>
                  <div className={styles["text-content-2"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"What support is included during rollout?"}</h6>
                    </div>
                  </div>
                  <div className={styles["icon-container-2"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-2"]} />
                </div>
              </div>
            </>}
            b={<>
              <div className={styles["expanded-2"]}>
                <div className={styles["outer-container"]}>
                  <div className={styles["text-content-3"]}>
                    <div className={styles["div-99"]}>
                      <h6 className={styles["h6-7"]}>{"What support is included during rollout?"}</h6>
                    </div>
                    <div className={styles["div-100"]}>
                      <p className={styles["p-56"]}>{"We help with setup, workflow planning, testing, and team adoption throughout the rollout."}</p>
                    </div>
                  </div>
                  <div className={styles["icon-container-3"]}>
                    <div className={styles["div-101"]} />
                  </div>
                  <div className={styles["white-overlay-frame-3"]} />
                </div>
              </div>
            </>}
          />
        </div>
      </div>
  )
}
