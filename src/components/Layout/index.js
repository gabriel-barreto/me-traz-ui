import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import * as S from './styled';

function Layout({ children }) {
  return (
    <S.BaseLayout>
      {children}
      <Loader />
    </S.BaseLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
