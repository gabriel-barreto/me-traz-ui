import styled from 'styled-components';

const BUTTON_SIZE = '6.4rem';
const ICON_SIZE = '3.2rem';

export const ViewCartButtonIcon = styled.span`
  color: ${({ theme }) => theme.hexColors.lightest};
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
`;

export const ViewCartButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.hexColors.primaryDark};
  border: none;
  border-radius: 50%;
  bottom: 8px;
  box-shadow: 1px 2px 4px
    ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  height: ${BUTTON_SIZE};
  outline-color: transparent;
  position: fixed;
  right: 8px;
  transition: background-color, opacity, transform, visibility;
  transition-duration: 400ms;
  width: ${BUTTON_SIZE};
  will-change: background-color, opacity, transform;
  z-index: 9;

  &,
  > ${ViewCartButtonIcon} {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.hexColors.darkest};
  }

  &:active {
    transform: scale(0.88);
  }
`;
