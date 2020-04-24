import React, { useState } from 'react';

import * as S from './styled';

import formPropTypes from './formType';

function DeliveryCheckoutForm({ onChange, onNext }) {
  const [state, setState] = useState('');

  function onChooseType({ target }) {
    const { value } = target;
    setState(value);
    return onChange({ target });
  }

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
        onChange={onChooseType}
      />

      {state === 'delivery' ? (
        <>
          <S.FormInput
            label="CEP*:"
            name="cep"
            placeholder="Exemplo: 18201500"
            helper="Informe apenas os números"
            onChange={onChange}
          />
          <S.FormInput
            label="Número*:"
            name="number"
            placeholder="Exemplo: 123"
            onChange={onChange}
          />
          <S.FormInput
            label="Complemento:"
            name="complement"
            placeholder="Exemplo: Apto 191"
            onChange={onChange}
          />
        </>
      ) : null}

      <S.FormActions>
        <S.FormSubmitAction onClick={onNext}>Próximo</S.FormSubmitAction>
        <S.FormActionsLegend>* Campos Requeridos</S.FormActionsLegend>
      </S.FormActions>
    </>
  );
}

DeliveryCheckoutForm.propTypes = formPropTypes;

export default DeliveryCheckoutForm;
