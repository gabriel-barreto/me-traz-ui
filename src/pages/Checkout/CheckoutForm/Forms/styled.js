import styled, { css } from 'styled-components';

import { Input, Options } from '../../../../components';

const formInputMargins = css`
  &:not(:last-of-type) {
    margin: 0 0 2.4rem 0;
  }
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.chromaColors.dark.alpha(0.4)};
  font-size: 1.8rem;
  margin: 0 0 3.2rem 0;
`;

export const FormOptions = styled(Options)`
  ${formInputMargins}
`;

export const FormInput = styled(Input)`
  ${formInputMargins}
`;

export const FormActionsLegend = styled.p`
  color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.48)};
  font-size: 1.6rem;
  margin: 0 0 0 1.6rem;
`;

const baseAction = css`
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  font-size: 1.6rem;
  padding: 0.8rem 2.4rem;
  transition: background-color 400ms, color 400ms, transform 400ms;
  margin: 0 1rem 0 0;
  text-align: center;
  will-change: background-color, color, transform;

  &:active {
    transform: scale(0.88);
  }
`;

export const FormSecondaryAction = styled.button`
  ${baseAction};
  background-color: ${({ theme }) => theme.hexColors.light};
  color: ${({ theme }) => theme.hexColors.dark};
  &:hover {
    background-color: ${({ theme }) => theme.hexColors.lightest};
    color: ${({ theme }) => theme.hexColors.primaryDark};
  }
`;

export const FormSubmitAction = styled.button`
  ${baseAction};
  background-color: ${({ theme }) => theme.hexColors.primary};
  color: ${({ theme }) => theme.hexColors.lightest};
  &:hover {
    background-color: ${({ theme }) => theme.hexColors.primaryDark};
  }
`;

export const FormActions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 3.2rem 0 0 0;
  width: 100%;
`;
