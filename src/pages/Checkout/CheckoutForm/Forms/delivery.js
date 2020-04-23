import React from 'react';

import * as S from './styled';

import formPropTypes from './formType';

function DeliveryCheckoutForm({ onChange }) {
  return (
    <>
      <S.FormTitle>Sua sacola, é pra entregar?</S.FormTitle>
      <S.FormOptions
        name="deliveryType"
        label="Entregar ou Retirar?"
        chooses={[
          { label: 'Entregar', value: 'delivery' },
          { label: 'Retirar', value: 'withdraw' },
        ]}
        onChange={onChange}
      />
    </>
  );
}

DeliveryCheckoutForm.propTypes = formPropTypes;

export default DeliveryCheckoutForm;
