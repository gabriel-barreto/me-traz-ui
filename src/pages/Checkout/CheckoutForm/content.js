import Forms from './Forms';

import { $input } from '../../../utils';

export const steps = {
  1: {
    targetClass: 'one',
    component: Forms.DeliveryCheckoutForm,
    next: 2,
    prev: null,
    requestedKeys: ['deliveryType'],
  },
  2: {
    targetClass: 'two',
    component: Forms.UserCheckoutForm,
    prev: 1,
    next: 3,
    requestedKeys: ['name', 'email', 'whatsapp'],
  },
  3: {
    targetClass: 'three',
    component: Forms.PaymentCheckoutForm,
    prev: 2,
    requestedKeys: ['paymentType'],
  },
};
export const maskedValues = {
  cep: $input.masks.cep,
  whatsapp: $input.masks.phone,
};
