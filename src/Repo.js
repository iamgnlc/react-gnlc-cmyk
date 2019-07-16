import React from "react"

const Repo = React.memo(() => {
  const url = "https://github.com/iamgnlc/react-gnlc-cmyk"
  return (
    <a className="repo" href={url} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
  )
})

export default Repo
