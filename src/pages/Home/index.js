import React, { useEffect, useState } from 'react';

import { $product } from '../../services';

import { useProductsContext, useCart } from '../../contexts';
import {
  Layout,
  ProductsGroup,
  ProductModal,
  ViewCartButton,
} from '../../components';

function HomePage() {
  const { setCart } = useCart();
  const { products, setProducts, search } = useProductsContext();

  const [state, setState] = useState({
    productModalVisible: false,
    selectedProduct: {
      _id: '',
      description: '',
      title: '',
      price: 0,
    },
  });

  function onAddToCart({ _id, ingredients, title, price }) {
    const payload = {
      _id,
      title,
      price,
      ingredients: ingredients.map((each) => ({ ...each, selected: true })),
      addedAdditional: [],
      additionalTotal: 0,
      qtt: 1,
      total: price,
    };
    return setCart((prev) => ({ ...prev, items: [...prev.items, payload] }));
  }

  useEffect(() => {
    $product
      .fetchAll()
      .then((response) => setProducts(response))
      .catch((_) => {
        // TODO: show a message to user
        // console.log('fetch error');
        // console.log(err);
      });
  }, []);

  const list = products.filter((each) => {
    if (search) {
      const regex = new RegExp(search, 'i');
      return regex.test(each.title);
    }
    return true;
  });

  return (
    <Layout>
      <ProductsGroup
        title="Todos"
        products={list}
        onAddToCart={onAddToCart}
        onProductClick={(product) =>
          setState((prev) => ({
            ...prev,
            productModalVisible: true,
            selectedProduct: product,
          }))
        }
      />

      <ProductModal
        {...state.selectedProduct}
        visible={state.productModalVisible}
        onClose={() =>
          setState((prev) => ({ ...prev, productModalVisible: false }))
        }
      />

      <ViewCartButton />
    </Layout>
  );
}

export default HomePage;
