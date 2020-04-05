import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">App</div>
    </ThemeProvider>
  );
}

export default App;
