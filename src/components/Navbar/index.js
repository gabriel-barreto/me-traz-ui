import React from 'react';

import brand from '../../assets/brand-sm.png';

import * as S from './styled';

function Navbar() {
  return (
    <S.Navbar>
      <S.NavBrand src={brand} tilte="Me Traz" alt="Me Traz" />
      <S.NavSearchForm />
    </S.Navbar>
  );
}

export default Navbar;
