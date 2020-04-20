import styled from 'styled-components';

const cardRadius = '8px';

export const ProductCardPhoto = styled.div`
  border-radius: ${cardRadius} ${cardRadius} 0 0;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  background-image: ${(props) =>
    props.src ? `url(${props.src})` : props.theme.seamlessPattern};
  background-position: ${(props) => (props.src ? 'center' : 'center bottom')};
  background-repeat: ${(props) => (props.src ? 'no-repeat' : 'repeat')};
  background-size: ${(props) => (props.src ? 'cover' : 'initial')};
  box-shadow: ${(props) =>
    props.src
      ? `0 1px 2px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)}`
      : 'none'};
  height: 32rem;
  object-fit: cover;
  object-position: center;
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
const addToCardIconSize = '32px';
export const ProductCardAddToCardButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.darkest};
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  display: flex;
  bottom: -32px;
  height: ${addToCardButtonSize};
  justify-content: center;
  outline-color: transparent;
  position: absolute;
  right: 0;
  width: ${addToCardButtonSize};
  > svg {
    color: ${({ theme }) => theme.hexColors.lightest};
    fill: ${({ theme }) => theme.hexColors.lightest};
    height: ${addToCardIconSize};
    width: ${addToCardIconSize};
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
  padding: 3.2rem;

  > ${ProductCardTitle}, > ${ProductCardDescription} {
    line-height: 136%;
  }
`;

export const ProductCardContainer = styled.section``;

export const ProductCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: ${cardRadius};
  box-shadow: 1px 2px 4px
    ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  cursor: pointer;
  position: relative;
  margin: 0 0 3.2rem 0;
  user-select: none;

  &,
  ${ProductCardAddToCardButton} {
    transform-origin: center;
    transition: box-shadow 400ms, transform 400ms;
    will-change: box-shadow, transfrom;
  }

  &:hover {
    &,
    ${ProductCardAddToCardButton} {
      transform: scale(1.008);
      box-shadow: 4px 4px 8px
        ${({ theme }) => theme.chromaColors.darkest.alpha(0.4)};
    }
  }

  &:active {
    &,
    ${ProductCardAddToCardButton} {
      box-shadow: 1px 2px 4px
        ${({ theme }) => theme.chromaColors.darkest.alpha(0)};
      transform: scale(0.96);
    }
  }
`;
