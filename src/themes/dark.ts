import type { DefaultTheme } from 'styled-components/native';

import lightTheme from './light';

export default {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#25292e',
    text: '#FFFFFF',
  },
} as DefaultTheme;
