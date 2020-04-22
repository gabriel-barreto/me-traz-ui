import React from 'react';
import PropTypes from 'prop-types';

import { $PriceFormatter } from '../../../utils';

import * as S from '../CheckoutItem/styled';
// import * as S from './styled';

function CheckoutItemAdditional({ additional }) {
  const list = additional
    .filter((each) => each.qtt > 0)
    .map(({ _id, item, itemPrice }) => ({
      _id,
      item,
      itemPrice: $PriceFormatter.fancy(itemPrice),
    }));

  return list.length > 0 ? (
    <S.CheckoutItemObs>
      {list.map(({ _id, item, itemPrice }) => (
        <S.CheckoutItemObsItem key={_id}>
          <S.CheckoutItemObsLabel>{item}</S.CheckoutItemObsLabel>
          <S.CheckoutItemPrice>
            <S.CheckoutItemPriceCurrency>+ R$</S.CheckoutItemPriceCurrency>
            <S.CheckoutItemPriceValue>{itemPrice}</S.CheckoutItemPriceValue>
          </S.CheckoutItemPrice>
        </S.CheckoutItemObsItem>
      ))}
    </S.CheckoutItemObs>
  ) : null;
}

CheckoutItemAdditional.defaultProps = { additional: [] };
CheckoutItemAdditional.propTypes = {
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      itemPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }),
  ),
};

export default CheckoutItemAdditional;
