import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ActivityFormuleScreen from './screens/ActivityFormuleScreen';
import ActivityTypeScreen from './screens/ActivityTypeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ActivityEventScreen from 'screens/ActivityEventScreen';
import ActivityDateScreen from 'screens/ActivityDateScreen';
import ActivityPriceScreen from 'screens/ActivityPriceScreen';
import ActivityMapScreen from 'screens/ActivityMapScreen';
import ActivityNumberPeopleScreen from 'screens/ActivityNumberPeopleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Choisissez votre formule"
            component={ActivityFormuleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Vous fêtez un événement ?"
            component={ActivityEventScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Choisissez votre type d'activité"
            component={ActivityTypeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Choisissez votre date"
            component={ActivityDateScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quel est votre fourchette de prix ?"
            component={ActivityPriceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Où voulez-vous allez ?"
            component={ActivityMapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Combien serez-vous ?"
            component={ActivityNumberPeopleScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Connectez-vous ?"
            component={}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Paiement ?"
            component={ActivityTypeScreen}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
