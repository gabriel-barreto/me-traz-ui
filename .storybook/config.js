import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, Theme } from '../src/styles';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const withRouter = (storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>;
const withGlobalStyle = (storyFn) => (
  <Wrapper>
    <GlobalStyle />
    {storyFn()}
  </Wrapper>
);
const withTheme = (storyFn) => (
  <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
);

addDecorator(withGlobalStyle);
addDecorator(withKnobs);
addDecorator(withRouter);
addDecorator(withTheme);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
