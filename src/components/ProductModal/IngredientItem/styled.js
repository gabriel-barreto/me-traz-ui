import styled from 'styled-components';

export const IngredientItemTogglerWrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  outline-color: ${({ theme }) => theme.hexColors.primary};
  padding: 1rem 3.2rem;
  transition: transform 400ms;
  transform-origin: center;
  width: 100%;
  will-change: transform;

  &:active {
    transform: scale(0.88);
  }
`;

export const IngredientItemLabel = styled.p`
  color: ${({ theme }) => theme.hexColors.dark};
  font-size: 1.6rem;
`;

export const IngredientItemIndicator = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.light};
  box-shadow: 0 1px 2px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  border-radius: 2px;
  color: ${({ theme }) => theme.hexColors.lightest};
  display: flex;
  fill: ${({ theme }) => theme.hexColors.lightest};
  height: 4.4rem;
  justify-content: center;
  transition: background-color 400ms;
  width: 4.4rem;
  will-change: background-color;
`;

export const IngredientItemContainer = styled.li`
  &.--selected {
    ${IngredientItemIndicator} {
      background-color: ${({ theme }) => theme.hexColors.primary};
    }
  }

  &.--locked {
    ${IngredientItemTogglerWrapper} {
      cursor: not-allowed;
      &:hover {
        ${IngredientItemIndicator} {
          background-color: ${({ theme }) => theme.hexColors.primaryDark};
        }
      }
    }

    ${IngredientItemIndicator} {
      background-color: ${({ theme }) => theme.hexColors.primaryDark};
    }
  }
`;
