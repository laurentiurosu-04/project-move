import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={AppNavigator} />
    </Stack.Navigator>
  );
}
