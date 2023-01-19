import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import Lottie from 'lottie-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

import loading from './assets/animation.json';
import { AppScreen } from './components';
import { StateProvider, ThemeProvider } from './contexts';
import { AppNavigation } from './navigation';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <StateProvider>{children}</StateProvider>
  </ThemeProvider>
);

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
        {dataIsReady ? <AppNavigation /> : <Lottie source={loading} autoPlay loop speed={2} />}
      </AppScreen>
    </AppProviders>
  );
};

export default App;
