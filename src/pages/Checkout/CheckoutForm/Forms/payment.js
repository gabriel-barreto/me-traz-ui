import React, { useState } from 'react';

import * as S from './styled';

import formPropTypes from './formType';

function PaymentCheckoutForm({ onChange, onPrev }) {
  const [paymentType, setPaymentType] = useState('');
  const options = [
    { label: 'Dinheiro', value: 'Dinheiro' },
    { label: 'Cartão Crédito Visa', value: 'Cartão Crédito Visa' },
    { label: 'Cartão Débito Visa', value: 'Cartão Débito Visa' },
    { label: 'Cartão Crédito Mastercard', value: 'Cartão Crédito Mastercard' },
    { label: 'Cartão Débito Mastercard', value: 'Cartão Débito Mastercard' },
    { label: 'Cartão Débito ELO', value: 'Cartão Débito ELO' },
    { label: 'Cartão Crédito ELO', value: 'Cartão Crédito ELO' },
    { label: 'Vale Alimentação', value: 'Vale Alimentação' },
    { label: 'Vale Refeição', value: 'Vale Refeição' },
  ];

  function onPaymentTypeSelect({ target }) {
    const { value } = target;
    setPaymentType(value);
    return onChange({ target });
  }

  return (
    <>
      <S.FormTitle>E sobre o pagamento?</S.FormTitle>
      <S.FormDropdown
        label="Forma de pagamento*:"
        name="paymentMethod"
        placeholder="Selecione..."
        options={options}
        onChange={onPaymentTypeSelect}
      />

      {paymentType === 'Dinheiro' ? (
        <S.FormInput
          helper="Informe apenas os números"
          label="Precisa de troco?"
          name="paymentChang"
          placeholder="Exemplo: 50.50"
          type="number"
          onChange={onChange}
        />
      ) : null}

      <S.FormActions>
        <S.FormSecondaryAction onClick={onPrev}>Voltar</S.FormSecondaryAction>
        <S.FormSubmitAction type="submit">Enviar Pedido</S.FormSubmitAction>
        <S.FormActionsLegend>* Campos Requeridos</S.FormActionsLegend>
      </S.FormActions>
    </>
  );
}

PaymentCheckoutForm.propTypes = formPropTypes;

export default PaymentCheckoutForm;
