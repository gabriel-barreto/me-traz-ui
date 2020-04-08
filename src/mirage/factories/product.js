import faker from 'faker';
import { Factory } from 'miragejs';

import { randomNumber } from './utils';

const url =
  'https://img.elo7.com.br/product/zoom/26849BA/adesivo-parede-feijoada-prato-feito-comida-painel-adesivo-feijoada.jpg';

export default Factory.extend({
  _id() {
    return faker.random.uuid();
  },
  active: true,
  title() {
    return faker.lorem.words(randomNumber({ min: 1, max: 3 }));
  },
  description() {
    return faker.lorem.paragraph(1);
  },
  tags() {
    const length = randomNumber({ min: 1, max: 5 });
    const mapFn = () => faker.lorem.word();
    return Array.from({ length }, mapFn);
  },
  photo() {
    return faker.random.boolean() ? { url } : {};
  },
  additional() {
    const length = randomNumber({ min: 0, max: 6 });
    const mapFn = () => ({
      label: faker.lorem.words(randomNumber({ min: 1, max: 3 })),
      price: faker.random
        .number({ min: 1, max: 6, precision: 0.99 })
        .toFixed(2),
    });

    return Array.from({ length }, mapFn);
  },
  ingredients() {
    const length = randomNumber({ min: 2, max: 6 });
    const mapFn = () => ({
      label: faker.lorem.words(randomNumber({ min: 1, max: 3 })),
      required: Boolean(randomNumber({ min: 0, max: 1 })),
    });

    return Array.from({ length }, mapFn);
  },
  price() {
    return faker.random
      .number({ min: 19, max: 50, precision: 0.99 })
      .toFixed(2);
  },
});
