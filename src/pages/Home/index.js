import React, { useEffect, useState } from 'react';

import { $product } from '../../services';

import { useProductsContext } from '../../contexts';
import { Layout, ProductsGroup, ProductModal } from '../../components';

function HomePage() {
  const [state, setState] = useState({ productModalVisible: false });
  const { products, setProducts, search } = useProductsContext();
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
        onProductClick={() =>
          setState((prev) => ({ ...prev, productModalVisible: true }))
        }
      />
      <ProductModal
        visible={state.productModalVisible}
        onClose={() =>
          setState((prev) => ({ ...prev, productModalVisible: false }))
        }
      />
    </Layout>
  );
}

export default HomePage;
