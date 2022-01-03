import React from 'react';
import ReactDOM from 'react-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App';

import * as serviceWorker from './serviceWorker';

if (['production'].includes(process.env.NODE_ENV)) disableReactDevTools();

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
