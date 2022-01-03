import React from 'react';
import CacheBuster from 'react-cache-buster';

import { version } from '../package.json';
import CMYK from './components/CMYK';
import Loading from './Loading';

const App = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction}
      isVerboseMode={false}
      loadingComponent={<Loading />}
    >
      <CMYK />
    </CacheBuster>
  );
};

export default App;
