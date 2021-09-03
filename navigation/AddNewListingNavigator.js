import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import ListNewItem from '../components/ImageInput/ListNewItem';

import AddNewListingItem from '../screens/AddNewListingItem';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={AddNewListingItem}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
