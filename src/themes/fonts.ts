import { Platform } from 'react-native';
import type { CSSObject } from 'styled-components';

interface FontProps extends CSSObject {
  'font-size': string;
  'font-family': string;
  'font-weight': string;
}

export type FontScalesProps = {
  h1: FontProps;
  h2: FontProps;
  title: FontProps;
  subtitle: FontProps;
  caption: FontProps;
  body1: FontProps;
  body2: FontProps;
};

const fontSizes = [10, 12, 14, 16, 20, 24, 32];

const main: FontProps = {
  'font-size': '14px',
  'font-weight': '400',
  'font-family': Platform.OS === 'ios' ? 'System' : 'System',
};

export default {
  h1: {
    ...main,
    'font-size': `${fontSizes[6]}px`,
    'font-weight': 'bold',
  },
  h2: {
    ...main,
    'font-size': `${fontSizes[5]}px`,
    'font-weight': '700',
  },
  title: {
    ...main,
    'font-size': `${fontSizes[4]}px`,
    'font-weight': '800',
  },
  subtitle: {
    ...main,
    'font-size': `${fontSizes[3]}px`,
    'font-weight': '600',
  },
  caption: {
    ...main,
    'font-size': `${fontSizes[1]}px`,
    'font-weight': '700',
  },
  body1: {
    ...main,
    'font-size': `${fontSizes[2]}px`,
  },
  body2: {
    ...main,
    'font-size': `${fontSizes[0]}px`,
    'font-weight': '800',
  },
} as FontScalesProps;
