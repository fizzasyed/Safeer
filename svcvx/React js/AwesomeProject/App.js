import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import StartStack from './src/pages/outerStack';
import Help from './src/pages/help'
import Newmapscreen from './src/pages/newmapscreen';
import Test from './src/pages/testing';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Newmapscreen /> */}
      {/* <Help /> */}
      {/* {<StartStack/>} */}
      {<Test/>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
})