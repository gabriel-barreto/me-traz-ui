export const price = {
  fancy(value) {
    if (!value) return value;
    return parseFloat(value).toFixed(2).toString().replace('.', ',');
  },
};

export default { price };
