import axios from 'axios';
import PubSub from 'pubsub-js';

import { api as ApiConfig } from '../config';
import { loaderContextTopic } from '../contexts/loader.context';

const $http = axios.create(ApiConfig);

$http.interceptors.request.use((config) => {
  PubSub.publish(loaderContextTopic, { visible: true });
  return config;
});

$http.interceptors.response.use((response) => {
  PubSub.publish(loaderContextTopic, { visible: false });
  return response;
});

export default $http;
