import React, { Component } from "react"

class Repo extends Component {
  state = { show: null }

  keys = [17, 91, 93, 224]

  handleKeyDown = (event) => {
    this.keys.includes(event.keyCode) && this.setState({ show: true })
  }

  handleKeyUp = (event) => {
    this.keys.includes(event.keyCode) && this.setState({ show: false })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
    document.addEventListener("keyup", this.handleKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
    document.removeEventListener("keyup", this.handleKeyUp)
  }

  render() {
    let { show } = this.state
    return (
      <div className={`repo ${!show ? "hide" : ""}`}>
        {show && (
          <a
            href={process.env.RAZZLE_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {process.env.RAZZLE_REPO_URL}
          </a>
        )}
      </div>
    )
  }
}

export default Repo
