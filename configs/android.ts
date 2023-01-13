import type { Android } from '@expo/config-types';

type AndroidBuildProps = {
  package: Record<'production' | 'staging' | 'development', string>;
  adaptiveIcon: Record<'production' | 'staging' | 'development', Android['adaptiveIcon']>;
};

export default {
  package: {
    production: 'com.dfti.gourmetizi',
    staging: 'com.dfti.gourmetizi.staging',
    development: 'com.dfti.gourmetizi.development',
  },
  adaptiveIcon: {
    production: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    staging: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FF0590',
    },
    development: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#7d24e1',
    },
  },
} as AndroidBuildProps;
