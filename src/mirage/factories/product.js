import faker from 'faker';
import { Factory } from 'miragejs';

import { randomNumber } from './utils';

export default Factory.extend({
  _id: faker.random.uuid(),
  active: Boolean(randomNumber({ min: 0, max: 1 })),
  title: faker.lorem.words(randomNumber({ min: 1, max: 3 })),
  description: faker.lorem.paragraph(1),
  tags: Array.from({ length: randomNumber({ min: 1, max: 5 }) }, () =>
    faker.lorem.word(),
  ),
  photo: {
    url:
      'https://img.elo7.com.br/product/zoom/26849BA/adesivo-parede-feijoada-prato-feito-comida-painel-adesivo-feijoada.jpg',
  },
  additional: Array.from({ length: randomNumber({ min: 0, max: 6 }) }, () => ({
    label: faker.lorem.words(randomNumber({ min: 1, max: 3 })),
    price: randomNumber({ min: 1, max: 6 }),
  })),
  ingredients: Array.from({ length: randomNumber({ min: 2, max: 6 }) }, () => ({
    label: faker.lorem.words(randomNumber({ min: 1, max: 3 })),
    required: Boolean(randomNumber({ min: 0, max: 1 })),
  })),
  price() {
    const price = randomNumber({ min: 19, max: 50 });
    return {
      raw: price,
      formatted: `R$ ${`${price}`.replace('.', ',')}`,
    };
  },
});
