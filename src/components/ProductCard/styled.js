import styled from 'styled-components';

const cardRadius = '8px';

export const ProductCardPhoto = styled.div`
  border-radius: ${cardRadius} ${cardRadius} 0 0;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${(props) =>
    props.src
      ? `0 1px 2px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)}`
      : 'none'};
  height: 32rem;
  width: 100%;
`;

export const ProductCardTitle = styled.h1`
  color: ${({ theme }) => theme.hexColors.darkest};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 0 0.4rem 0;
`;

export const ProductCardDescription = styled.p`
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
`;

export const ProductCardCurrency = styled.p`
  font-size: 1.2rem;
  line-height: 180%;
`;

export const ProductCardValue = styled.p`
  font-size: 3.6rem;
  font-weight: 500;
  margin: 0 0 0 0.4rem;
`;

const addToCardButtonSize = '64px';
export const ProductCardAddToCardButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.darkest};
  border-radius: 50%;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.hexColors.lightest};
  display: flex;
  fill: ${({ theme }) => theme.hexColors.lightest};
  height: ${addToCardButtonSize};
  justify-content: center;
  margin: -32px 0 0 0;
  outline-color: transparent;
  transition-duration: 400ms;
  transition-property: background-color, border-color, fill, opacity, transform,
    visibility;
  width: ${addToCardButtonSize};
  will-change: background-color, border-color, fill, opacity, transform,
    visibility;

  &:hover {
    background-color: ${({ theme }) => theme.hexColors.primaryDark};
    border-color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.1)};
    color: ${({ theme }) => theme.hexColors.lightest};
    fill: ${({ theme }) => theme.hexColors.lightest};
  }

  &:active {
    transform: scale(0.88);
  }
`;

export const ProductCardPrice = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 2.4rem 0 0 0;

  > ${ProductCardCurrency}, > ${ProductCardValue} {
    color: ${({ theme }) => theme.hexColors.primary};
  }
`;

export const ProductCardBody = styled.div`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 4px;
  padding: 3.2rem;

  > ${ProductCardTitle}, > ${ProductCardDescription} {
    line-height: 136%;
  }
`;

export const ProductCardContainer = styled.section`
  transition: transform 400ms;
  width: 100%;
  will-change: transform;

  &:hover {
    transform: translateY(-8px);
    ~ ${ProductCardAddToCardButton} {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const ProductCardWrapper = styled.div`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  ${ProductCardContainer} {
    transform-origin: center;
    transition: transform 400ms;
    will-change: transfrom;
  }

  &:active {
    ${ProductCardContainer},
    ${ProductCardAddToCardButton} {
      transform: scale(0.96);
    }
  }
`;
