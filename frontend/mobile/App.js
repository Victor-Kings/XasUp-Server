import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { theme } from './src/theme';

import AppContainer from './src/AppContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
