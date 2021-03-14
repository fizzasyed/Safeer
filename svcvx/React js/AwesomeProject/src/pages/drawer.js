import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput,Button,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './drawerContent';
import Stackerboy from './stack';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HOME" drawerContent={props =><DrawerContent {...props}/>}>
      <Drawer.Screen
        name="HOME"
        component={Stackerboy}
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer.Navigator>
  );
}

export default function DrawerBoy() {
  return (
    //<NavigationContainer >
      <MyDrawer />
    //</NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: 'green',
    width:'100%',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 100
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'black',
    width: 350,
    borderRadius: 16,
    height: 60
  },
  textinput1: {
    paddingTop: 50
  },
  forget: {
    paddingLeft: 220
  },
  button:{
    backgroundColor:'skyblue',
    width:190,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    height:40,
  },
  buttoncontainer:{
    paddingTop:40
  },
  addaccount:{
    paddingTop:20,
    alignItems:'center'
  },
})