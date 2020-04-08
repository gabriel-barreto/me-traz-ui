import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = { visible: false, label: 'Carregando...' };
const LoaderContext = createContext({});
const state = { ...INITIAL_STATE };

export const setLoader = (payload = INITIAL_STATE) =>
  Object.assign(state, payload);

export function LoaderProvider({ children }) {
  const [config, setConfig] = useState(state);

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
