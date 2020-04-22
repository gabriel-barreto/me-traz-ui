import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Check } from '../../../styles/icons.styles';

import * as S from './styled';

function IngredientItem({ label, locked, onClick }) {
  const [selected, setSelected] = useState(true);

  function onClickHandler() {
    const updatedState = !selected;

    if (locked) return null;

    setSelected(updatedState);
    return onClick({ label, selected: updatedState });
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

IngredientItem.defaultProps = { locked: false };
IngredientItem.propTypes = {
  label: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default IngredientItem;
