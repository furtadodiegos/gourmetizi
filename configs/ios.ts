// import type { IOS } from '@expo/config-types';

type IOSBuildProps = {
  bundleIdentifier: Record<'production' | 'staging' | 'development', string>;
};

export default {
  buildNumber: '1',
  usesAppleSignIn: true,
  supportsTablet: true,
  bundleIdentifier: {
    production: 'com.dfti.gourmetizi',
    staging: 'com.dfti.gourmetizi.staging',
    development: 'com.dfti.gourmetizi.development',
  },
  config: {
    usesNonExemptEncryption: false, // ITSAppUsesNonExemptEncryption = false don't ask about encryption compliance for every build upload to Connect
  },
  infoPlist: {
    NSLocationWhenInUseUsageDescription: 'We need to access your Location to send you relevant notifications.',
  },
} as IOSBuildProps;
