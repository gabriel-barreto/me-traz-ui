import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function AddToCartForm({ total }) {
  return (
    <S.AddToCartForm method="POST" onSubmit={(e) => e.preventDefault()}>
      <S.AddToCartQttField>
        <S.QttFieldLabel>Quantidade:</S.QttFieldLabel>
        <S.QttFieldInput min={1} max={99} />
      </S.AddToCartQttField>
      <S.AddToCartButton>
        <S.AddToCartTotal>
          <S.AddToCardTotalCurrency>R$</S.AddToCardTotalCurrency>
          <S.AddToCardTotalValue>
            {`${parseFloat(total).toFixed(2)}`.replace('.', ',')}
          </S.AddToCardTotalValue>
        </S.AddToCartTotal>
        <S.AddToCartLabel>põe na sacola!</S.AddToCartLabel>
      </S.AddToCartButton>
    </S.AddToCartForm>
  );
}

AddToCartForm.propTypes = {
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AddToCartForm;
