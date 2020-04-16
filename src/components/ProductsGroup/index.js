import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import orderBy from 'lodash.orderby';

import * as S from './styled';

import FilterByForm from '../FilterByForm';
import OrderByForm from '../OrderByForm';
import ProductCard from '../ProductCard';

function ProductsGroup({ onProductClick, products, title }) {
  const [state, setState] = useState({ filter: '', order: '', list: products });
  const tags = products.map((each) => each.tags).flatMap((each) => each);
  const orderParams = [
    { value: 'Preço Crescente', params: [['price'], ['asc']] },
    { value: 'Preço Decrescente', params: [['price'], ['desc']] },
    { value: 'Título', params: [['title'], ['asc']] },
  ];

  function onFilterChange(value) {
    setState((prev) => ({ ...prev, filter: value }));
  }

  function onOrderChange(value) {
    setState((prev) => ({ ...prev, order: value }));
  }

  useEffect(() => {
    const { filter, order } = state;
    let uList = products;

    // ==> Filter
    if (filter && filter !== 'Exibir Todos') {
      uList = products.filter((each) => each.tags.includes(filter));
    }

    // ==> Order
    if (order) {
      const { params } = orderParams.find((each) => each.value === order);
      uList = orderBy(uList, ...params);
    }

    setState((prev) => ({ ...prev, list: uList }));
  }, [state.filter, state.order, products]);

  const { filter, list, order } = state;
  return (
    <S.ProductsGroup>
      <S.ProductsGroupHeader>
        <S.ProductGroupTitleContainer>
          <S.ProductsGroupTitle>{title}</S.ProductsGroupTitle>
          <S.ProductsGroupCount>
            Exibindo {list.length} items
          </S.ProductsGroupCount>
        </S.ProductGroupTitleContainer>
        <S.ProductsGroupForms>
          <FilterByForm
            currentValue={filter}
            onChange={onFilterChange}
            tags={tags}
          />
          <OrderByForm
            currentValue={order}
            onChange={onOrderChange}
            options={orderParams}
          />
        </S.ProductsGroupForms>
      </S.ProductsGroupHeader>
      <S.ProductsGroupBody>
        {list.map((each) => (
          <ProductCard
            {...each}
            key={each._id}
            onClick={() => onProductClick(each)}
            onAddToCart={() => {}}
          />
        ))}
      </S.ProductsGroupBody>
    </S.ProductsGroup>
  );
}

const ProductType = Object.fromEntries(
  Object.keys(ProductCard.propTypes)
    .filter((each) => each.substring(0, 2) !== 'on')
    .map((each) => [each, ProductCard.propTypes[each]]),
);

ProductsGroup.defaultProps = { products: [] };
ProductsGroup.propTypes = {
  onProductClick: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(ProductType)),
  title: PropTypes.string.isRequired,
};

export default ProductsGroup;
