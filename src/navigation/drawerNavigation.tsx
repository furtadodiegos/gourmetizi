import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import type { FC } from 'react';

import { AppDrawer } from '../components';
import BottomNavigation from './bottomNavigation';
import type { NestedNavigatorParams } from '.';
import type { BottomNavigationParams } from './bottomNavigation';

export type DrawerNavigationParams = {
  BottomNavigation: NestedNavigatorParams<BottomNavigationParams>;
};

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigationParams>();

const DrawerNavigation: FC = () => {
  return (
    <Navigator
      drawerContent={(props) => <AppDrawer {...props} />}
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#18172A',
        },
        drawerItemStyle: {
          width: '60%',
          borderRadius: 10,
          marginVertical: 10,
        },
        headerTintColor: 'red',
        drawerActiveBackgroundColor: 'rgba(63, 41, 51, 0.8)',
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: '#FFFFFF',
      }}>
      <Screen name="BottomNavigation" component={BottomNavigation} />
    </Navigator>
  );
};

export default DrawerNavigation;
