import React from "react"

import "animate.css"

import "../assets/styles/index.scss"

import Head from "./Head"
import GNLC from "./GNLC"
import Repo from "./Repo"

const App = React.memo(() => {
  return (
    <div className="cmyk">
      <Head />
      <GNLC />
      <Repo />
    </div>
  )
})

export default App
