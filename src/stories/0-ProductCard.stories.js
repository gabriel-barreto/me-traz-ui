import { storiesOf } from '@storybook/react';
import React from 'react';

import ProductCard from '../components/ProductCard';

import { Factories, Decorators } from './utils';

const product = Factories.Product.single();

storiesOf('Product Card', module)
  .addDecorator(Decorators.withWrapper)
  .add('Default', () => <ProductCard {...product} />)
  .add('with Photo', () => (
    <ProductCard
      {...product}
      photo={{ url: Factories.Product.externalPhoto }}
    />
  ));
