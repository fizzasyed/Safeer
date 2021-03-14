import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import Inside from './drawer';
import Splash from '../pages/splash'
const Stack = createStackNavigator();

function StackParent() {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dri" component={Inside} />
      
    </Stack.Navigator>
  );
}
export default function StackerParent() {
  return (
    <NavigationContainer>
      <StackParent />
    </NavigationContainer>
  );
}