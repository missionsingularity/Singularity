import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const root = fileURLToPath(new URL("./site/", import.meta.url))

export default defineConfig({
  root,
  base: "/",
  plugins: [react()],
  publicDir: fileURLToPath(new URL("./site/public/", import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL("./dist/", import.meta.url)),
    emptyOutDir: true,
  },
})
