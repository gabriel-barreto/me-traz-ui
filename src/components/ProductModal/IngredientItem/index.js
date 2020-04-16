import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Check } from '../../../styles/icons.styles';

import * as S from './styled';

function IngredientItem({ label, locked, onClick, state }) {
  const [selected, setSelected] = useState(state);

  function onClickHandler() {
    if (!locked) setSelected(!selected);
    return onClick({ label, selected });
  }

  return (
    <S.IngredientItemContainer
      className={`${selected ? '--selected' : ''} ${locked ? '--locked' : ''}`}
    >
      <S.IngredientItemTogglerWrapper type="button" onClick={onClickHandler}>
        <S.IngredientItemLabel>{label}</S.IngredientItemLabel>
        <S.IngredientItemIndicator>
          <Check size={32} />
        </S.IngredientItemIndicator>
      </S.IngredientItemTogglerWrapper>
    </S.IngredientItemContainer>
  );
}

IngredientItem.defaultProps = { state: true, locked: false };
IngredientItem.propTypes = {
  label: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  state: PropTypes.bool,
};

export default IngredientItem;
