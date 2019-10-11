import React from "react"
import { hotjar } from "react-hotjar"

const HotJar = React.memo(() => {
  let id = process.env.RAZZLE_HOTJAR_ID
  let sv = process.env.RAZZLE_HOTJAR_SV
  return id && sv ? hotjar.initialize(id, sv) : null
})

export default HotJar
