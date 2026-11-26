import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PricingList({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["list-7"]}>
        <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-30Bgq framer-1nlginm\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m6trwb: 0; --21h8s6: var(--token-6e1a1ed1-ae7c-48f6-8052-04efff6cc0ab, rgb(11, 186, 26)); --pgex8v: 1.5; opacity: 1;\" data-f2c-idx=\"2957\"><use href=\"#2883338743\" data-f2c-idx=\"2958\"></use></svg>"} />
        <div className={styles["div-80"]}>
          <p className={styles["p-46"]}>{slots[0] ?? "Build prototype"}</p>
        </div>
      </div>
  )
}
