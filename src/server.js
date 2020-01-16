import React from "react"
import { StaticRouter } from "react-router-dom"
import express from "express"
import { renderToString } from "react-dom/server"
import { Helmet } from "react-helmet"

import App from "./components/App"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

// Regex to disbale Helmet data attribute.
const regexp = / data-react-helmet="true"/g

const server = express()
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>,
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      const helmet = Helmet.renderStatic()
      res.status(200).send(
        `<!doctype html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString().replace(regexp, "")}
        ${helmet.meta.toString().replace(regexp, "")}
        ${helmet.link.toString().replace(regexp, "")}
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${markup}</div>
    </body>
    </html>
    <!-- GNLC -->`,
      )
    }
  })

export default server
