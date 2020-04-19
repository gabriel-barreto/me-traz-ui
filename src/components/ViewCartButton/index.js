import React from 'react';

import { useCart } from '../../contexts';
import { ShoppingBag } from '../../styles/icons.styles';

import * as S from './styled';

function ViewCartButton() {
  const { cart } = useCart();
  const qtt = (() => cart.items.reduce((prev, curr) => prev + curr.qtt, 0))();
  const fancyQtt = (() => (qtt > 9 ? '9+' : qtt))();

  return (
    <S.ViewCartButtonWrapper
      className={qtt > 0 ? '--visible' : ''}
      to="/sacola"
    >
      <S.ViewCartButtonCounter>{fancyQtt}</S.ViewCartButtonCounter>
      <S.ViewCartButtonIcon>
        <ShoppingBag size={24} />
      </S.ViewCartButtonIcon>
    </S.ViewCartButtonWrapper>
  );
}

export default ViewCartButton;
