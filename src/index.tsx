import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import Lottie from 'lottie-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { FC } from 'react';

import loading from './assets/animation.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
        }, 5000);
      });
    }

    if (appIsReady) asyncData();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />

      {dataIsReady ? (
        <Text>Open up App.js to start working on your appx!!</Text>
      ) : (
        <Lottie source={loading} autoPlay loop speed={3} />
      )}
    </View>
  );
};

export default App;
