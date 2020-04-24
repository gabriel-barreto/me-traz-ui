import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

import SpinInput from '../../../SpinInput';

function AdditionalItem({ _id, label, min, max, onChange, price }) {
  function onQttChangeHandler(qtt) {
    console.log(_id);
    return onChange({ _id, qtt });
  }

  return (
    <S.AdditionalItemContainer>
      <S.AdditionalInfoWrapper>
        <S.AdditionalItemLabel>{label}</S.AdditionalItemLabel>
        <S.AdditionalItemPrice>
          <S.AdditionalItemPriceCurrency>R$</S.AdditionalItemPriceCurrency>
          <S.AdditionalItemPriceValue>
            {`${parseFloat(price).toFixed(2)}`.replace('.', ',')}
          </S.AdditionalItemPriceValue>
        </S.AdditionalItemPrice>
      </S.AdditionalInfoWrapper>
      <SpinInput min={min} max={max} onChange={onQttChangeHandler} />
    </S.AdditionalItemContainer>
  );
}

AdditionalItem.defaultProps = { max: 999, min: 0, onChange: () => {} };
AdditionalItem.propTypes = {
  _id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AdditionalItem;
