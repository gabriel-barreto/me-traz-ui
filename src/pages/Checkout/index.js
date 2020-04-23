import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Layout } from '../../components';
import { useCart } from '../../contexts';

import CheckoutItem from './CheckoutItem';
import EmptyCheckoutMessage from './EmptyMessage';
import * as S from './styled';

const INITIAL_STATE = { index: -1, payload: {} };

function CheckoutPage() {
  const [, setEdit] = useState({ ...INITIAL_STATE });
  const { cart, setCart } = useCart();
  const { action, push } = useHistory();

  function onItemEditHandler(itemId) {
    const index = cart.items.findIndex((each) => each._id === itemId);
    const payload = cart.items[index];
    const updatedEditing = { index, payload };

    setEdit(updatedEditing);
    console.log(updatedEditing);
  }

  function onItemRemoveHandler(itemId) {
    const cartItems = [...cart.items];
    const foundIndex = cart.items.findIndex((each) => each._id === itemId);

    cartItems.splice(foundIndex, 1);
    setCart((prev) => ({ ...prev, items: cartItems }));
  }

  useEffect(() => {
    if (action === 'REPLACE' || action === 'POP') push('/sacola');
  }, []);

  return (
    <Layout>
      <S.CheckoutItemsWrapper>
        <S.CheckoutItemsTitle>Sua Sacola</S.CheckoutItemsTitle>
        {cart.items.length ? (
          <S.CheckoutItemsList>
            {cart.items.map((each) => (
              <CheckoutItem
                key={each._id}
                {...each}
                onEdit={() => onItemEditHandler(each._id)}
                onRemove={() => onItemRemoveHandler(each._id)}
              />
            ))}
          </S.CheckoutItemsList>
        ) : (
          <EmptyCheckoutMessage />
        )}
      </S.CheckoutItemsWrapper>
    </Layout>
  );
}

export default CheckoutPage;
