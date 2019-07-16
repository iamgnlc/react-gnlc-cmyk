import React from "react"

const Repo = React.memo(() => {
  return (
    <a
      className="repo"
      href={process.env.REACT_APP_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {process.env.REACT_APP_REPO_URL}
    </a>
  )
})

export default Repo
