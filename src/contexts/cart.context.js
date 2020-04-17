import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = { items: [], total: 0 };

const CartContext = createContext(INITIAL_STATE);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ ...INITIAL_STATE });

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
