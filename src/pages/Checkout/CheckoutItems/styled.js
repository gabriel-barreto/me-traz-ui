import styled from 'styled-components';

import { breakpoint } from '../../../styles';

export const CheckoutItemsWrapper = styled.div`
  @media screen and (min-width: ${breakpoint('md')}) {
    margin: 0 0 0 auto;
    max-width: 40rem;
  }
`;

export const CheckoutItemsTitle = styled.h2`
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 2.4rem;
  font-weight: 500;
  margin: 0 0 3.2rem 0;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const CheckoutItemsList = styled.ul``;
