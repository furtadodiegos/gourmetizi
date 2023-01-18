import { DrawerContentScrollView /* , DrawerItemList */ } from '@react-navigation/drawer';
import React from 'react';
import { Text } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import type { FC } from 'react';

import styles from './drawer.styles';

const AppDrawer: FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.title}>GourmetIZI</Text>

      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
};

export default AppDrawer;
