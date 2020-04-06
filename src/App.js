import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './styles';

import Router from './router';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
