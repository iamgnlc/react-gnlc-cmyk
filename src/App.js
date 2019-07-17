import React from "react"

import "./styles/App.scss"
import g from "./assets/images/g.svg"
import n from "./assets/images/n.svg"
import l from "./assets/images/l.svg"
import c from "./assets/images/c.svg"

import Head from "./Head"
import Repo from "./Repo"

const App = React.memo(() => {
  return (
    <div className="cmyk">
      <Head />
      <div className="panel cyan">
        <img className="letter g" src={g} alt="g" />
      </div>
      <div className="panel magenta">
        <img className="letter n" src={n} alt="n" />
      </div>
      <div className="panel yellow">
        <img className="letter l" src={l} alt="l" />
      </div>
      <div className="panel black">
        <img className="letter c" src={c} alt="c" />
      </div>
      <Repo />
    </div>
  )
})

export default App
