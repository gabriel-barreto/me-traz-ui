import Forms from './Forms';

export const steps = {
  1: {
    targetClass: 'one',
    component: Forms.DeliveryCheckoutForm,
  },
  2: {
    targetClass: 'two',
    component: Forms.UserCheckoutForm,
  },
  3: {
    targetClass: 'three',
    component: Forms.PaymentCheckoutForm,
  },
};
