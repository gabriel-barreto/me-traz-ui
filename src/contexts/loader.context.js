import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

const CONTEXT_TOPIC = 'loaderContext';
const INITIAL_STATE = { visible: false, label: 'Carregando...' };
const LoaderContext = createContext(INITIAL_STATE);

export function LoaderProvider({ children }) {
  const [config, setConfig] = useState(INITIAL_STATE);
  const subscriber = (_, newConfig) =>
    setConfig((prev) => ({ ...prev, ...newConfig }));

  useEffect(() => {
    PubSub.subscribe(CONTEXT_TOPIC, subscriber);
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

export const loaderContextTopic = CONTEXT_TOPIC;
export function useLoader() {
  const { config, setConfig } = useContext(LoaderContext);
  return { config, setConfig };
}
