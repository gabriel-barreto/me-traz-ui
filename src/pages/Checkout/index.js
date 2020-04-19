import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Layout } from '../../components';
import { useCart } from '../../contexts';

import EmptyCheckoutMessage from './EmptyMessage';

function CheckoutPage() {
  const { cart } = useCart();
  const { action, push } = useHistory();

  useEffect(() => {
    if (action === 'REPLACE' || action === 'POP') push('/sacola');
  }, []);

  return (
    <Layout>
      {cart.items.length ? (
        cart.items.map(({ _id, title }) => <p key={_id}>{title}</p>)
      ) : (
        <EmptyCheckoutMessage />
      )}
    </Layout>
  );
}

export default CheckoutPage;
