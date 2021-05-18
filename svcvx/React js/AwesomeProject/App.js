import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity, } from 'react-native';
import StartStack from './src/pages/outerStack';
import Help from './src/pages/help'
import Newmapscreen from './src/pages/newmapscreen';
import Attendance from './src/pages/login';
import firebase from 'react-native-firebase';
import Store from "react-native-fs-store";

let notificationListener, notificationOpenedListener;

export default function App() {
  const Storage = new Store('default');

  useEffect(() => {
    checkPermission();
    createNotificationListeners();
  }, []);

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    console.log('enabled', enabled);
    // If Premission granted proceed towards token fetch
    if (enabled) {
      getToken();
    } else {
      // If permission hasn’t been granted to our app, request user in requestPermission method.
      requestPermission();
    }
  };

  const getToken = async () => {
    let fcmToken = await Storage.getItem('testapp_fcmToken');
    console.log('fcmToken', fcmToken);
    if (!fcmToken) {
      await firebase.messaging().subscribeToTopic('testapp');
      fcmToken = await firebase.messaging().getToken();
      console.log('fcmToken', fcmToken);
      if (fcmToken) {
        // user has a device token
        await Storage.setItem('testapp_fcmToken', fcmToken);
      }
    }
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
    }
  };

  const createNotificationListeners = async () => {
    // This listener triggered when notification has been received in foreground
    notificationListener = firebase
      .notifications()
      .onNotification((notification) => {
        console.log('notification received', notification);
      });

    // This listener triggered when app is in backgound and we click, tapped and opened notifiaction
    notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen) => {
        console.log('notification received', notificationOpen);
      });

    // This listener triggered when app is closed and we click,tapped and opened notification
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      console.log('notification received', notificationOpen);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Newmapscreen /> */}
      {/* <Help /> */}
      {/* {<StartStack/>} */}
      {<Attendance/>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
})