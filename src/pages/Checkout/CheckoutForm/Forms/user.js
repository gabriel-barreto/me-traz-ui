import React from 'react';

import * as S from './styled';

import formPropTypes from './formType';

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

function UserCheckoutForm({ onChange }) {
  return (
    <>
      <S.FormTitle>Te conheço?</S.FormTitle>
      {fields.map((each) => (
        <S.FormInput {...each} key={each.name} onChange={onChange} />
      ))}
    </>
  );
}

UserCheckoutForm.propTypes = formPropTypes;

export default UserCheckoutForm;
