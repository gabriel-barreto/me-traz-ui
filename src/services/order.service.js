import $http from './http.service';

function create(payload) {
  const { userAgent } = window.navigator;
  return $http
    .post('/orders', { ...payload, userAgent })
    .then(({ data }) => data)
    .then(({ callback }) => window.open(callback, '_blank'))
    .catch((err) => {
      // TODO show error message to user
      console.dir(err);
    });
}

export default { create };
