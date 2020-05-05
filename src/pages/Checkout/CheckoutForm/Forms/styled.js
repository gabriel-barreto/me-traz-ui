import styled, { css } from 'styled-components';

import { Input, Dropdown, Options } from '../../../../components';
import { breakpoint } from '../../../../styles';

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
  display: block;
  font-size: 1.6rem;
  line-height: 128%;
  margin: 1.6rem 0 0 0;
  width: 100%;
  @media screen and (${breakpoint('sm')}) {
    margin: 0 0 0 1.6rem;
    width: fit-content;
  }
`;

const baseAction = css`
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  font-size: 1.6rem;
  line-height: 128%;
  min-height: 4.8rem;
  padding: 0.8rem;
  transition: background-color 400ms, color 400ms, transform 400ms;
  text-align: center;
  width: 50%;
  white-space: nowrap;
  will-change: background-color, color, transform;

  &:active {
    transform: scale(0.88);
  }

  @media screen and (min-width: ${breakpoint('sm')}) {
    min-height: auto;
    padding: 0.8rem 2.4rem;
    width: fit-content;
  }
`;

export const FormSecondaryAction = styled.button`
  ${baseAction};
  background-color: ${({ theme }) => theme.hexColors.light};
  margin: 0 0.8rem 0 0;
  color: ${({ theme }) => theme.hexColors.dark};
  width: calc(50% - 8px);
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
  flex-wrap: wrap;
  margin: 3.2rem 0 0 0;
  width: 100%;
`;

export const FormInfoTitle = styled.h2`
  color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.4)};
  font-size: 1.8rem;
  line-height: 144%;
  margin: 1.6rem 0;
`;

export const FormInfoPropLabel = styled.p`
  color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.64)};
  font-size: 1.4rem;
  margin: 0 0 0.4rem 0;
`;

export const FormInfoPropValue = styled.p`
  color: ${({ theme }) => theme.hexColors.darkest};
  font-size: 1.6rem;
`;

export const FormInfoProp = styled.div`
  > ${FormInfoPropLabel}, > ${FormInfoPropValue} {
    line-height: 136%;
  }
`;

export const FormInfo = styled.div`
  > ${FormInfoProp} {
    &:not(:last-of-type) {
      margin: 0 0 1.6rem 0;
    }
  }
`;

export const FormDropdown = styled(Dropdown)`
  margin: 0 0 2.4rem 0;
`;
