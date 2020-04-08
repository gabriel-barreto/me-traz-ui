import React, { useEffect, useState } from 'react';

import { $product } from '../../services';

import { Layout, ProductsGroup } from '../../components';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    $product
      .fetchAll()
      .then((response) => setProducts(response))
      .catch((err) => {
        // TODO: show a message to user
        console.log('fetch error');
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <ProductsGroup title="Todos" products={products} />
    </Layout>
  );
}

export default HomePage;
