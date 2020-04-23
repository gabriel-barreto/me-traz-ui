import React, { useState } from 'react';

import { steps } from './content';
import * as S from './styled';

function CheckoutForm() {
  const [active, setActive] = useState(steps[1]);
  const [, setPayload] = useState({});

  function onActiveChange(activeForm) {
    setActive(activeForm);
  }

  function onChangeHandler({ target }) {
    const { name, value } = target;
    return setPayload((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
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
        <S.CheckoutFormIndicator className={`--${active.targetClass}`} />
      </S.CheckoutFormSteps>
      <S.CheckoutFormContainer method="POST" onSubmit={onSubmitHandler}>
        <active.component onChange={onChangeHandler} />
      </S.CheckoutFormContainer>
    </S.CheckoutFormWrapper>
  );
}

export default CheckoutForm;
