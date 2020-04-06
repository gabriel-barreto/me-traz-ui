import styled from 'styled-components';

export const BaseLayout = styled.main`
  background-color: ${({ theme }) => theme.hexColors.primary};
  height: 100%;
  min-height: 100vh;
`;
