import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

function ProductCard({ currency, description, photo, price, title }) {
  return (
    <S.ProductCardWrapper>
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
          <S.ProductCardValue>{price.replace('.', ',')}</S.ProductCardValue>
        </S.ProductCardPrice>
      </S.ProductCardBody>
      <S.ProductCardAddToCardButton>
        <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
          <g clipPath="url(#clip0)">
            <path
              d="M39.8037 10.7131C39.6457 10.5251 39.4125 10.4165 39.1668 10.4165H7.92543L6.67075 3.77388C6.66541 3.74433 6.65793 3.71478 6.64974 3.68629C6.35815 2.72748 5.50436 2.0834 4.52597 2.0834H0.833488C0.373129 2.0834 0 2.45618 0 2.91654C0 3.37689 0.373129 3.75002 0.833488 3.75002H4.52597C4.75455 3.75002 4.95856 3.90383 5.04294 4.13633L10.5096 33.0716C10.5836 33.4654 10.9276 33.7506 11.3281 33.7506H14.7795C14.4029 34.2006 14.1668 34.7785 14.1668 35.4172C14.1668 36.8339 15.288 37.9871 16.6665 37.9871C18.0451 37.9871 19.1667 36.8339 19.1667 35.4172C19.1667 34.7785 18.9306 34.2006 18.5539 33.7506H28.1128C27.7362 34.2006 27.5001 34.7785 27.5001 35.4172C27.5001 36.8339 28.6216 37.9871 30.0002 37.9871C31.3788 37.9871 32.5 36.8339 32.5 35.4172C32.5 34.7785 32.2639 34.2006 31.8872 33.7506H35.0001C35.4601 33.7506 35.8336 33.3778 35.8336 32.9171C35.8336 32.4564 35.4601 32.0836 35.0001 32.0836H12.0185L11.389 28.7504H36.2936C36.6991 28.7504 37.0459 28.4581 37.1146 28.0586L39.9878 11.3917C40.0298 11.1496 39.9622 10.9011 39.8037 10.7131ZM30.0002 34.5136C30.4595 34.5136 30.8333 34.9191 30.8333 35.4172C30.8333 35.915 30.4595 36.3205 30.0002 36.3205C29.5406 36.3205 29.1667 35.915 29.1667 35.4172C29.1667 34.9191 29.5406 34.5136 30.0002 34.5136ZM16.6665 34.5136C17.1262 34.5136 17.5 34.9191 17.5 35.4172C17.5 35.915 17.1262 36.3205 16.6665 36.3205C16.2073 36.3205 15.8334 35.915 15.8334 35.4172C15.8334 34.9191 16.2073 34.5136 16.6665 34.5136ZM14.9999 27.0838H11.075L10.2913 22.9167H14.9999V27.0838ZM14.9999 21.2501H9.978L9.35101 17.9165H14.9999V21.2501ZM14.9999 16.2498H9.03734L8.25406 12.0831H14.9999V16.2498ZM22.4999 27.0838H16.6665V22.9167H22.4999V27.0838ZM22.4999 21.2501H16.6665V17.9165H22.4999V21.2501ZM22.4999 16.2498H16.6665V12.0831H22.4999V16.2498ZM30.0002 27.0838H24.1669V22.9167H30.0002V27.0838ZM30.0002 21.2501H24.1669V17.9165H30.0002V21.2501ZM30.0002 16.2498H24.1669V12.0831H30.0002V16.2498ZM35.5918 27.0838H31.6668V22.9167H36.3099L35.5918 27.0838ZM36.5973 21.2501H31.6668V17.9165H37.1719L36.5973 21.2501ZM37.4592 16.2498H31.6668V12.0831H38.1777L37.4592 16.2498Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="40" height="40" />
            </clipPath>
          </defs>
        </svg>
      </S.ProductCardAddToCardButton>
    </S.ProductCardWrapper>
  );
}

ProductCard.defaultProps = { currency: 'R$', photo: { url: '' } };
ProductCard.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
