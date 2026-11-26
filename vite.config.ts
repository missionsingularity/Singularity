import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import contactHandler from "./api/contact.js"

const root = fileURLToPath(new URL("./site/", import.meta.url))

export default defineConfig({
  root,
  appType: "mpa",
  base: "/",
  plugins: [react(), {
    name: "local-contact-function",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/contact" || req.url?.startsWith("/contact?")) {
          _res.statusCode = 302
          _res.setHeader("Location", `/contact/${req.url.slice("/contact".length)}`)
          _res.end()
          return
        }
        next()
      })
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          req.headers.host = req.headers.host || "localhost"
          await contactHandler(req, res)
          return
        }
        const chunks = []
        let size = 0
        for await (const chunk of req) {
          size += chunk.length
          if (size > 24 * 1024) {
            res.statusCode = 413
            res.end(JSON.stringify({ error: "The request is too large." }))
            return
          }
          chunks.push(chunk)
        }
        try {
          req.body = JSON.parse(Buffer.concat(chunks).toString("utf8"))
        } catch {
          res.statusCode = 400
          res.end(JSON.stringify({ error: "Invalid form submission." }))
          return
        }
        req.headers.host = req.headers.host || "localhost"
        await contactHandler(req, res)
      })
    },
  }],
  publicDir: fileURLToPath(new URL("./site/public/", import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL("./dist/", import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./site/index.html", import.meta.url)),
        contact: fileURLToPath(new URL("./site/contact/index.html", import.meta.url)),
      },
    },
  },
})
