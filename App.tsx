/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Guide from './src/screens/guideScreen/Guide';
import Player from './src/screens/player/Player';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Discover from './src/screens/discover/Discover';

function App() {
  
  const Stack = createNativeStackNavigator();
  return (
   
    <NavigationContainer >
    <Stack.Navigator screenOptions={{ animation: 'slide_from_bottom', headerShown: false }} initialRouteName="Discover">
      <Stack.Screen name="Guide" component={Guide} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Discover" component={Discover} />
    </Stack.Navigator>
  </NavigationContainer>

     
  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
