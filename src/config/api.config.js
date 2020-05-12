import app from './app.config';

const headers = {
  Accept: 'application/json',
  'Content-Types': 'application/json',
};

const config = {
  development: { baseURL: 'http://localhost:5000/api/', headers },
  test: { baseURL: 'api/', headers },
  production: {
    baseURL: 'https://me-traz-demo-api.herokuapp.com/api/',
    headers,
  },
};

export default config[app.env];
