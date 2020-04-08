import PropTypes from 'prop-types';
import React from 'react';

import SelectField from '../Select';

import * as S from './styled';

function FilterByForm({ currentValue, onChange, tags }) {
  const options = ['Exibir Todos', ...new Set(tags)];

  return (
    <S.FilterByForm>
      <SelectField
        currentValue={currentValue}
        onChange={onChange}
        options={options}
        placeholder="Exibir apenas..."
      />
    </S.FilterByForm>
  );
}

FilterByForm.defaultProps = { currentValue: '' };
FilterByForm.propTypes = {
  currentValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterByForm;
