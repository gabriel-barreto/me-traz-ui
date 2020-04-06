import $http from './http.service';

function fetchAll() {
  return $http.get('/products').then((response) => {
    if (response.status > 201) return Promise.reject(response);
    return response.data;
  });
}

export default { fetchAll };
