import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import { Factories, Decorators } from './utils';

import ProductsGroup from '../components/ProductsGroup';

const noPaddingWrapper = (storyFn) => (
  <Decorators.Wrapper style={{ padding: '3.2rem' }}>
    {storyFn()}
  </Decorators.Wrapper>
);

storiesOf('Products Group', module)
  .addDecorator(noPaddingWrapper)
  .add('Default', () => {
    const seeds = faker.random.number({ min: 3, max: 9 });
    const products = Factories.Product.list(seeds);
    const title = faker.lorem.words(faker.random.number({ min: 1, max: 3 }));

    return <ProductsGroup title={title} products={products} />;
  });
