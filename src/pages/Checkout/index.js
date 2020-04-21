import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Layout } from '../../components';
import { useCart } from '../../contexts';

import CheckoutItem from './CheckoutItem';
import EmptyCheckoutMessage from './EmptyMessage';
import * as S from './styled';

function CheckoutPage() {
  const { cart } = useCart();
  const { action, push } = useHistory();

  useEffect(() => {
    if (action === 'REPLACE' || action === 'POP') push('/sacola');
  }, []);

  return (
    <Layout>
      {cart.items.length ? (
        <S.CheckoutItemsList>
          {cart.items.map((each) => (
            <CheckoutItem key={each._id} {...each} />
          ))}
        </S.CheckoutItemsList>
      ) : (
        <EmptyCheckoutMessage />
      )}
    </Layout>
  );
}

export default CheckoutPage;
