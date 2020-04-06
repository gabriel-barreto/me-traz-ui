import React from 'react';
import ReactDOM from 'react-dom';

import { makeServer } from './mirage';

import App from './App';

import { app } from './config';

import * as serviceWorker from './serviceWorker';

if (app.env !== 'production') {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
