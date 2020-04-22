import React from 'react';
import PropTypes from 'prop-types';

import * as S from '../CheckoutItem/styled';

function CheckoutItemIngredients({ ingredients }) {
  const list = ingredients
    .filter((each) => each.selected === false)
    .map(({ _id, label }) => ({ _id, item: `Sem ${label}` }));

  return list.length > 0 ? (
    <S.CheckoutItemObs>
      {list.map(({ _id, item }) => (
        <S.CheckoutItemObsItem key={_id}>
          <S.CheckoutItemObsLabel>{item}</S.CheckoutItemObsLabel>
        </S.CheckoutItemObsItem>
      ))}
    </S.CheckoutItemObs>
  ) : null;
}

CheckoutItemIngredients.defaultProps = { ingredients: [] };
CheckoutItemIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ),
};

export default CheckoutItemIngredients;
