"use client"

import { useState, type ReactNode } from "react"

/**
 * Two states of the same block, captured from the published page and swapped
 * on click. The wrapper is display: contents so it takes part in nothing: the
 * markup lands in the same place in the layout either way.
 */
export default function States({ a, b }: { a: ReactNode; b: ReactNode }) {
  const [second, setSecond] = useState(false)
  const toggle = () => setSecond(value => !value)
  return (
    <div
      style={{ display: "contents" }}
      role="button"
      tabIndex={0}
      aria-expanded={second}
      onClick={toggle}
      onKeyDown={event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          toggle()
        }
      }}
    >
      {second ? b : a}
    </div>
  )
}
