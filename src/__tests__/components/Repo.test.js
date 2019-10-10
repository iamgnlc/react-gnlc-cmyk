import React from "react"
import renderer from "react-test-renderer"

import Repo from "../../components/Repo"

describe("Repo component", () => {
  it("should render without crashing", () => {
    const tree = renderer.create(<Repo />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
