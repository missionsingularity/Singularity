import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Sparkles({ slots = [] }: { slots?: string[] }) {
  return (
      <SvgGraphic className={styles["svg-3"]} html={"<svg class=\"framer-Efhma framer-13yaa8t\" role=\"presentation\" viewBox=\"0 0 24 24\" data-f2c-idx=\"212\"><use href=\"#3008297960\" data-f2c-idx=\"213\"></use></svg>"} />
  )
}
