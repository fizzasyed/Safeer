import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footerdriver';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import MapView from 'react-native-maps';

export default function Mapscreen({ navigation }) {
  const [initialPosition,setPosition]=useState('')
  return (
    <View style={styles.container}>
      <Text>{initialPosition.latitude}</Text>
      <Header navigation={navigation} />
      <MapView style={styles.map}
        initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
      />
      <Footer />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  map: {
    flex: 1
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
    paddingTop: Height * 0.1,
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'black',
    width: Width * 0.7,
    borderRadius: 16,
    height: 60
  },
  textinput1: {
    paddingTop: 50
  },
  forget: {
    paddingLeft: 220
  },
  button: {
    backgroundColor: 'skyblue',
    width: Width * 0.4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
  },
  buttoncontainer: {
    paddingTop: Height * 0.02
  },
  addaccount: {
    paddingTop: 20,
    alignItems: 'center'
  },
})