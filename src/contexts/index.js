import React from 'react';
import PropTypes from 'prop-types';

import { LoaderProvider } from './loader.context';

export default function AppContextProvider({ children }) {
  return <LoaderProvider>{children}</LoaderProvider>;
}
AppContextProvider.propTypes = { children: PropTypes.node.isRequired };

// ==> Context Hooks
export { useLoader } from './loader.context';
