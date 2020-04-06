import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LoaderContext = createContext({});

export function LoaderProvider({ children }) {
  const [config, setConfig] = useState({
    visible: false,
    label: 'Carregando...',
  });
  return (
    <LoaderContext.Provider value={{ config, setConfig }}>
      {children}
    </LoaderContext.Provider>
  );
}
LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLoader() {
  const { config, setConfig } = useContext(LoaderContext);
  return { config, setConfig };
}
