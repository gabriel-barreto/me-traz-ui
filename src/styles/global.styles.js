import { createGlobalStyle } from 'styled-components';

import resets from './resets.styles';
import toastify from './toastify.styles';

export default createGlobalStyle`
  ${resets};
  ${toastify};
`;
