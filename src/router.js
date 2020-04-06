import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { Home } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Redirect to={'/'} />
    </BrowserRouter>
  );
}

export default Router;
