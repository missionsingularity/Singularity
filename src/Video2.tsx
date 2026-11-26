import styles from "./styles.module.css"

export default function Video2({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video"]} src="https://framerusercontent.com/assets/R2LuOEH4wpUQhMnB4kQDIJ4RM.mp4" poster="https://framerusercontent.com/images/bn9SbXpnsqWIO651wPfywkNq2PA.png?width=4329&height=2481" autoPlay muted loop playsInline />
  )
}
