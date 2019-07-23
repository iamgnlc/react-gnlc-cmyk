import React from "react"
import { hotjar } from "react-hotjar"

const HotJar = React.memo(() => {
  return hotjar.initialize(
    process.env.REACT_APP_HOTJAR_ID,
    process.env.REACT_APP_HOTJAR_SV,
  )
})

export default HotJar
