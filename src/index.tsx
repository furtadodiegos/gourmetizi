import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import Lottie from 'lottie-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { FC, PropsWithChildren } from 'react';

import loading from './assets/animation.json';
import { AppScreen } from './components';
import { ThemeProvider, useTheme } from './contexts';

const MainScreen: FC = () => {
  const { changeTheme } = useTheme();

  const StyledText = styled(Text)`
    ${({ theme: { colors, fonts } }) => css`
      color: ${colors.text};
      ${fonts.title};
    `}
  `;

  return (
    <View style={{ marginTop: 100 }}>
      <Text>Open up App.js to start working on your appx!!</Text>

      <TouchableOpacity onPress={changeTheme} style={{ marginVertical: 10, padding: 10, backgroundColor: 'blue' }}>
        <StyledText>Change theme</StyledText>
      </TouchableOpacity>
    </View>
  );
};

export const AppProviders: FC<PropsWithChildren> = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

const App: FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [dataIsReady, setDataIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await hideAsync();
  }, [appIsReady]);

  useEffect(() => {
    (async () => {
      preventAutoHideAsync();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(setAppIsReady(true));
        }, 1000);
      });
    })();
  }, []);

  useEffect(() => {
    async function asyncData() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(setDataIsReady(true));
        }, 2000);
      });
    }

    if (appIsReady) asyncData();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <AppProviders>
      <AppScreen onLayout={onLayoutRootView} withEdges={['top']}>
        {dataIsReady ? <MainScreen /> : <Lottie source={loading} autoPlay loop speed={2} />}
      </AppScreen>
    </AppProviders>
  );
};

export default App;
