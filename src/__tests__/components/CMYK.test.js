import React from "react"
import ReactDOM from "react-dom"

import CMYK from "../../components/CMYK"

describe("CMYK component", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<CMYK />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
