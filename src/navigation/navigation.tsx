import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { FC } from 'react';

import { OnboardingScreen } from '../screens';
import DrawerNavigation from './drawerNavigation';
import type { NestedNavigatorParams } from '.';
import type { DrawerNavigationParams } from './drawerNavigation';

export type AppNavigationParams = {
  OnboardingScreen: undefined;
  DrawerNavigation: NestedNavigatorParams<DrawerNavigationParams>;
};

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="OnboardingScreen" screenOptions={{ headerShown: false }}>
        <Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
