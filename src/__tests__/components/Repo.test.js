import React from "react"
import ReactDOM from "react-dom"

import Repo from "../../components/Repo"

// describe("Repo component", () => {
//   it("should render without crashing", () => {
//     const tree = renderer.create(<Repo />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
describe("Repo component", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Repo />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
