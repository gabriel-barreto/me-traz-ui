import styled from 'styled-components';

export * from '../InputUtils/styled';

export const DropdownField = styled.select`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border: 1px solid ${({ theme }) => theme.hexColors.light};
  font-size: 1.6rem;
  min-height: 4.4rem;
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;
`;

export const DropdownOption = styled.option`
  color: ${({ theme }) => theme.hexColors.darkest};
  font-size: 1.6rem;
`;
