import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
    </AppContextProvider>
  );
}

export default App;
