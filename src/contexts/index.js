import React from 'react';
import PropTypes from 'prop-types';

import { LoaderProvider } from './loader.context';
import { ProductsProvider } from './products.context';

export default function AppContextProvider({ children }) {
  return (
    <LoaderProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </LoaderProvider>
  );
}
AppContextProvider.propTypes = { children: PropTypes.node.isRequired };

// ==> Context Hooks
export { useLoader, setLoader } from './loader.context';
export { useProductsContext } from './products.context';
