import React from 'react';
import PropTypes from 'prop-types';

import CheckoutItem from '../CheckoutItem';
import EmptyCheckoutMessage from '../EmptyMessage';

import * as S from './styled';

function CheckoutItems({ items, onEdit, onRemove }) {
  return (
    <S.CheckoutItemsWrapper>
      <S.CheckoutItemsTitle>Sua Sacola</S.CheckoutItemsTitle>
      {items.length ? (
        <S.CheckoutItemsList>
          {items.map((each) => (
            <CheckoutItem
              key={each._id}
              {...each}
              onEdit={() => onEdit(each._id)}
              onRemove={() => onRemove(each._id)}
            />
          ))}
        </S.CheckoutItemsList>
      ) : (
        <EmptyCheckoutMessage />
      )}
    </S.CheckoutItemsWrapper>
  );
}

CheckoutItems.defaultProps = { items: [] };
CheckoutItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ ...CheckoutItem.propTypes, _id: PropTypes.string }),
  ),
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CheckoutItems;
