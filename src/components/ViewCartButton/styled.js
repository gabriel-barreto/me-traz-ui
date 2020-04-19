import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BUTTON_SIZE = '6.4rem';
const COUNTER_SIZE = '3.2rem';
const ICON_SIZE = '3.2rem';

export const ViewCartButtonIcon = styled.span`
  color: ${({ theme }) => theme.hexColors.lightest};
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
`;

export const ViewCartButtonCounter = styled.p`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 50%;
  box-shadow: 1px 2px 4px
    ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  color: ${({ theme }) => theme.hexColors.primaryDark};
  display: flex;
  font-size: 1.4rem;
  height: ${COUNTER_SIZE};
  justify-content: center;
  left: -8px;
  position: fixed;
  text-align: center;
  top: -8px;
  width: ${COUNTER_SIZE};
`;

export const ViewCartButtonWrapper = styled(Link)`
  background-color: ${({ theme }) => theme.hexColors.primaryDark};
  border: none;
  border-radius: 50%;
  bottom: 8px;
  box-shadow: 1px 2px 4px
    ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  height: ${BUTTON_SIZE};
  outline-color: transparent;
  opacity: 0;
  position: fixed;
  right: 8px;
  text-decoration: none;
  transition: background-color, opacity, transform, visibility;
  transition-duration: 400ms;
  visibility: hidden;
  width: ${BUTTON_SIZE};
  will-change: background-color, opacity, transform;
  z-index: 9;

  &.--visible {
    opacity: 1;
    visibility: visible;
  }

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
