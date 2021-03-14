import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import StartStack from './src/pages/outerStack';
import Help from './src/pages/help'
import * as firebase from 'firebase';
import RemotePushController from './src/pages/remote';

// import tryy from './src/pages/try';a

export default function App() {
  const config = {
    apiKey: "AAAAeGxZ7Vs:APA91bEdGOPIeLxyamoZVL2c5mHACDWo-lnbqGshRbQqHt9OzIFT7ri2NUSeG4RS8B4kmZQqWw3g5OEglUtfZFzEXmzu6mXq_NTmF7fBHkinXGIIZIurHLBhrj2dW8F_X2G9RnsjAerY",
    authDomain: "",
    databaseURL:"",
    projectId: "pushnotifications-d8a11",
    storageBucket: "",
    messagingSenderId: "517213908315"
};
firebase.initializeApp(config);
  return (
    <View style={styles.container}>
      <StartStack />
      {/* <RemotePushController /> */}
      {/* <Help /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
})