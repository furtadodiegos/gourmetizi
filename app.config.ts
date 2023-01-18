import type { ExpoConfig } from '@expo/config';

import { android, ios } from './configs';

require('dotenv').config();

const { APP_ENV } = process.env;

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
  runtimeVersion: '1.0.0',
  // runtimeVersion: {
  //   policy: 'nativeVersion',
  // },
  // version: '1.0.0',
  ios: {
    ...ios,
    bundleIdentifier: ios.bundleIdentifier[APP_ENV ?? 'development'],
  },
  android: {
    ...android,
    package: android.package[APP_ENV ?? 'development'],
    adaptiveIcon: { ...android.adaptiveIcon[APP_ENV ?? 'development'] },
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
