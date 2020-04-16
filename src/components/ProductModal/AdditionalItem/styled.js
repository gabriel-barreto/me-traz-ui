import styled from 'styled-components';

export const AdditionalItemLabel = styled.p`
  color: ${({ theme }) => theme.hexColors.darkest};
  font-size: 1.6rem;
  line-height: 136%;
  margin: 0 0.8rem 0 0;
`;

export const AdditionalItemPriceValue = styled.p`
  color: ${({ theme }) => theme.hexColors.primary};
  font-size: 1.4rem;
  font-weight: 500;
`;
export const AdditionalItemPriceCurrency = styled.p`
  color: ${({ theme }) => theme.hexColors.primaryDark};
  margin: 0 0.32rem 0 0;
`;

export const AdditionalItemPrice = styled.div`
  align-items: flex-end;
  display: flex;
`;

export const AdditionalInfoWrapper = styled.div`
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.8rem 0 0;

  > ${AdditionalItemPrice} {
    margin: 0.64rem 0 0 0;
  }
`;

export const AdditionalItemContainer = styled.li`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 3.2rem;

  &,
  > ${AdditionalInfoWrapper} {
    display: flex;
    width: 100%;
  }
`;
