import styled from 'styled-components';

export const BaseLayout = styled.main`
  background-color: ${({ theme }) => theme.hexColors.primary};
  height: 100%;
  min-height: 100vh;
`;

export const BaseLayoutBody = styled.div`
  padding: 12.4rem 3.2rem 3.2rem 3.2rem;
`;
