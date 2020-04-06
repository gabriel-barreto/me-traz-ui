import React from 'react';

import * as S from './styled';

import brand from '../../assets/brand-sm.png';

function Navbar() {
  return (
    <S.Navbar>
      <S.NavBrand src={brand} tilte="Me Traz" alt="Me Traz" />
    </S.Navbar>
  );
}

export default Navbar;
