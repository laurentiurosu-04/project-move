import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

const Tweet = () => <Text>Hello</Text>;

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={Tweet}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
