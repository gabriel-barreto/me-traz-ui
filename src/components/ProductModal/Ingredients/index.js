import React from 'react';
import PropTypes from 'prop-types';

import IngredientItem from './IngredientItem';
import ItemsGroup from '../ItemsGroup';

function Ingredients({ ingredients, onChange }) {
  return (
    <ItemsGroup title="Ingredients">
      {ingredients.map(({ _id: itemId, label, required }) => (
        <IngredientItem
          _id={itemId}
          key={itemId}
          label={label}
          locked={required}
          onClick={onChange}
        />
      ))}
    </ItemsGroup>
  );
}

Ingredients.defaultProps = { ingredients: [] };
Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      label: PropTypes.string,
      required: PropTypes.bool,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

export default Ingredients;
