import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchField = styled.input`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border: 1px solid ${({ theme }) => theme.hexColors.light};
  border-radius: 4rem;
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
  min-height: 4.8rem;
  padding: 0.8rem 1.6rem;
  outline-color: transparent;
  transition: border-color 400ms;
  width: 100%;
  will-change: border-color;

  &::placeholder {
    color: ${({ theme }) => theme.chromaColors.dark.alpha(0.64)};
    font-size: 1.6rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.chromaColors.dark.alpha(0.32)};
  }
  &:focus {
    border-color: ${({ theme }) => theme.hexColors.primary};
  }
`;
