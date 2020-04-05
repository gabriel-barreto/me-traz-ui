import app from './app.config';

const headers = {
  Accept: 'application/json',
  'Content-Types': 'application/json',
};

const config = {
  development: { baseURL: 'api/', headers },
  test: { baseURL: 'api/', headers },
  production: { baseURL: 'api/', headers },
};

export default config[app.env];
