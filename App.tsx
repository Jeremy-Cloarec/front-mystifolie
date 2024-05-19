import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import ActivityFormule from './src/screens/ActivityFormule';
import ActivityType from './src/screens/ActivityType';
import ActivityEvent from './src/screens/ActivityEvent';
import ActivityDate from './src/screens/ActivityDate';
import ActivityPrice from './src/screens/ActivityPrice';
import ActivityMap from './src/screens/ActivityMap';
import ActivityNumberPeople from './src/screens/ActivityNumberPeople';
import WhatDoYouWant from './src/screens/WhatDoYouWant';
import Inscription from './src/screens/Inscription';
import Connexion from './src/screens/Connexion';
import Begin from './src/screens/Begin';
import Payment from './src/screens/Payment';
import GenerateActivity from './src/screens/GenerateActivity';
import Partnairs from './src/screens/Partnairs';
import YourActivities from './src/screens/YourActivities';
import MysteryBox from './src/screens/MysteryBox';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Que souhaitez-vous faire ?"
              component={WhatDoYouWant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inscription"
              component={Inscription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Connection"
              component={Connexion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Choisissez votre formule"
              component={ActivityFormule}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Commencer"
              component={Begin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vous fêtez un événement ?"
              component={ActivityEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Choisissez votre type d'activité"
              component={ActivityType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Choisissez votre date"
              component={ActivityDate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quel est votre fourchette de prix ?"
              component={ActivityPrice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Où voulez-vous allez ?"
              component={ActivityMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Combien serez-vous ?"
              component={ActivityNumberPeople}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Paiement"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Votre activité"
              component={GenerateActivity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vos activités"
              component={YourActivities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Boite mystère"
              component={MysteryBox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Partnairs"
              component={Partnairs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
