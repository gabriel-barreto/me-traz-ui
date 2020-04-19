import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const INITIAL_STATE = { items: [], total: 0, pure: true };

const CartContext = createContext(INITIAL_STATE);

export function CartProvider({ children }) {
  const [cart, rawSetCart] = useState({ ...INITIAL_STATE });

  function setCart(action) {
    rawSetCart((prev) => ({ ...prev, pure: false }));
    return rawSetCart(action);
  }

  useEffect(() => {
    if (!cart.pure) toast.success('Sacola Atualizado!');
  }, [cart]);

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
