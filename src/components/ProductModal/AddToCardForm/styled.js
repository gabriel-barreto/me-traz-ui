import styled from 'styled-components';

import { breakpoint } from '../../../styles';

import SpinInput from '../../SpinInput';

export const AddToCartQttField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const QttFieldLabel = styled.label`
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 1.6rem;
  margin: 0 1rem 0 0;
`;

export const QttFieldInput = styled(SpinInput)``;

export const AddToCartLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const AddToCardTotalCurrency = styled.p`
  font-size: 1.2rem;
  line-height: 16px;
  margin: 0 0.24rem 0 0;
`;

export const AddToCardTotalValue = styled.p`
  font-size: 1.6rem;
`;

export const AddToCartTotal = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 0 1.6rem 0 0;
`;

export const AddToCartButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 4.4rem;
  padding: 1rem 2.4rem;

  > ${AddToCartLabel}, > ${AddToCartTotal} {
    color: ${({ theme }) => theme.hexColors.primary};
  }
`;

export const AddToCartForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  > ${AddToCartButton} {
    margin: 1rem 0 0 0;
    width: 100%;
  }

  > ${AddToCartQttField} {
    justify-content: space-between;
  }

  @media screen and (min-width: ${breakpoint('sm')}) {
    flex-direction: row;
    > ${AddToCartQttField}, ${AddToCartButton} {
      width: fit-content;
    }

    > ${AddToCartQttField} {
      justify-content: flex-end;
    }
    > ${AddToCartButton} {
      margin: 0 0 0 1.6rem;
      width: fit-content;
    }
  }
`;
