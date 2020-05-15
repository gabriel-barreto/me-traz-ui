import React, { useEffect } from 'react';

import formPropTypes from './formType';
import * as S from './styled';

const fields = [
  {
    helper: 'Como gostaria de ser chamado?',
    label: 'Nome*:',
    name: 'name',
    placeholder: 'Exemplo: John Doe',
    type: 'text',
  },
  {
    helper: 'Qual o seu melhor email?',
    label: 'Email*:',
    name: 'email',
    placeholder: 'Exemplo: john.doe@email.com',
    type: 'email',
  },
  {
    helper: 'Informe apenas os números. DDD + Número.',
    label: 'WhatsApp*:',
    name: 'whatsapp',
    placeholder: 'Exemplo: (15) 99132-4354',
    type: 'text',
  },
];

function UserCheckoutForm({ onChange, onPrev, onNext }) {
  useEffect(() => {
    const toFocusInput = document.querySelector('input');
    toFocusInput.focus();
  }, []);

  return (
    <>
      <S.FormTitle>Te conheço?</S.FormTitle>
      {fields.map((each) => (
        <S.FormInput {...each} key={each.name} onChange={onChange} />
      ))}
      <S.FormActions>
        <S.FormSecondaryAction type="button" onClick={onPrev}>
          Voltar
        </S.FormSecondaryAction>
        <S.FormSubmitAction type="button" onClick={onNext}>
          Próximo
        </S.FormSubmitAction>
        <S.FormActionsLegend>* Campos Requeridos</S.FormActionsLegend>
      </S.FormActions>
    </>
  );
}

UserCheckoutForm.propTypes = formPropTypes;

export default UserCheckoutForm;
