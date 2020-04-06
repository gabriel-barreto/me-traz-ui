import { Model, Server } from 'miragejs';

import factories from './factories';
import { randomNumber } from './factories/utils';

export function makeServer({ environment } = { environment: 'development' }) {
  return new Server({
    environment,
    factories,

    models: { product: Model },

    seeds(server) {
      server.createList('product', randomNumber({ min: 10, max: 20 }));
    },

    routes() {
      this.namespace = 'api';

      this.get('/products', ({ db }) => {
        return db.products.where({ active: true });
      });
    },
  });
}
