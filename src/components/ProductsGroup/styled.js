import styled from 'styled-components';

import { breakpoint } from '../../styles';

export const ProductsGroupTitle = styled.h2`
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 124%;
  text-transform: uppercase;
`;

export const ProductsGroupCount = styled.p`
  color: ${({ theme }) => theme.chromaColors.lightest.alpha(0.88)};
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProductGroupTitleContainer = styled.div`
  width: 100%;
`;

export const ProductsGroupForms = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  > div:not(:last-of-type) {
    margin: 0 1.6rem 0 0;
  }
`;

export const ProductsGroupHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.6rem 0;
`;

export const ProductsGroupBody = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: repeat(1, 1fr);
  width: fit-content;

  @media screen and (min-width: ${breakpoint('sm')}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${breakpoint('lg')}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${breakpoint('xl')}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductsGroup = styled.section`
  width: 100%;
`;
