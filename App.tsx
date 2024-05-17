import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ActivityFormuleScreen from './src/screens/ActivityFormuleScreen';
import ActivityTypeScreen from './src/screens/ActivityTypeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ActivityEventScreen from './src/screens/ActivityEventScreen';
import ActivityDateScreen from './src/screens/ActivityDateScreen';
import ActivityPriceScreen from './src/screens/ActivityPriceScreen';
import ActivityMapScreen from './src/screens/ActivityMapScreen';
import ActivityNumberPeopleScreen from './src/screens/ActivityNumberPeopleScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Utendo-Medium': require('./assets/typo/Utendo-Medium.ttf'),
    'Utendo-Regular': require('./assets/typo/Utendo-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

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
