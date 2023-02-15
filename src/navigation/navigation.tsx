import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { FC } from 'react';

import { AppSplashScreen } from '../components';
import { useSetup } from '../contexts';
import DrawerNavigation from './drawerNavigation';
import type { NestedNavigatorParams } from '.';
import type { DrawerNavigationParams } from './drawerNavigation';

export type AppNavigationParams = {
  OnboardingScreen: undefined;
  DrawerNavigation: NestedNavigatorParams<DrawerNavigationParams>;
};

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

const AppNavigation: FC = () => {
  const { me, isReady } = useSetup();

  if (!isReady) return <AppSplashScreen isReady={isReady} />;

  return (
    <NavigationContainer>
      <Navigator initialRouteName={me ? 'DrawerNavigation' : 'OnboardingScreen'} screenOptions={{ headerShown: false }}>
        <Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
