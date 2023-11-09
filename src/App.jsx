import React from 'react';
import CacheBuster from 'react-cache-buster';

import packageInfo from '../package.json';
import CMYK from './components/CMYK';
import Loading from './Loading';
import { isEnv } from './utils';

const App = () => (
  <CacheBuster
    currentVersion={packageInfo.version}
    isEnabled={isEnv('production')}
    isVerboseMode={false}
    loadingComponent={<Loading />}
  >
    <CMYK />
  </CacheBuster>
);

export default App;
