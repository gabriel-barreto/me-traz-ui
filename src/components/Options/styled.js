import styled, { css } from 'styled-components';

export * from '../InputUtils/styled';

const optionsChooseMark = css`
  &::before {
    align-items: center;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.hexColors.light};
    box-shadow: 0 1px 2px ${({ theme }) => theme.chromaColors.dark.alpha(0.24)};
    color: transparent;
    content: '✔';
    display: flex;
    font-size: 1.6rem;
    height: 3.2rem;
    justify-content: center;
    margin: 0 0.8rem 0 0;
    transition: background-color 400ms, box-shadow 400ms, color 400ms;
    width: 3.2rem;
    will-change: background-color, box-shadow, color;
  }
`;
const optionsChooseActive = css`
  &.--selected {
    color: ${({ theme }) => theme.hexColors.darkest};
    &::before {
      background-color: ${({ theme }) => theme.hexColors.primary};
      color: ${({ theme }) => theme.hexColors.lightest};
    }

    &:hover {
      &::before {
        background-color: ${({ theme }) => theme.hexColors.primaryDark};
        box-shadow: 0 1px 2px transparent;
        color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
      }
    }
  }
`;
export const OptionsChoose = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.hexColors.dark};
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  min-height: 4.4rem;
  outline-color: transparent;
  padding: 0;
  transition: color 400ms, transform 400ms;
  will-change: color, transform;

  &:hover {
    color: ${({ theme }) => theme.hexColors.darkest};
    &::before {
      background-color: ${({ theme }) => theme.chromaColors.dark.alpha(0.24)};
      box-shadow: 0 1px 2px transparent;
    }
  }
  &:active {
    transform: scale(0.88);
  }

  ${optionsChooseMark};
  ${optionsChooseActive};
`;

export const OptionsChooses = styled.div`
  align-items: center;
  display: flex;
  margin: 0.4rem 0 0 0;

  > ${OptionsChoose} {
    &:not(:last-of-type) {
      margin: 0 2.4rem 0 0;
    }
  }
`;
