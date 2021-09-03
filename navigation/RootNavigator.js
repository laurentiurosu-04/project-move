import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from './NavigationTheme';

import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import AuthenticationStack from './AuthenticationStack';

import HomeStack from './HomeStack';

import Firebase from '../config/firebase';
const auth = Firebase.auth();

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    );

    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer theme={NavigationTheme}>
      {user ? <HomeStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}
