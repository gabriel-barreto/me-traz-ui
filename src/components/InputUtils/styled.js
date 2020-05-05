import styled from 'styled-components';

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.hexColors.darkest};
  font-size: 1.6rem;
  margin: 0 0 0.6rem 0;
`;

export const InputHelper = styled.p`
  color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.56)};
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 128%;
  margin: 0 0 0.8rem 0;

  ~ ${InputLabel} {
    margin: 0 0 0.4rem 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
