import PropTypes from 'prop-types';
import React from 'react';

import { ShoppingBag } from '../../styles/icons.styles';

import * as S from './styled';

function ProductCard({
  currency,
  description,
  onAddToCart,
  onClick,
  photo,
  price,
  title,
}) {
  return (
    <S.ProductCardWrapper>
      <S.ProductCardContainer onClick={onClick}>
        <S.ProductCardPhoto src={photo.url} alt={title} title={title} />
        <S.ProductCardBody>
          <S.ProductCardTitle>
            {title.length > 50 ? title.substring(0, 50) : title}
          </S.ProductCardTitle>
          <S.ProductCardDescription>
            {description.length > 140
              ? `${description.substring(0, 140)}...`
              : description}
          </S.ProductCardDescription>
          <S.ProductCardPrice>
            <S.ProductCardCurrency>{currency}</S.ProductCardCurrency>
            <S.ProductCardValue>
              {`${price}`.replace('.', ',')}
            </S.ProductCardValue>
          </S.ProductCardPrice>
        </S.ProductCardBody>
      </S.ProductCardContainer>
      <S.ProductCardAddToCardButton onClick={onAddToCart}>
        <ShoppingBag size={24} />
      </S.ProductCardAddToCardButton>
    </S.ProductCardWrapper>
  );
}

ProductCard.defaultProps = {
  currency: 'R$',
  photo: { url: '' },
};
ProductCard.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.shape({ url: PropTypes.string }),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
