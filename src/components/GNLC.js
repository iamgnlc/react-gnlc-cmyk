import React from "react"

import g from "../assets/images/g.svg"
import n from "../assets/images/n.svg"
import l from "../assets/images/l.svg"
import c from "../assets/images/c.svg"

const letters = [
  { key: "g", img: g },
  { key: "n", img: n },
  { key: "l", img: l },
  { key: "c", img: c },
]

const GNLC = React.memo(() => {
  return letters.map((letter, i) => {
    return (
      <div key={i} className={`animated fadeInRight letter ${letter.key}`}>
        <img
          src={letter.img}
          alt={letter.key}
          className="animated fadeInLeft"
        />
      </div>
    )
  })
})

export default GNLC
