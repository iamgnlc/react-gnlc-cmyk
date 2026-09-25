import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App';
import { isEnv, logo } from './utils';

logo();

if (isEnv('production')) disableReactDevTools();

const rootElement = document?.getElementById('root');

const Root = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement?.hasChildNodes() && rootElement) {
  hydrateRoot(rootElement, <Root />);
} else if (rootElement) {
  createRoot(rootElement).render(<Root />);
}
