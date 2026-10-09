import { memo } from 'react';

import Head from './Head';
import GNLC from './GNLC';
import Repo from './Repo';

// Styles are loaded from index.html via a render-blocking <link>, so the page
// is styled before React mounts (prevents unstyled SVG flash on load).

const CMYK = memo(() => {
  return (
    <div className="cmyk">
      <Head />
      <GNLC />
      <Repo />
    </div>
  );
});

CMYK.displayName = 'CMYK';

export default CMYK;
