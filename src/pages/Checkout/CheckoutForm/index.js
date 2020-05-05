import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { steps } from './content';
import * as S from './styled';

function CheckoutForm() {
  const [active, setActive] = useState(steps[1]);
  const [payload, setPayload] = useState({ deliveryType: '' });

  function onActiveChange(activeForm) {
    setActive(activeForm);
  }

  function isDeliveryValuesIncomplete() {
    if (payload.deliveryType === 'withdraw') return false;

    const requiredProps = ['cep', 'number'];
    return requiredProps
      .map((key) => Object.keys(payload).includes(key) && payload[key])
      .includes(false);
  }

  function onFormChange(type = 'next') {
    if (type === 'next') {
      const payloadKeys = Object.keys(payload);
      const hasAbsentProp = active.requestedKeys
        .map((key) => payloadKeys.includes(key) && payload[key])
        .includes(false);

      if (hasAbsentProp || isDeliveryValuesIncomplete()) {
        toast.error('Você ainda não completou esta etapa!');
        return;
      }
    }
    setActive(steps[active[type]]);
  }

  function onChangeHandler({ target }) {
    const { name, value } = target;

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
