function phoneMask(value) {
  if (!value) return value;

  return value
    .replace(/\D/g, '')
    .replace(/(\d{11})(\d)/, '$1')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d)/, '$1-$2');
}

function cepMask(value) {
  if (!value) return value;

  return value
    .replace(/\D/g, '')
    .replace(/(\d{8})(\d)/, '$1')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2');
}

export const masks = {
  cep: cepMask,
  phone: phoneMask,
};
