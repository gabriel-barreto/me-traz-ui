import styled from 'styled-components';

import { breakpoint } from '../../styles';

export const CheckoutPageGrid = styled.div`
  display: flex;
  flex-direction: column-reverse;

  > *:first-of-type {
    margin: 4rem 0 0 0;
  }

  @media screen and (min-width: ${breakpoint('md')}) {
    align-items: flex-start;
    flex-direction: row;
    margin: 1.6rem 0;

    > *:first-of-type {
      margin: 0 4rem 0 0;
    }
  }
`;
