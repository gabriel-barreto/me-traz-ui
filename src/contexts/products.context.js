import React, { createContext, useContext, useState } from 'react';

import PropTypes from 'prop-types';

const INITIAL_STATE = [];
const ProductsContext = createContext(INITIAL_STATE);

export function ProductsProvider({ children }) {
  const [state, setState] = useState({ products: [], search: '' });
  const { products, search } = state;

  function setProducts(payload) {
    setState((prev) => ({ ...prev, products: payload }));
  }

  function setSearch(term) {
    setState((prev) => ({ ...prev, search: term }));
  }

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, search, setSearch }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
ProductsProvider.defaultProps = { children: null };
ProductsProvider.propTypes = { children: PropTypes.node };

export const useProductsContext = () => useContext(ProductsContext);
