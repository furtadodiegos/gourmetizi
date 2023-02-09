import { hideAsync } from 'expo-splash-screen';
import Lottie from 'lottie-react-native';
import React, { useCallback } from 'react';
import type { FC } from 'react';

import loading from '../../assets/animation.json';
import { StyledSplashView } from './splash.style';

const AppSplashScreen: FC<{ isReady: boolean }> = ({ isReady }) => {
  const onLayoutRootView = useCallback(async () => {
    if (isReady) await hideAsync();
  }, [isReady]);

  return (
    <StyledSplashView onLayout={onLayoutRootView}>
      <Lottie source={loading} autoPlay loop speed={2} />
    </StyledSplashView>
  );
};

export default AppSplashScreen;
