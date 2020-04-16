import styled from 'styled-components';

import { breakpoint } from '../../styles';

export const ProductModalWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.48)};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const HeaderBackground = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 32rem;
  margin: 0 0 -4.8rem 0;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 124%;
  margin: 0 0 0.8rem 0;
`;

export const HeaderDescriptions = styled.p`
  font-size: 1.6rem;
  line-height: 136%;
`;

export const HeaderTitleContainer = styled.div`
  background-color: ${({ theme }) => theme.hexColors.primary};
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.4)};
  padding: 3.2rem;
  margin: 0 auto;
  max-width: 46.4rem;
  width: 88%;
  z-index: 9;

  @media screen and (min-width: ${breakpoint('sm')}) {
    margin: 0 0 0 3.2rem;
  }

  > ${HeaderDescriptions}, > ${HeaderTitle} {
    color: ${({ theme }) => theme.hexColors.lightest};
  }
`;

export const ModalCloseButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.primary};
  border: none;
  color: ${({ theme }) => theme.hexColors.lightest};
  display: flex;
  fill: ${({ theme }) => theme.hexColors.lightest};
  height: 4.4rem;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 400ms, transform 400ms;
  width: 4.4rem;
  will-change: background-color, transform;

  &:hover {
    background-color: ${({ theme }) => theme.hexColors.primaryDark};
  }
  &:active {
    transform: scale(0.88);
  }
`;

export const ModalDialogHeader = styled.div`
  position: relative;
  width: 100%;
`;

export const ModalDialogBody = styled.div`
  margin: 3.2rem 0;
`;

export const ModalDialogFooter = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.primary};
  box-shadow: 0 -2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  display: flex;
  justify-content: flex-end;
  padding: 2.4rem 3.2rem;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const ModalDialog = styled.div`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  box-shadow: 1px 3px 6px
    ${({ theme }) => theme.chromaColors.darkest.alpha(0.4)};
  height: 88vh;
  margin: 0 auto;
  max-height: 80rem;
  max-width: 80rem;
  overflow-y: scroll;
  position: relative;
  width: 88%;
`;
