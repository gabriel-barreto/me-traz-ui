import React from 'react';

import * as S from './styled';

import formPropTypes from './formType';

function PaymentCheckoutForm({ onChange }) {
  return (
    <>
      <S.FormTitle>E sobre o pagamento?</S.FormTitle>
      <S.FormInput
        name="paymentType"
        label="Forma de pagamento"
        placeholder="Cartão ou Dinheiro?"
        onChange={onChange}
      />
    </>
  );
}

PaymentCheckoutForm.propTypes = formPropTypes;

export default PaymentCheckoutForm;
