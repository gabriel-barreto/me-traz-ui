import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Dropdown({
  className,
  helper,
  label,
  name,
  options,
  placeholder,
  onChange,
}) {
  return (
    <S.InputWrapper className={className}>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputHelper>{helper}</S.InputHelper>
      <S.DropdownField id={name} name={name} value="" onChange={onChange}>
        <S.DropdownOption value="" disabled>
          {placeholder}
        </S.DropdownOption>
        {options.map((each) => (
          <S.DropdownOption key={each.value} value={each.value}>
            {each.label}
          </S.DropdownOption>
        ))}
      </S.DropdownField>
    </S.InputWrapper>
  );
}

Dropdown.defaultProps = { className: '', helper: '' };
Dropdown.propTypes = {
  className: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
