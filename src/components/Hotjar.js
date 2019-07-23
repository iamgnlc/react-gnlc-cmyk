import React from "react"
import { hotjar } from "react-hotjar"

const HotJar = React.memo(() => {
  return hotjar.initialize(
    process.env.RAZZLE_HOTJAR_ID,
    process.env.RAZZLE_HOTJAR_SV,
  )
})

export default HotJar
