import PropTypes from 'prop-types';
import React from 'react';

import SelectField from '../Select';

import * as S from './styled';

function OrderByForm({ currentValue, onChange, options }) {
  const orderOptions = options.map((each) => each.value);

  return (
    <S.OrderByForm>
      <SelectField
        currentValue={currentValue}
        onChange={onChange}
        options={orderOptions}
        placeholder="Ordenar Por..."
      />
    </S.OrderByForm>
  );
}

OrderByForm.defaultProps = { currentValue: '' };
OrderByForm.propTypes = {
  currentValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ value: PropTypes.string.isRequired }),
    ]),
  ).isRequired,
};

export default OrderByForm;
