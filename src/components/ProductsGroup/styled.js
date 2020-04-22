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

  @media screen and (max-width: ${breakpoint('md')}) {
    margin: 0.16rem 0 0 0;
  }
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

  @media screen and (max-width: 1023px) {
    justify-content: flex-start;
    margin: 1rem 0 0 -1.6rem;
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;

export const ProductsGroupHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 1.6rem 0;

  @media screen and (min-width: ${breakpoint('sm')}) {
    flex-direction: row;
  }
`;

export const ProductsGroupBody = styled.div`
  column-count: 1;
  column-gap: 4.8rem;

  > div {
    break-inside: avoid;
    &:not(:last-of-type) {
      margin: 0 0 2.4rem 0;
    }
  }

  @media screen and (min-width: ${breakpoint('sm')}) {
    column-count: 2;
  }
  @media screen and (min-width: ${breakpoint('md')}) {
    column-count: 3;
  }
  @media screen and (min-width: ${breakpoint('xl')}) {
    column-count: 4;
  }
`;

export const ProductsGroup = styled.section`
  width: 100%;
`;
