import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Button3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-primary"]} href="./#pricing">
        <div className={styles["div-9"]}>
          <p className={styles["p-8"]}>{slots[0] ?? "Get started"}</p>
        </div>
        <div className={styles["icon-container"]}>
          <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-4b2e1e47-a7ec-4fea-a0ce-eadd74c77d3b, rgb(255, 255, 255)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"96\"><use href=\"#1175957644\" data-f2c-idx=\"97\"></use></svg>"} />
        </div>
      </a>
  )
}
