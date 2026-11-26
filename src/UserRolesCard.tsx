import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function UserRolesCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["4"]}>
        <div className={styles["folder-header"]}>
          <div className={styles["meth-lab-folder-icon"]}>
            <div className={styles["div-29"]}>
              <img className={styles["img-2"]} src={slots[0] ?? "https://framerusercontent.com/images/Uwu6oCqaeQirmXZy5Q37Nkh5gE.png?width=90&height=90"} alt="" />
            </div>
          </div>
          <div className={styles["folder-title-group"]}>
            <div className={styles["folder-name"]}>
              <h6 className={styles["h6-3"]}>{slots[1] ?? "Meth Lab"}</h6>
            </div>
            <div className={styles["folder-item-count"]}>
              <p className={styles["p-20"]}>{slots[2] ?? "159 Items"}</p>
            </div>
          </div>
        </div>
        <div className={styles["invite-controls"]}>
          <div className={styles["invite-heading"]}>
            <h6 className={styles["h6-4"]}>{slots[3] ?? "Share this folder"}</h6>
          </div>
        </div>
        <div className={styles["access-section"]}>
          <div className={styles["access-list"]}>
            <div className={styles["jesse-pinkman-access-row"]}>
              <div className={styles["jesse-pinkman-identity"]}>
                <div className={styles["jesse-pinkman-avatar"]}>
                  <div className={styles["div-30"]}>
                    <img className={styles["img-3"]} src={slots[4] ?? "https://framerusercontent.com/images/YbIkbpKaq9pmlSfHIsww2gkTTJ4.png?width=74&height=74"} alt="" />
                  </div>
                </div>
                <div className={styles["jesse-pinkman-details"]}>
                  <div className={styles["person-name"]}>
                    <h6 className={styles["h6-5"]}>{slots[5] ?? "Jesse Pinkman"}</h6>
                  </div>
                  <div className={styles["email-address"]}>
                    <p className={styles["p-21"]}>{slots[6] ?? "bdech@gmail.com"}</p>
                  </div>
                </div>
              </div>
              <div className={styles["invite-permission-select"]}>
                <div className={styles["permission-label"]}>
                  <p className={styles["p-22"]}>{slots[7] ?? "Can edit"}</p>
                </div>
                <div className={styles["div-31"]} />
              </div>
            </div>
            <div className={styles["gustavo-fring-access-row"]}>
              <div className={styles["gustavo-fring-identity"]}>
                <div className={styles["jesse-pinkman-avatar"]}>
                  <div className={styles["div-30"]}>
                    <img className={styles["img-3"]} src={slots[8] ?? "https://framerusercontent.com/images/nKIuCad9RRDJNuMGgFOiKx2ok.png?width=74&height=74"} alt="" />
                  </div>
                </div>
                <div className={styles["gustavo-fring-details"]}>
                  <div className={styles["person-name-2"]}>
                    <h6 className={styles["h6-6"]}>{slots[9] ?? "Gustavo Fring"}</h6>
                  </div>
                  <div className={styles["email-address-2"]}>
                    <p className={styles["p-23"]}>{slots[10] ?? "thechickenman@gmail.com"}</p>
                  </div>
                </div>
              </div>
              <div className={styles["gustavo-fring-permission-select"]}>
                <div className={styles["permission-label-2"]}>
                  <p className={styles["p-24"]}>{slots[11] ?? "Can view"}</p>
                </div>
                <div className={styles["div-31"]} />
              </div>
            </div>
            <div className={styles["gustavo-fring-access-row"]}>
              <div className={styles["gustavo-fring-identity"]}>
                <div className={styles["jesse-pinkman-avatar"]}>
                  <div className={styles["div-30"]}>
                    <img className={styles["img-3"]} src={slots[12] ?? "https://framerusercontent.com/images/cs3yZGn9FSQ4XwD6sY1pFBvg0k.png?width=74&height=74"} alt="" />
                  </div>
                </div>
                <div className={styles["gustavo-fring-details"]}>
                  <div className={styles["person-name-2"]}>
                    <h6 className={styles["h6-6"]}>{slots[13] ?? "Saul Goodman"}</h6>
                  </div>
                  <div className={styles["email-address-2"]}>
                    <p className={styles["p-23"]}>{slots[14] ?? "bettercallsaul@gmail.com"}</p>
                  </div>
                </div>
              </div>
              <div className={styles["gustavo-fring-permission-select"]}>
                <div className={styles["permission-label-2"]}>
                  <p className={styles["p-24"]}>{slots[15] ?? "Can view"}</p>
                </div>
                <div className={styles["div-31"]} />
              </div>
            </div>
            <div className={styles["jesse-pinkman-access-row"]}>
              <div className={styles["mike-ehrmantraut-identity"]}>
                <div className={styles["jesse-pinkman-avatar"]}>
                  <div className={styles["div-30"]}>
                    <img className={styles["img-3"]} src={slots[16] ?? "https://framerusercontent.com/images/E6Vvalfnflvfo6p24k9l0apIXc.png?width=74&height=74"} alt="" />
                  </div>
                </div>
                <div className={styles["mike-ehrmantraut-details"]}>
                  <div className={styles["person-name-2"]}>
                    <h6 className={styles["h6-6"]}>{slots[17] ?? "Mike Ehrmantraut"}</h6>
                  </div>
                  <div className={styles["email-address-3"]}>
                    <p className={styles["p-25"]}>{slots[18] ?? "poppop@gmail.com"}</p>
                  </div>
                </div>
              </div>
              <div className={styles["gustavo-fring-permission-select"]}>
                <div className={styles["permission-label-2"]}>
                  <p className={styles["p-24"]}>{slots[19] ?? "Can view"}</p>
                </div>
                <div className={styles["div-31"]} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["cursor"]}>
          <div className={styles["cursor-2"]}>
            <div className={styles["div-32"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 26 26\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"706\"><use href=\"#svg-904218853_1448\" data-f2c-idx=\"707\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["comment"]}>
            <div className={styles["jake"]}>
              <p className={styles["p-26"]}>{slots[20] ?? "You"}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
