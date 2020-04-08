import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

function SelectField({ currentValue, onChange, options, placeholder }) {
  function onChangeHandler({ target }) {
    const { value } = target;
    return onChange(value);
  }

  return (
    <S.SelectField onChange={onChangeHandler} value={currentValue}>
      <S.SelectOption value="" disabled>
        {placeholder}
      </S.SelectOption>
      {options.map((each) => (
        <S.SelectOption value={each} key={each}>
          {each}
        </S.SelectOption>
      ))}
    </S.SelectField>
  );
}

SelectField.defaultProps = { currentValue: '', placeholder: 'Selecione...' };
SelectField.propTypes = {
  currentValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectField;
