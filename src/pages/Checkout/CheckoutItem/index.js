import React from 'react';
import PropTypes from 'prop-types';

import { Edit, Trash } from '../../../styles/icons.styles';

import Additional from '../Additional';
import Ingredients from '../Ingredients';

import * as S from './styled';

function CheckoutItem({
  addedAdditional,
  ingredients,
  onEdit,
  onRemove,
  price,
  title,
  qtt,
}) {
  return (
    <S.CheckoutItemWrapper>
      <S.CheckoutItemTitleContainer>
        <S.CheckoutItemQtt>{qtt}x</S.CheckoutItemQtt>
        <S.CheckoutItemTitle>{title}</S.CheckoutItemTitle>
        <S.CheckoutItemPrice value={price} />
      </S.CheckoutItemTitleContainer>
      <Ingredients ingredients={ingredients} />
      <Additional additional={addedAdditional} />
      <S.CheckoutItemActionsContainer>
        <S.CheckoutItemAction type="button" onClick={onEdit}>
          <Edit size={18} />
        </S.CheckoutItemAction>
        <S.CheckoutItemAction type="button" onClick={onRemove}>
          <Trash size={18} />
        </S.CheckoutItemAction>
      </S.CheckoutItemActionsContainer>
    </S.CheckoutItemWrapper>
  );
}

CheckoutItem.defaultProps = { addedAdditional: [], ingredients: [] };
CheckoutItem.propTypes = {
  addedAdditional: Additional.propTypes.additional,
  ingredients: Ingredients.propTypes.ingredients,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  qtt: PropTypes.number.isRequired,
};

export default CheckoutItem;
