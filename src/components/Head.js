import React from "react"
import Helmet from "react-helmet"

import preview from "../assets/images/preview.png"
import favicon from "../assets/favicon.ico"

const Head = React.memo(() => {
  return (
    <Helmet>
      <title>
        {`${process.env.RAZZLE_AUTHOR} / ${process.env.RAZZLE_NAME}`}
      </title>
      <link rel="shortcut icon" href={favicon} />
      <meta name="robots" content="noindex" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1, minimal-ui"
      />
      <meta
        name="title"
        content={`${process.env.RAZZLE_AUTHOR} / ${process.env.RAZZLE_NAME}`}
      />
      <meta name="description" content={process.env.RAZZLE_NAME} />
      <meta name="author" content={process.env.RAZZLE_AUTHOR} />

      <meta
        property="og:site_name"
        content={`${process.env.RAZZLE_AUTHOR} / ${process.env.RAZZLE_NAME}`}
      />
      <meta
        property="og:title"
        content={`${process.env.RAZZLE_AUTHOR} / ${process.env.RAZZLE_NAME}`}
      />
      <meta property="og:description" content={process.env.RAZZLE_NAME} />
      <meta property="og:image" content={preview} />

      <meta
        name="twitter:title"
        content={`${process.env.RAZZLE_AUTHOR} / ${process.env.RAZZLE_NAME}`}
      />
      <meta name="twitter:description" content={process.env.RAZZLE_NAME} />
      <meta name="twitter:image" content={preview} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${process.env.RAZZLE_AUTHOR}`} />
      <meta
        name="twitter:image:alt"
        content={`${process.env.RAZZLE_AUTHOR} / ${process.env.RAZZLE_NAME}`}
      />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Helmet>
  )
})

export default Head
