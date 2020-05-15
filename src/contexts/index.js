import React from 'react';
import PropTypes from 'prop-types';

import { CartProvider } from './cart.context';
import { LoaderProvider } from './loader.context';
import { ProductsProvider } from './products.context';

export default function AppContextProvider({ children }) {
  return (
    <LoaderProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </LoaderProvider>
  );
}
AppContextProvider.propTypes = { children: PropTypes.node.isRequired };

// ==> Context Hooks
export { useCart } from './cart.context';
export { useLoader } from './loader.context';
export { useProductsContext } from './products.context';
