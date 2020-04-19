import React from 'react';

import { ShoppingBag } from '../../styles/icons.styles';

import * as S from './styled';

function ViewCartButton() {
  return (
    <S.ViewCartButtonWrapper>
      <S.ViewCartButtonIcon>
        <ShoppingBag size={24} />
      </S.ViewCartButtonIcon>
    </S.ViewCartButtonWrapper>
  );
}

export default ViewCartButton;
