import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoint } from '../../../styles';

export const EmptyMessageIllustration = styled.img`
  height: auto;
  max-height: 16rem;
  object-fit: contain;
  object-position: center;
  width: auto;

  @media screen and (min-width: ${breakpoint('md')}) {
    max-height: 24rem;
  }
`;

export const EmptyMessageContent = styled.p`
  color: ${({ theme }) => theme.hexColors.lightest};
  font-size: 1.6rem;
`;

export const EmptyMessageGoBack = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 3px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  color: ${({ theme }) => theme.hexColors.primary};
  display: flex;
  font-size: 1.6rem;
  font-weight: 500;
  justify-content: center;
  min-height: 4.8rem;
  padding: 1rem 2.4rem;
  text-align: center;
  text-transform: uppercase;
`;

export const EmptyMessageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2.4rem 0 0 0;

  > ${EmptyMessageContent} {
    margin: 2.4rem 0 4rem 0;
  }
`;
