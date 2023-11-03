import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home';
import { SecondScreen } from '../screens/SecondScreen';

const Stack = createNativeStackNavigator();

export type MainStackParamsList = {
  Home: undefined;
  SecondScreen: undefined;
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
};
