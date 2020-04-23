import React from 'react';
import PropTypes from 'prop-types';

import * as S from '../CheckoutItem/styled';

function CheckoutItemAdditional({ additional }) {
  const list = additional
    .filter((each) => each.qtt > 0)
    .map(({ itemPrice, qtt, ...rest }) => ({
      ...rest,
      qtt,
      itemPrice: qtt * itemPrice,
    }));

  return list.length > 0 ? (
    <S.CheckoutItemObs>
      {list.map(({ _id, item, itemPrice, qtt }) => (
        <S.CheckoutItemObsItem key={_id}>
          <S.CheckoutItemQtt>{qtt}x</S.CheckoutItemQtt>
          <S.CheckoutItemObsLabel>{item}</S.CheckoutItemObsLabel>
          <S.CheckoutItemPrice prefix="+" value={itemPrice} />
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
