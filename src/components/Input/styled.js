import styled from 'styled-components';

export * from '../InputUtils/styled';

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border: 1px solid ${({ theme }) => theme.hexColors.light};
  border-radius: 2px;
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
  min-height: 4.4rem;
  outline-color: ${({ theme }) => theme.hexColors.primary};
  padding: 0 1.6rem 0 0.8rem;
`;
