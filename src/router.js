import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { Checkout, Home } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Route component={Checkout} path="/sacola" />
      <Route component={Home} path="/" exact />
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default Router;
