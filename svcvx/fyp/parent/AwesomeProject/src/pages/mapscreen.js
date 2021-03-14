import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, Button, TouchableOpacity,Alert } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footernormal';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import PushNotification from "react-native-push-notification"


export default function Mapscreen({ navigation }) {
 
  // FirebaseApp.initializeApp(Mapscreen);
  // PushNotification.configure({
  //   // (required) Called when a remote or local notification is opened or received
  //   onNotification: function(notification) {
  //     console.log('LOCAL NOTIFICATION ==>', notification)
  //   },
  // popInitialNotification: true,
  //   requestPermissions: true
  // })


  const handleButtonPress = () => {
    console.log('sdssdsd');
    LocalNotification();
  }
  const LocalNotification = () => {
    
    PushNotification.localNotification({
      autoCancel: true,
      bigText:
        'This is local notification demo in React Native app. Only shown, when expanded.',
      subText: 'Local Notification Demo',
      title: 'Local Notification Title',
      message: 'Expand me to see more',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Yes", "No"]'
    })
  }

  // const mapRef = useRef(null);
  const [latitude,setLat]=useState(0)
  const [longitude,setLon]=useState(0)
  const [coordinates,setCoord]=useState([])
  useEffect(() => {
  });

  const [initialPosition,setPosition]=useState( {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  Geolocation.getCurrentPosition(
    position => {
      // this.setState({
      //   latitude: position.coords.latitude,
      //   longitude: position.coords.longitude,
      //   coordinates: this.state.coordinates.concat({
      //     latitude: position.coords.latitude,
      //     longitude: position.coords.longitude
      //   })
      // });
      setLon(position.coords.longitude);
      setLat(position.coords.latitude)
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
      setCoord(coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }))
    },
    error => {
      Alert.alert(error.message.toString());
    },
    {
      showLocationDialog: true,
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 2000
    }
  );
  return (
    <View style={styles.container}>
      <Text>{initialPosition.latitude}</Text>
      {/* <Button title="NEW" onP */}
      {/* // ress={handleButtonPress}></Button> */}
      <TouchableOpacity onPress={handleButtonPress} style={{width:200,height:200,backgroundColor:'green'}}><Text>adfsdfsfsdf</Text></TouchableOpacity>

      <Header navigation={navigation} />
      <MapView style={styles.map}
      // ref={mapRef}
      // focusable={false}
        region={initialPosition}
        onRegionChange={()=>{}}
        initialRegion={initialPosition}
      
      >
        <Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
          }}>
    </Marker>
    </MapView>
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
    width:Width,
    height:Height,
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