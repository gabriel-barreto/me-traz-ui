import React from 'react';
import PropTypes from 'prop-types';

import { Edit, Trash } from '../../../styles/icons.styles';
import { $PriceFormatter } from '../../../utils';

import Additional from '../Additional';
import Ingredients from '../Ingredients';

import * as S from './styled';

function CheckoutItem({
  addedAdditional,
  ingredients,
  onEdit,
  onRemove,
  title,
  price,
}) {
  const fancyPrice = $PriceFormatter.fancy(price);

  return (
    <S.CheckoutItemWrapper>
      <S.CheckoutItemTitleContainer>
        <S.CheckoutItemTitle>{title}</S.CheckoutItemTitle>
        <S.CheckoutItemPrice>
          <S.CheckoutItemPriceCurrency>R$</S.CheckoutItemPriceCurrency>
          <S.CheckoutItemPriceValue>{fancyPrice}</S.CheckoutItemPriceValue>
        </S.CheckoutItemPrice>
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
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CheckoutItem;
