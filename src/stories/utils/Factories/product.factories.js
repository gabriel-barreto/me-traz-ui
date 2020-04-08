import faker from 'faker';

export const externalPhoto =
  'https://www.maniadechurrasco.com.br/wp-content/uploads/2018/06/PRIME-STEAK-HOUSE-CARDAPIO-02.jpg';
export const single = (
  { title, description, price, url } = {
    title: faker.lorem.words(2),
    description: faker.lorem.paragraph(),
    price: faker.random
      .number({ min: 20, max: 50, precision: 0.99 })
      .toFixed(2),
    url: faker.random.boolean() ? externalPhoto : null,
  },
) => ({ title, description, price, photo: { url } });

export const list = (seeds = 10) => Array.from({ length: seeds }, single);
