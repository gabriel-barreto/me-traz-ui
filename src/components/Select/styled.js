import styled from 'styled-components';

export const SelectField = styled.select`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 1.4rem;
  outline-color: ${({ theme }) => theme.hexColors.primaryDark};
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;
`;

export const SelectOption = styled.option`
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1em;
`;
