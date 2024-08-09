
import React from 'react';


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

export default App;
