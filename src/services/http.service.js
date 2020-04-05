import axios from 'axios';

import { api as config } from '../config';

const $http = axios.create(config);

export default $http;
