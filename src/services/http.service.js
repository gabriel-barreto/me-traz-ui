import axios from 'axios';

import { api as ApiConfig } from '../config';
import { setLoader } from '../contexts';

const $http = axios.create(ApiConfig);

$http.interceptors.request.use((config) => {
  setLoader({ visible: true });
  return config;
});

$http.interceptors.response.use((response) => {
  setLoader();
  return response;
});

export default $http;
