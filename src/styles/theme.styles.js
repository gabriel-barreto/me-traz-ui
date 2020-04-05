import chroma from 'chroma-js';

const chromaColors = {
  primary: chroma('#93bb54'),
  primaryDark: chroma('#799A45'),

  dark: chroma('#333333'),
  darkest: chroma('#212121'),

  light: chroma('#EDEDED'),
  lightest: chroma('#FFFFFF'),
};

export default {
  chromaColors,
  hexColors: Object.fromEntries(
    Object.keys(chromaColors).map((each) => {
      return [each, chromaColors[each].hex()];
    }),
  ),
};
