import React from "react"
import ReactDOM from "react-dom"

import GNLC from "../../components/GNLC"

// describe("GNLC component", () => {
//   it("should render without crashing", () => {
//     const tree = renderer.create(<GNLC />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
describe("GNLC component", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<GNLC />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
