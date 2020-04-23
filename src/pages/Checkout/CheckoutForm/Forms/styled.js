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
