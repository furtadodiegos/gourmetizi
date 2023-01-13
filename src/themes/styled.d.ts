import 'styled-components';

import type { FontScalesProps } from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      gray: string;
      dark: string;
    };
    fonts: FontScalesProps;
  }
}
