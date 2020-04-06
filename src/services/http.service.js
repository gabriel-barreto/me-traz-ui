import axios from 'axios';

import { api as ApiConfig } from '../config';
import { useLoader } from '../contexts';

const { setConfig: setLoader } = useLoader();
const $http = axios.create(ApiConfig);

$http.interceptors.request.use((config) => {
  setLoader((prev) => ({ ...prev, visible: true }));
  return config;
});

$http.interceptors.response.use((response) => {
  setLoader((prev) => ({ ...prev, visible: true }));
  return response;
});

export default $http;
