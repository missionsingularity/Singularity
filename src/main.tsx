import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Page from "./Home"
import NotFound from "./404"

const Route = window.location.pathname === "/" ? Page : NotFound

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Route />
  </StrictMode>
)
