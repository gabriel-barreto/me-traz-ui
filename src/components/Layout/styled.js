import styled from 'styled-components';

import { breakpoint } from '../../styles';

export const BaseLayout = styled.main`
  background-color: ${({ theme }) => theme.hexColors.primary};
  height: 100%;
  min-height: 100vh;
`;

export const BaseLayoutBody = styled.div`
  padding: 12.4rem 3.2rem 3.2rem 3.2rem;
  @media screen and (min-width: ${breakpoint('sm')}) {
    padding: 12.4rem 6.4rem 3.2rem 6.4rem;
  }
  @media screen and (min-width: ${breakpoint('lg')}) {
    padding: 12.4rem 12.8rem 3.2rem 12.8rem;
  }
`;
