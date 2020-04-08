import faker from 'faker';

export const externalPhoto =
  'https://www.maniadechurrasco.com.br/wp-content/uploads/2018/06/PRIME-STEAK-HOUSE-CARDAPIO-02.jpg';
export const single = (
  { _id, description, price, tags, title, url } = {
    _id: faker.random.uuid(),
    description: faker.lorem.paragraph(),
    price: faker.random
      .number({ min: 20, max: 50, precision: 0.99 })
      .toFixed(2),
    tags: Array.from({ length: faker.random.number({ min: 1, max: 3 }) }, () =>
      faker.lorem.word(),
    ),
    title: faker.lorem.words(2),
    url: faker.random.boolean() ? externalPhoto : null,
  },
) => ({ _id, title, description, price, photo: { url }, tags });

export const list = (seeds = 10) => Array.from({ length: seeds }, single);
