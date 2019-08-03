import { BrowserRouter } from "react-router-dom"
import React from "react"
import { hydrate } from "react-dom"

import App from "./components/App"
import HotJar from "./components/HotJar"
import Repo from "./components/Repo"

hydrate(
  <BrowserRouter>
    <App />
    <HotJar />
    <Repo />
  </BrowserRouter>,
  document.getElementById("root"),
)

if (module.hot) {
  module.hot.accept()
}
