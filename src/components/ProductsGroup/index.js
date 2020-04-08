import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

import ProductCard, { Type as ProductType } from '../ProductCard';

function ProductsGroup({ title, products }) {
  return (
    <S.ProductsGroup>
      <S.ProductsGroupHeader>
        <S.ProductsGroupTitle>{title}</S.ProductsGroupTitle>
      </S.ProductsGroupHeader>
      <S.ProductsGroupBody>
        {products.map((each) => (
          <ProductCard {...each} key={each._id} />
        ))}
      </S.ProductsGroupBody>
    </S.ProductsGroup>
  );
}

ProductsGroup.defaultProps = { products: [] };
ProductsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(ProductType)),
};

export default ProductsGroup;
