import styled from 'styled-components';

import { breakpoint } from '../../styles';

export const CheckoutItemsList = styled.ul`
  @media screen and (min-width: ${breakpoint('md')}) {
    margin: 1.6rem 0 0 auto;
    max-width: 40rem;
  }
`;
