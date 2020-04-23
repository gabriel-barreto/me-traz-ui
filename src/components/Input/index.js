import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Input({
  className,
  label,
  name,
  onChange,
  placeholder,
  type,
  ...rest
}) {
  return (
    <S.InputWrapper className={className}>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.InputField
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...rest}
      />
    </S.InputWrapper>
  );
}

Input.defaultProps = { className: '', type: 'text' };
Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'email']),
  onChange: PropTypes.func.isRequired,
};

export default Input;
