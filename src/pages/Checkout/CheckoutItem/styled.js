import styled from 'styled-components';

import { Price } from '../../../components';

export const CheckoutItemQtt = styled.p`
  font-size: 1.2rem;
  margin: 0 0.32rem 0 0;
  text-align: center;
  vertical-align: middle;
`;

export const CheckoutItemPrice = styled(Price)`
  margin: 0 0 0 auto;
`;

export const CheckoutItemTitle = styled.p`
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 1.8rem;
`;

export const CheckoutItemTitleContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 1rem 0;

  > ${CheckoutItemTitle} {
    margin: 0 0.4rem 0 0;
  }
`;

export const CheckoutItemObsLabel = styled.p`
  font-size: 1.6rem;
  line-height: 136%;
`;

export const CheckoutItemObsItem = styled.li`
  align-items: center;
  display: flex;
  margin: 0.48rem 0;

  > ${CheckoutItemPrice} > p:last-of-type {
    font-size: 1.4rem;
  }
`;

export const CheckoutItemObs = styled.ul`
  margin: 0 0 1rem 0;
`;

export const CheckoutItemTotalLabel = styled.p`
  font-size: 1.6rem;
`;

export const CheckoutItemTotalContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CheckoutItemAction = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 1.6rem;
  fill: ${({ theme }) => theme.hexColors.lightest};
  min-height: 4.8rem;
  padding: 1rem;
  text-align: center;
  transition: color, fill, transform;
  transition-duration: 400ms;
  will-change: color, fill, transform;

  &:hover {
    color: ${({ theme }) => theme.hexColors.light};
    fill: ${({ theme }) => theme.hexColors.light};
  }
  &:active {
    transform: scale(0.88);
  }
`;

export const CheckoutItemActionsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const CheckoutItemWrapper = styled.li`
  color: ${({ theme }) => theme.hexColors.light};

  &:not(:last-of-type) {
    margin: 0 0 4rem 0;
  }
`;
