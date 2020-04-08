export default (size = '') => {
  const availVales = ['xl', 'lg', 'md', 'sm', 'xs'];
  if (size && !availVales.includes(size)) throw new Error('Unknown breakpoint');

  if (size === 'xl') return '1400px';
  if (size === 'lg') return '1200px';
  if (size === 'md') return '1024px';
  if (size === 'sm') return '768px';
  if (size === 'xs') return '375px';

  return '0px';
};
