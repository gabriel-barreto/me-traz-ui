import { css } from 'styled-components';

export default css`
  .Toastify__toast {
    margin: 0 auto 0.8rem auto;
    max-width: 40rem;
    width: 88%;
  }

  .Toastify__toast-body {
    font-size: 1.6rem;
  }

  .Toastify__toast--success {
    background-color: ${({ theme }) => theme.hexColors.primaryDark};
  }
`;
