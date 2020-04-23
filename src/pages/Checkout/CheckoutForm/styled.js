import styled from 'styled-components';

import { breakpoint } from '../../../styles';

export const CheckoutFormWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin: 0 3.2rem 0 0;
  transition: height 400ms;
  width: 100%;
  will-change: height;

  @media screen and (min-width: ${breakpoint('sm')}) {
    align-items: stretch;
    flex-direction: row;
  }
`;

export const CheckoutFormSteps = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.light};
  border-bottom: 1px solid
    ${({ theme }) => theme.chromaColors.darkest.alpha(0.08)};
  border-right: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow-y: hidden;
  padding: 3.2rem 0;
  position: relative;
  transition: height 400ms;
  width: 100%;
  will-change: height;

  @media screen and (min-width: ${breakpoint('sm')}) {
    border-right: 1px solid
      ${({ theme }) => theme.chromaColors.darkest.alpha(0.08)};
    border-bottom: none;
    flex-direction: column;
    padding: 0 3.2rem;
    width: fit-content;
  }
`;

export const CheckoutFormStep = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.primary};
  border: 2px solid ${({ theme }) => theme.chromaColors.darkest.alpha(0.08)};
  border-radius: 50%;
  color: ${({ theme }) => theme.hexColors.lightest};
  display: flex;
  font-size: 1.6rem;
  height: 3.2rem;
  justify-content: center;
  text-align: center;
  outline-color: transparent;
  transition: background-color 400ms, transform 400ms;
  transition-timing-function: ease-in-out;
  width: 3.2rem;
  will-change: background-color, transform;
  z-index: 9;

  &:hover {
    background-color: ${({ theme }) => theme.hexColors.primaryDark};
  }
  &:active {
    transform: scale(0.88);
  }
`;

export const CheckoutFormIndicator = styled.div`
  background: ${({ theme }) => theme.hexColors.primaryDark};
  height: 2px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  transition: transform 400ms;
  width: 100%;
  will-change: transform;

  &.--one {
    transform: translate(-80%, -50%);
  }
  &.--two {
    transform: translate(-50%, -50%);
  }
  &.--three {
    transform: translate(-20%, -50%);
  }
  &.--complete {
    transform: translate(0%, -50%);
  }

  @media screen and (min-width: ${breakpoint('sm')}) {
    height: 100%;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    width: 2px;
    &.--one {
      transform: translate(-50%, -80%);
    }
    &.--two {
      transform: translate(-50%, -50%);
    }
    &.--three {
      transform: translate(-50%, -20%);
    }
    &.--complete {
      transform: translate(-50%, 0%);
    }
  }
`;

export const CheckoutFormContainer = styled.form`
  padding: 3.2rem 4rem;
  width: 100%;
`;
