import styles from "./styles.module.css"

export default function Button({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-secondary-small"]} href="https://framer.link/ridham43">
        <div className={styles["div-7"]}>
          <p className={styles["p-6"]}>{slots[0] ?? "Log in"}</p>
        </div>
      </a>
  )
}
