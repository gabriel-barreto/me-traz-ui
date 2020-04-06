import React from 'react';

import { ThemeProvider } from 'styled-components';

import AppContextProvider from './contexts';
import { GlobalStyle, Theme } from './styles';

import Router from './router';

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="App">
          <Router />
        </div>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
