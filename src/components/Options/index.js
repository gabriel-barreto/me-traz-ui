import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Options({ className, chooses, helper, label, onChange }) {
  const [selected, setSelected] = useState('');

  function onChoose(newValue) {
    console.log(newValue);

    if (newValue === selected) return setSelected('');
    return setSelected(newValue);
  }

  useEffect(() => {
    onChange({ target: { name: 'option', value: selected } });
  }, [selected]);

  return (
    <S.InputWrapper className={className}>
      <S.InputLabel>{label}</S.InputLabel>
      {helper && <S.InputHelper>{helper}</S.InputHelper>}
      <S.OptionsChooses>
        {chooses.map(({ label: itemLabel, value }) => (
          <S.OptionsChoose
            key={value}
            className={value === selected && '--selected'}
            type="button"
            onClick={() => onChoose(value)}
          >
            {itemLabel}
          </S.OptionsChoose>
        ))}
      </S.OptionsChooses>
    </S.InputWrapper>
  );
}

Options.defaultProps = { className: '', helper: '' };
Options.propTypes = {
  className: PropTypes.string,
  chooses: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }),
  ).isRequired,
  helper: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Options;
