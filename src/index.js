import http from "http"
import * as Sentry from "@sentry/browser"

let app = require("./server").default

const server = http.createServer(app)

let currentApp = app

server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error)
  }

  console.log("🚀 started")
})

// Sentry.
Sentry.init({
  dsn: `https://${process.env.RAZZLE_SENTRY_KEY}@sentry.io/${
    process.env.RAZZLE_SENTRY_PID
  }`,
})

if (module.hot) {
  console.log("✅  Server-side HMR Enabled!")

  module.hot.accept("./server", () => {
    console.log("🔁  HMR Reloading `./server`...")

    try {
      app = require("./server").default
      server.removeListener("request", currentApp)
      server.on("request", app)
      currentApp = app
    } catch (error) {
      console.error(error)
    }
  })
}
