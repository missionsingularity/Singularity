import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <footer className={styles["desktop-7"]}>
        <div className={styles["container-3"]}>
          <div className={styles["large-conversion-message"]}>
            <div className={styles["div-103"]}>
              <h2 className={styles["h2"]}>
                <span className={styles["span-39"]}>{slots[0] ?? "You’ve seen how Singularity works. Now put it to work."}</span>
              </h2>
            </div>
            <div className={styles["div-104"]}>
              <p className={styles["p-57"]}>{slots[1] ?? "Start with one goal, connect the right context, and see what your team can move forward."}</p>
            </div>
            <div className={styles["div-105"]}>
                <a className={styles["desktop-primary"]} href="/#pricing">
                <div className={styles["div-9"]}>
                  <p className={styles["p-8"]}>{slots[2] ?? "Get started"}</p>
                </div>
                <div className={styles["icon-container"]}>
                  <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-4b2e1e47-a7ec-4fea-a0ce-eadd74c77d3b, rgb(255, 255, 255)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"3412\"><use href=\"#1175957644\" data-f2c-idx=\"3413\"></use></svg>"} />
                </div>
              </a>
            </div>
          </div>
          <div className={styles["brand-and-single-product-column"]}>
            <div className={styles["cta-footer-brand"]}>
              <div className={styles["logo"]}>
                <div className={styles["div-106"]}>
                  <img className={styles["img-5"]} src={slots[3] ?? "https://framerusercontent.com/images/8DoDhZvvH61MRvHyhTOuij0SAXI.svg?width=109&height=155"} alt="" />
                </div>
              </div>
              <div className={styles["heading-description"]}>
                <div className={styles["div-107"]}>
                  <h3 className={styles["h3-2"]}>
                    <span className={styles["span-40"]}>{slots[4] ?? "Singularity"}</span>
                  </h3>
                </div>
                <div className={styles["div-108"]}>
                  <p className={styles["p-58"]}>{slots[5] ?? "A smarter way to get things done."}</p>
                </div>
              </div>
            </div>
            <div className={styles["cta-product-links"]}>
              <div className={styles["div-109"]}>
                <h5 className={styles["h5-2"]}>{slots[6] ?? "Product"}</h5>
              </div>
              <div className={styles["div-110"]}>
                <div className={styles["p-59"]}>
                  <a className={styles["a-2"]} href="/#how-it-works">{slots[7] ?? "How it works"}</a>
                </div>
              </div>
              <div className={styles["div-2"]}>
                <div className={styles["p-60"]}>
                  <a className={styles["a-2"]} href="/#features">{slots[8] ?? "Features"}</a>
                </div>
              </div>
              <div className={styles["div-3"]}>
                <div className={styles["p-61"]}>
                  <a className={styles["a-2"]} href="/#capabilities">{slots[9] ?? "Capabilities"}</a>
                </div>
              </div>
              <div className={styles["div-4"]}>
                <div className={styles["p-62"]}>
                  <a className={styles["a-2"]} href="/#pricing">
                    <span className={styles["a-2"]}>{slots[10] ?? "Implementation"}</span>
                  </a>
                </div>
              </div>
              <div className={styles["div-5"]}>
                <div className={styles["p-63"]}>
                  <a className={styles["a-2"]} href="/#security">{slots[11] ?? "Security"}</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["cta-footer-legal-rail"]}>
            <div className={styles["div-111"]}>
              <div className={styles["p-64"]}>
                <span className={styles["span-41"]}>{slots[12] ?? "© 2026 Singularity. All rights reserved."}</span>
              </div>
            </div>
            <div className={styles["cta-legal-links"]} />
          </div>
        </div>
      </footer>
  )
}
