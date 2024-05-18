import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ActivityFormuleScreen from './src/screens/ActivityFormule';
import ActivityTypeScreen from './src/screens/ActivityType';
import ActivityEventScreen from './src/screens/ActivityEvent';
import ActivityDateScreen from './src/screens/ActivityDate';
import ActivityPriceScreen from './src/screens/ActivityPrice';
import ActivityMapScreen from './src/screens/ActivityMap';
import ActivityNumberPeopleScreen from './src/screens/ActivityNumberPeople';
import WhatDoYouWant from './src/screens/WhatDoYouWant';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
            name="Que souhaitez-vous faire ?"
            component={WhatDoYouWant}
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
          <Stack.Screen
            name="Paiement ?"
            component={ActivityTypeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
