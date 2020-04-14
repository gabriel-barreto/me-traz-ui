import React, { useEffect } from 'react';

import { $product } from '../../services';

import { useProductsContext } from '../../contexts';
import { Layout, ProductsGroup } from '../../components';

function HomePage() {
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
      <ProductsGroup title="Todos" products={list} />
    </Layout>
  );
}

export default HomePage;
