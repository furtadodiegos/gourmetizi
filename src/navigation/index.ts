import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AppNavigationParams } from './navigation';

export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] };
}[keyof ParamList];

export type UseNavigationProps = NativeStackNavigationProp<AppNavigationParams>;

export type ScreenNavigationProps<T extends keyof AppNavigationParams> = NativeStackScreenProps<AppNavigationParams, T>;

export { default as AppNavigation } from './navigation';
