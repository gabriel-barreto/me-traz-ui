import styled from 'styled-components';
import React from 'react';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.primary};
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 3.2rem calc((100% - 40rem) / 2);
  width: 100%;
`;
export const withWrapper = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;
