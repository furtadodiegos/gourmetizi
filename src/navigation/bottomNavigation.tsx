import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { FavoritesScreen, HistoryScreen, HomeScreen } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

export type BottomNavigationParams = {
  HomeScreen: undefined;
  FavoritesScreen: undefined;
  HistoryScreen: undefined;
};

const BottomNavigation = () => {
  return (
    <Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Screen name="HistoryScreen" component={HistoryScreen} />
    </Navigator>
  );
};

export default BottomNavigation;
