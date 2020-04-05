
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator, configure } from '@storybook/react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const withRouter = storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>;

const withGlobalStyle = storyFn => (
  <Wrapper>
    {storyFn()}
  </Wrapper>
);

addDecorator(withRouter);
addDecorator(withGlobalStyle);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
