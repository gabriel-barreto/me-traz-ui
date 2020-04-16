import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SpinInput from '../components/SpinInput';

storiesOf('Spin Input', module).add('Default', () => {
  const min = number('Min', 0);
  const max = number('Max', 3);
  const stage = number('Stage', 1);

  return <SpinInput min={min} max={max} stage={stage} />;
});
