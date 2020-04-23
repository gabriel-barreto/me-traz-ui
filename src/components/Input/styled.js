import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
  margin: 0 0 0.6rem 0;
`;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border: 1px solid ${({ theme }) => theme.hexColors.light};
  border-radius: 2px;
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
  min-height: 4.4rem;
  padding: 0 1.6rem 0 0.8rem;
`;
