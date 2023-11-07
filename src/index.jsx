import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App';
import { isEnv, logo } from './utils';

import * as serviceWorker from './serviceWorker';

logo();

if (isEnv('production')) disableReactDevTools();

const rootElement = document?.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Root />);
} else {
  root.render(<Root />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
