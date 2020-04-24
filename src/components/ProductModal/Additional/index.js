import React from 'react';
import PropTypes from 'prop-types';

import AdditionalItem from './AdditionalItem';
import ItemsGroup from '../ItemsGroup';

function Additional({ additional, onChange }) {
  return additional.length ? (
    <ItemsGroup title="Bora turbinar esse pedido?">
      {additional.map((each) => (
        <AdditionalItem {...each} key={each._id} onChange={onChange} />
      ))}
    </ItemsGroup>
  ) : null;
}

Additional.defaultProps = { additional: [] };
Additional.propTypes = {
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      label: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

export default Additional;
