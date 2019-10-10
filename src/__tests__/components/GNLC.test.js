import React from "react"
import renderer from "react-test-renderer"

import GNLC from "../../components/GNLC"

describe("GNLC component", () => {
  it("should render without crashing", () => {
    const tree = renderer.create(<GNLC />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
