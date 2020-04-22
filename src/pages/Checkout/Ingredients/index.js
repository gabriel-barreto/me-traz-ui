import React from 'react';
import PropTypes from 'prop-types';

import * as S from '../CheckoutItem/styled';

function CheckoutItemIngredients({ ingredients }) {
  const list = ingredients
    .filter((each) => !each.selected)
    .map(({ label }) => `Sem ${label}`);

  return list.length > 0 ? (
    <S.CheckoutItemObs>
      {list.map((item) => (
        <S.CheckoutItemObsItem key={item}>
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
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ),
};

export default CheckoutItemIngredients;
