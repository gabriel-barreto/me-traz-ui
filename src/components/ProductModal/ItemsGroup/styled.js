import styled from 'styled-components';

export const ItemGroupTitle = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.chromaColors.dark.alpha(0.16)};
  color: ${({ theme }) => theme.chromaColors.dark.alpha(0.64)};
  font-size: 1.6rem;
  display: block;
  margin: 0 0 0.8rem 0;
  padding: 1.6rem 3.2rem;
`;

export const ItemGroupList = styled.ul``;

export const ItemGroupWrapper = styled.div`
  &:not(:last-of-type) {
    margin: 0 0 1.6rem 0;
  }
`;
