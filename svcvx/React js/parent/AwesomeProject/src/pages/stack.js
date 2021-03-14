import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from './notifications';
import DriverMapscreen from './mapscreen';
import Help from './help';
import Aboutus from './aboutus'
import Splash from '../pages/splash'
import attendance from './attendance';
const Stack = createStackNavigator();

function StackDriver() {
  return (
    <Stack.Navigator initialRouteName='LoginDriver' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Map" component={DriverMapscreen} />
      <Stack.Screen name="Notify" component={Notification} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About us" component={Aboutus} />
      <Stack.Screen name="Attendance" component={attendance}/>
    </Stack.Navigator>
  );
}

export default function Stackerboy() {
  return (
    //<NavigationContainer>
      <StackDriver />
    //</NavigationContainer>
  );
}