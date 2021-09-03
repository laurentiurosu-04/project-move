import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import AccountScreen from '../screens/AccountScreen';

const Tweet = () => <Text>Hello2</Text>;

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen
      name="Listings"
      component={Tweet}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen name="Account" component={AccountScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
