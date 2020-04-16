import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function ItemsGroup({ children, title }) {
  return (
    <S.ItemGroupWrapper>
      <S.ItemGroupTitle>{title}</S.ItemGroupTitle>
      <S.ItemGroupList>{children}</S.ItemGroupList>
    </S.ItemGroupWrapper>
  );
}

ItemsGroup.defaultProps = { children: null };
ItemsGroup.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default ItemsGroup;
