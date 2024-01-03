/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// @ts-ignore
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRouterComponent from './src/stackRouter';

function App() {
  return (
    <NavigationContainer>
      <StackRouterComponent></StackRouterComponent>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;