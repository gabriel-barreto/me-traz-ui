import styled from 'styled-components';

export const SpinInputButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.hexColors.primary};
  font-size: 1.6rem;
  font-weight: 500;
  height: 4.4rem;
  text-align: center;
  width: 4.4rem;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }
  &:last-of-type {
    border-radius: 0 4px 4px 0;
  }
`;

export const SpinInputDisplay = styled.input`
  background-color: ${({ theme }) => theme.hexColors.light};
  border: none;
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
  height: 4.4rem;
  text-align: center;
  padding: 0 0.4rem;
  width: 6.4rem;
`;

export const SpinInputContainer = styled.div`
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 1px 2px ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  display: flex;
  justify-content: center;

  > ${SpinInputButton} {
    background-color: ${({ theme }) => theme.hexColors.lightest};
  }
  > ${SpinInputDisplay} {
    background-color: ${({ theme }) => theme.hexColors.light};
    color: ${({ theme }) => theme.hexColors.darkest};
  }

  > ${SpinInputButton}, > ${SpinInputDisplay} {
    outline-color: ${({ theme }) => theme.hexColors.primary};
  }

  &,
  > ${SpinInputButton}, > ${SpinInputDisplay} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
