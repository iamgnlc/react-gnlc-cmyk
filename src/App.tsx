import packageInfo from '../package.json';
import CacheBuster from './components/CacheBuster';
import CMYK from './components/CMYK';
import { isEnv } from './utils';

const App = () => (
  <CacheBuster
    currentVersion={packageInfo.version}
    isEnabled={isEnv('production')}
  >
    <CMYK />
  </CacheBuster>
);

export default App;
