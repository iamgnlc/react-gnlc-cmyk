import React from "react"

import "../assets/styles/App.scss"
import g from "../assets/images/g.svg"
import n from "../assets/images/n.svg"
import l from "../assets/images/l.svg"
import c from "../assets/images/c.svg"

import Head from "./Head"
import Repo from "./Repo"

const letters = [
  { key: "g", img: g },
  { key: "n", img: n },
  { key: "l", img: l },
  { key: "c", img: c },
]

const App = React.memo(() => {
  return (
    <div className="cmyk">
      <Head />
      {letters.map((letter, i) => {
        return (
          <div key={i} className={`letter ${letter.key}`}>
            <img src={letter.img} alt={letter.key} />
          </div>
        )
      })}
      <Repo />
    </div>
  )
})

export default App
