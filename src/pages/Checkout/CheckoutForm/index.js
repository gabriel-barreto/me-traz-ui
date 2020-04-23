import React, { useState } from 'react';

import { Input } from '../../../components';

import * as S from './styled';

const steps = {
  1: 'one',
  2: 'two',
  3: 'three',
};
function CheckoutForm() {
  const [active, setActive] = useState('--one');

  function onActiveChange(targetClass) {
    setActive(`--${targetClass}`);
  }

  return (
    <S.CheckoutFormWrapper>
      <S.CheckoutFormSteps>
        {Object.keys(steps).map((key) => (
          <S.CheckoutFormStep
            key={key}
            onClick={() => onActiveChange(steps[key])}
          >
            {key}
          </S.CheckoutFormStep>
        ))}
        <S.CheckoutFormIndicator className={active} />
      </S.CheckoutFormSteps>
      <S.CheckoutFormContainer method="POST">
        <Input
          type="text"
          name="name"
          label="Nome:*"
          placeholder="Exemplo: Lorem Ipsum"
          onChange={() => {}}
        />
      </S.CheckoutFormContainer>
    </S.CheckoutFormWrapper>
  );
}

export default CheckoutForm;
