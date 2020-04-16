import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function SpinInput({ min, max, onChange, stage }) {
  const [counter, setCounter] = useState(min);

  useEffect(() => {
    onChange(counter);
  }, [counter]);

  function safeSetCounter(value) {
    if (!value && Number.isNaN(min)) return min;
    if (value === counter) return null;

    if (max && value >= max) return setCounter(max);
    if (value <= min) return setCounter(min);

    return setCounter(value);
  }

  function updateCount(op = 'add', value = stage) {
    if (op === 'add') return safeSetCounter(counter + value);
    if (op === 'replace') return safeSetCounter(value);
    return safeSetCounter(counter - value);
  }

  function onInputHandler({ target }) {
    const { value } = target;
    if (!value) return setCounter('');
    return updateCount('replace', value);
  }

  return (
    <S.SpinInputContainer>
      <S.SpinInputButton
        alt="Remover"
        title="Remover"
        onClick={() => updateCount('remove')}
      >
        -
      </S.SpinInputButton>
      <S.SpinInputDisplay
        max={max}
        min={min}
        type="text"
        value={counter}
        onChange={onInputHandler}
      />
      <S.SpinInputButton
        alt="Adicionar"
        title="Adicionar"
        onClick={() => updateCount('add')}
      >
        +
      </S.SpinInputButton>
    </S.SpinInputContainer>
  );
}

SpinInput.defaultProps = { max: null, min: 0, onChange: () => {}, stage: 1 };
SpinInput.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  stage: PropTypes.number,
};

export default SpinInput;
