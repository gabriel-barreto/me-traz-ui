import React from 'react';

import EmptyIllustration from '../../../assets/empty-checkout-illustration.svg';
import * as S from './styled';

function EmptyCheckoutMessage() {
  const message = 'Sua sacola ainda está vazia!';
  return (
    <S.EmptyMessageWrapper>
      <S.EmptyMessageIllustration
        alt={message}
        src={EmptyIllustration}
        title={message}
      />
      <S.EmptyMessageContent>{message}</S.EmptyMessageContent>
      <S.EmptyMessageGoBack to="/">Ver Produtos</S.EmptyMessageGoBack>
    </S.EmptyMessageWrapper>
  );
}

export default EmptyCheckoutMessage;
