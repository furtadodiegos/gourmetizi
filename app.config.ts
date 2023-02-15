import type { ExpoConfig } from '@expo/config';

import { buildNumber } from './buildNumber';
import { version } from './package.json';

require('dotenv').config();

const { APP_ENV } = process.env;

const backgroundColor = {
  production: {
    backgroundColor: '#FFFFFF',
  },
  staging: {
    backgroundColor: '#FF0590',
  },
  development: {
    backgroundColor: '#7d24e1',
  },
};

export default (): ExpoConfig => ({
  name: 'GourmetIzi',
  slug: 'gourmetizi',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#25292e',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/3fa5b952-57d0-4d92-b97c-5437d885fec2',
  },
  assetBundlePatterns: ['**/*'],
  version,
  ios: {
    usesAppleSignIn: true,
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
    // infoPlist: {
    // NSLocationWhenInUseUsageDescription: 'We need to access your Location to send you relevant notifications.',
    // },
    runtimeVersion: version,
    buildNumber: String(parseInt(buildNumber, 10) + 1),
    bundleIdentifier: 'com.dfti.gourmetizi',
  },
  android: {
    runtimeVersion: version,
    versionCode: parseInt(buildNumber, 10) + 1,
    package: 'com.dfti.gourmetizi',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: backgroundColor[APP_ENV ?? 'development'],
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '3fa5b952-57d0-4d92-b97c-5437d885fec2',
    },
  },
  plugins: ['react-native-health'],
});
