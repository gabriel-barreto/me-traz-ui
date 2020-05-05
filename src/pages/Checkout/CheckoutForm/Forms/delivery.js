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

      {state === 'withdraw' ? (
        <S.FormInfo>
          <S.FormInfoTitle>Informações para retirada</S.FormInfoTitle>
          <S.FormInfoProp>
            <S.FormInfoPropLabel>Local:</S.FormInfoPropLabel>
            <S.FormInfoPropValue>
              R. Padre Albuquerque, 1111 - 1º Andar - Centro, Itapetininga - SP,
              18200-075
            </S.FormInfoPropValue>
          </S.FormInfoProp>
          <S.FormInfoProp>
            <S.FormInfoPropLabel>Telefone:</S.FormInfoPropLabel>
            <S.FormInfoPropValue>(15) 3527-0139</S.FormInfoPropValue>
          </S.FormInfoProp>
          <S.FormInfoProp>
            <S.FormInfoPropLabel>Tempo médio de espera:</S.FormInfoPropLabel>
            <S.FormInfoPropValue>30 à 45 minutos</S.FormInfoPropValue>
          </S.FormInfoProp>
        </S.FormInfo>
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
