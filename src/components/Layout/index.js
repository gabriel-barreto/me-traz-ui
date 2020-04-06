import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import Navbar from '../Navbar';

import * as S from './styled';

function Layout({ children }) {
  return (
    <S.BaseLayout>
      <Navbar />
      {children}
      <Loader />
    </S.BaseLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
