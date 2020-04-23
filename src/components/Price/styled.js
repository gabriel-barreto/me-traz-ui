import styled from 'styled-components';

export const PriceCurrency = styled.p`
  font-size: 1.2rem;
  margin: 0 0.32rem 0 0;
  text-align: center;
  vertical-align: middle;
`;

export const PriceValue = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const PriceWrapper = styled.span`
  color: ${({ theme }) => theme.hexColors.lightest};
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
