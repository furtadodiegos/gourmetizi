import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// LogBox.ignoreLogs(['Remote debugger']);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appx!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
