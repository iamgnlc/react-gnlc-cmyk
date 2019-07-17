import React from "react"

const Repo = React.memo(() => {
  return process.env.RAZZLE_REPO_URL ? (
    <a
      className="repo"
      href={process.env.RAZZLE_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {process.env.RAZZLE_REPO_URL}
    </a>
  ) : null
})

export default Repo
