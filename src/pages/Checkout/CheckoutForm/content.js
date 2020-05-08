import { toast } from 'react-toastify';

import Forms from './Forms';

import { $input } from '../../../utils';

export const steps = {
  1: {
    id: 1,
    targetClass: 'one',
    component: Forms.DeliveryCheckoutForm,
    next: 2,
    prev: null,
    requestedKeys: ['deliveryType'],
  },
  2: {
    id: 2,
    targetClass: 'two',
    component: Forms.UserCheckoutForm,
    prev: 1,
    next: 3,
    requestedKeys: ['name', 'email', 'whatsapp'],
  },
  3: {
    id: 3,
    targetClass: 'three',
    component: Forms.PaymentCheckoutForm,
    prev: 2,
    requestedKeys: ['paymentType'],
  },
};
export const maskedValues = {
  cep: $input.masks.cep,
  paymentChange: $input.masks.money,
  whatsapp: $input.masks.phone,
};

function isDeliveryValuesIncomplete(payload) {
  if (payload.deliveryType === 'withdraw') return false;

  const requiredProps = ['cep', 'number'];
  return requiredProps
    .map((key) => Object.keys(payload).includes(key) && payload[key])
    .includes(false);
}

export function isFormValuesValid(payload, activeForm) {
  const payloadKeys = Object.keys(payload);
  const hasAbsentProp = activeForm.requestedKeys
    .map((key) => payloadKeys.includes(key) && payload[key])
    .includes(false);

  if (hasAbsentProp || isDeliveryValuesIncomplete(payload)) {
    toast.error('Você ainda não completou esta etapa!');
    return false;
  }

  return true;
}
