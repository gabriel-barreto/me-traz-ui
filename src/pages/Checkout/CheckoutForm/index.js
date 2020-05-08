import React, { useState } from 'react';

import { steps, maskedValues, isFormValuesValid } from './content';
import * as S from './styled';

function CheckoutForm() {
  const [active, setActive] = useState(steps[1]);
  const [payload, setPayload] = useState({ deliveryType: '' });

  function onActiveChange(targetForm) {
    const { id } = active;
    if (targetForm.id > id && !isFormValuesValid(payload, active)) return;

    setActive(targetForm);
  }

  function onFormChange(type = 'next') {
    if (type === 'next' && !isFormValuesValid(payload, active)) return;
    setActive(steps[active[type]]);
  }

  function onChangeHandler({ target }) {
    const { name, value } = target;
    if (Object.keys(maskedValues).includes(name)) {
      const maskedValue = maskedValues[name](value);
      Object.assign(target, { value: maskedValue });
    }

    return setPayload((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(payload);
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
        <active.component
          onChange={onChangeHandler}
          onNext={() => onFormChange('next')}
          onPrev={() => onFormChange('prev')}
        />
      </S.CheckoutFormContainer>
    </S.CheckoutFormWrapper>
  );
}

export default CheckoutForm;
