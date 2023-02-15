import React from 'react';
import { Text } from 'react-native';
import type { FC } from 'react';

import { AppScreen } from '../../components';

const HomeScreen: FC = () => {
  return (
    <AppScreen withEdges={['top']}>
      <Text>HomeScreen a</Text>
    </AppScreen>
  );
};

export default HomeScreen;
