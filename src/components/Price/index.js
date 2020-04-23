import React from 'react';
import PropTypes from 'prop-types';

import { $PriceFormatter } from '../../utils';

import * as S from './styled';

function Price({ className, currency, prefix, value }) {
  const fancyValue = $PriceFormatter.fancy(value);
  return (
    <S.PriceWrapper className={className}>
      <S.PriceCurrency>
        {prefix ? `${prefix} ${currency}` : currency}
      </S.PriceCurrency>
      <S.PriceValue>{fancyValue}</S.PriceValue>
    </S.PriceWrapper>
  );
}

Price.defaultProps = { className: '', currency: 'R$', prefix: '' };
Price.propTypes = {
  className: PropTypes.string,
  currency: PropTypes.string,
  prefix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Price;
