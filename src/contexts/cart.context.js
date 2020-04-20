import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { $CartStore } from '../utils';

const INITIAL_STATE = { items: [], total: 0, pure: true };

const CartContext = createContext(INITIAL_STATE);

export function CartProvider({ children }) {
  const [cart, rawSetCart] = useState({ ...INITIAL_STATE });

  function setCart(action) {
    rawSetCart((prev) => ({ ...prev, pure: false }));
    rawSetCart(action);

    return cart;
  }

  useEffect(() => {
    if (!cart.pure) toast.success('Sacola Atualizada!');
    if (cart.items.length > 0) $CartStore.set(cart);
  }, [cart]);

  useEffect(() => {
    const stored = $CartStore.get();
    if (stored.items) {
      if (Object.keys(stored).length)
        rawSetCart((prev) => ({ ...prev, ...stored, pure: true }));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
