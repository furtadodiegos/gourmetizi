import type { ExpoConfig } from '@expo/config';

import { android, ios } from './configs';

require('dotenv').config();

const { APP_ENV } = process.env;

export default (): ExpoConfig => ({
  name: 'GourmetIzi',
  slug: 'gourmetizi',
  version: '1.0.0',
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
  runtimeVersion: {
    policy: 'appVersion',
  },
  ios: {
    ...ios,
    bundleIdentifier: ios.bundleIdentifier[APP_ENV],
  },
  android: {
    ...android,
    package: android.package[APP_ENV],
    adaptiveIcon: { ...android.adaptiveIcon[APP_ENV] },
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
