import styled from 'styled-components';

import { breakpoint } from '../../styles';

export const CheckoutPageGrid = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  margin: 1.6rem 0;

  > form {
    display: none;
  }

  @media screen and (min-width: ${breakpoint('md')}) {
    > form {
      display: block;
    }
  }
`;
