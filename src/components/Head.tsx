import { memo } from 'react';

import preview from '../assets/images/preview.png';
import favicon from '../assets/favicon.ico';

// React 19 renders these document-level tags natively — no helmet needed.
const Head = memo(() => {
  const author = import.meta.env.VITE_AUTHOR;
  const name = import.meta.env.VITE_NAME;
  const title = `${author} / ${name}`;

  return (
    <>
      <title>{title}</title>
      <link rel="shortcut icon" href={favicon} />
      <meta name="robots" content="noindex" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1, minimal-ui"
      />
      <meta name="title" content={title} />
      <meta name="description" content={name} />
      <meta name="author" content={author} />

      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={name} />
      <meta property="og:image" content={preview} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={name} />
      <meta name="twitter:image" content={preview} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${author}`} />
      <meta name="twitter:image:alt" content={title} />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </>
  );
});

export default Head;
