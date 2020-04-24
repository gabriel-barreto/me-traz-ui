import React from 'react';

import { Dropdown } from '../../../../components';
import * as S from './styled';

import formPropTypes from './formType';

function PaymentCheckoutForm({ onChange, onPrev }) {
  const options = [
    { label: 'Cartão Crédito Visa', value: 'Cartão Crédito Visa' },
    { label: 'Cartão Débito Visa', value: 'Cartão Débito Visa' },
    { label: 'Cartão Crédito Mastercard', value: 'Cartão Crédito Mastercard' },
    { label: 'Cartão Débito Mastercard', value: 'Cartão Débito Mastercard' },
    { label: 'Cartão Débito ELO', value: 'Cartão Débito ELO' },
    { label: 'Cartão Crédito ELO', value: 'Cartão Crédito ELO' },
    { label: 'Vale Alimentação', value: 'Vale Alimentação' },
    { label: 'Vale Refeição', value: 'Vale Refeição' },
  ];
  return (
    <>
      <S.FormTitle>E sobre o pagamento?</S.FormTitle>
      <Dropdown
        label="Forma de pagamento*:"
        name="paymentMethod"
        placeholder="Selecione..."
        options={options}
        onChange={onChange}
      />
      <S.FormInput
        helper="Informe apenas os números"
        label="Precisa de troco?*"
        name="paymentChang"
        placeholder="Exemplo: 50"
        type="number"
        onChange={onChange}
      />
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
