import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function AddToCartForm({
  onAddToCart,
  onQttChange,
  onUpdateEntry,
  total,
  updateMode,
}) {
  function onSubmitHandler(e) {
    e.preventDefault();

    if (updateMode) return onUpdateEntry();
    return onAddToCart();
  }

  return (
    <S.AddToCartForm method="POST" onSubmit={onSubmitHandler}>
      <S.AddToCartQttField>
        <S.QttFieldLabel>Quantidade:</S.QttFieldLabel>
        <S.QttFieldInput min={1} max={99} onChange={onQttChange} />
      </S.AddToCartQttField>
      <S.AddToCartButton type="submit">
        <S.AddToCartTotal>
          <S.AddToCardTotalCurrency>R$</S.AddToCardTotalCurrency>
          <S.AddToCardTotalValue>
            {`${parseFloat(total).toFixed(2)}`.replace('.', ',')}
          </S.AddToCardTotalValue>
        </S.AddToCartTotal>
        <S.AddToCartLabel>
          {updateMode ? 'Atualizar' : 'põe na sacola'}
        </S.AddToCartLabel>
      </S.AddToCartButton>
    </S.AddToCartForm>
  );
}

AddToCartForm.defaultProps = { updateMode: false };
AddToCartForm.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onQttChange: PropTypes.func.isRequired,
  onUpdateEntry: PropTypes.func.isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  updateMode: PropTypes.bool,
};

export default AddToCartForm;
