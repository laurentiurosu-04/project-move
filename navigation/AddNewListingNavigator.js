import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import AddNewImage from '../components/AddNewImage/AddNewImage';

const Tweet = () => <Text>Hello3</Text>;

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={AddNewImage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
