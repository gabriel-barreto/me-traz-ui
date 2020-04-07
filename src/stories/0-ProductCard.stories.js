import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import styled from 'styled-components';

import ProductCard from '../components/ProductCard';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.primary};
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 3.2rem calc((100% - 40rem) / 2);
  width: 100%;
`;
const withWrapper = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;
const product = {
  title: faker.lorem.words(2),
  description: faker.lorem.paragraph(),
  price: faker.random.number({ min: 20, max: 50, precision: 0.99 }).toFixed(2),
};
const url =
  'https://www.maniadechurrasco.com.br/wp-content/uploads/2018/06/PRIME-STEAK-HOUSE-CARDAPIO-02.jpg';

storiesOf('Product Card', module)
  .addDecorator(withWrapper)
  .add('Default', () => <ProductCard {...product} />)
  .add('with Photo', () => <ProductCard {...product} photo={{ url }} />);
