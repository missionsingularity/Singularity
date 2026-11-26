import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Button4({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-secondary-2"]} href="https://framer.link/ridham43">
        <div className={styles["div-96"]}>
          <p className={styles["p-55"]}>{slots[0] ?? "Get started"}</p>
        </div>
        <div className={styles["icon-container"]}>
          <SvgGraphic className={styles["svg"]} html={"<svg class=\"framer-SYorz framer-x212nc\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-7ce17e0b-526a-4831-8d21-f7773fb57072, rgb(0, 0, 0)); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"2990\"><use href=\"#1175957644\" data-f2c-idx=\"2991\"></use></svg>"} />
        </div>
      </a>
  )
}
