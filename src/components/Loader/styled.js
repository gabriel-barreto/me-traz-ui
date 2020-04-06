import styled from 'styled-components';

const spinnerSize = '8rem';
export const LoaderSpinner = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 0.88s linear infinite;
  border: 1rem solid ${({ theme }) => theme.chromaColors.lightest.alpha(0.4)};
  border-bottom-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 50%;
  height: ${spinnerSize};
  width: ${spinnerSize};
`;

export const LoaderMessage = styled.p`
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 1.6rem;
  margin: 1.6rem 0 0 0;
  text-align: center;
`;

export const LoaderBackground = styled.div`
  background-color: ${({ theme }) => theme.chromaColors.darkest.alpha(0.96)};
  border-radius: 4px;
  flex-direction: column;
  padding: 3.2rem 4rem;
  box-shadow: 1px 2px 4px
    ${({ theme }) => theme.chromaColors.darkest.rgba(0.32)};
`;

export const LoaderWrapper = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to right bottom, ${theme.chromaColors.dark.alpha(
      0.8,
    )}, ${theme.chromaColors.darkest.alpha(0.8)})`};
  min-height: 100vh;
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  transition: opacity 400ms, visibility 400ms;
  top: 0;
  visibility: hidden;
  width: 100%;
  will-change: opacity, visibility;
  z-index: 999;

  &.--visible {
    opacity: 1;
    visibility: visible;
  }

  &,
  > ${LoaderBackground} {
    align-items: center;
    background-blend-mode: multiply;
    display: flex;
    justify-content: center;
  }
`;
