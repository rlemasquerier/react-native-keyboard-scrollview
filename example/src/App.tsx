import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './navigation/MainStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
