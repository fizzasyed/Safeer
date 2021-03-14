import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import StartStack from './src/pages/outerStack';
import Help from './src/pages/help'

export default function App() {
  return (
    <View style={styles.container}>
      <StartStack />
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