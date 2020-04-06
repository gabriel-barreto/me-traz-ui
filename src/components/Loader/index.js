import React from 'react';

import * as S from './styled';

import { useLoader } from '../../contexts';

function Loader() {
  const { config } = useLoader();
  return (
    <S.LoaderWrapper className={`${config.visible ? '--visible' : ''}`}>
      <S.LoaderBackground>
        <S.LoaderSpinner />
        <S.LoaderMessage>{config.label}</S.LoaderMessage>
      </S.LoaderBackground>
    </S.LoaderWrapper>
  );
}

export default Loader;
