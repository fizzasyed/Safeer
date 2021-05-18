import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Linking, Dimensions, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footerdriver';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import MapViewDirections from 'react-native-maps-directions';


export default function Mapscreen({ navigation }) {
  // var {height, width} = Dimensions.get('window');
  const handleButtonPress = () => {
    console.log("0552");
    setCount(1);

    Linking.openURL("https://www.google.com/maps/dir/?api=1&destination=24.8746,67.0398").then((val) => { console.log(val) });

  }
  const [desitinationCoordinate,setdestcoor]=useState([])
  const handleButtonPress2 = () => {
    console.log("0553");
    fetch("http://192.168.18.3:5000/Getlatitude").then((valu)=>{
     console.log(valu) 
     valu.json().then((json)=>{console.log(json.data)
      Linking.openURL("https://www.google.com/maps/dir/?api=1&destination="+String(json.data[0])+","+String(json.data[1]))
      .then((val) => {
         console.log(val)
         });

    })
     
    }).catch(()=>{

    })
  }
  const [latitude, setLat] = useState(0)
  const [count_val, setCount] = useState(0)
  const [longitude, setLon] = useState(0)
  const [coordinates, setCoord] = useState([])
  // const { width, height } = Dimensions.get('window');
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCXHfUkhCtah937THC3I5jgeP3Z-_1ieSM';

  const stops = {
    latitude: 24.8746,
    longitude: 67.0398
  }
  const params = { initial: initialPosition, destination: stops }
  const [initialPosition, setPosition] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  useEffect(() => {
    findCoordinates();
  }, []);
  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
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
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* <TouchableOpacity onPress={findCoordinates}>
					<Text style={styles.welcome}>Find My Coords?</Text>
				</TouchableOpacity> */}
      <View>
        <MapView style={styles.map}
          region={initialPosition}
          initialRegion={initialPosition}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}>
          </Marker>
          <MapViewDirections
            style={{ width: Width, height: Height }}
            origin={initialPosition}
            destination={stops}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            mode={"DRIVING"}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
          <Marker
            coordinate={{
              latitude: stops.latitude,
              longitude: stops.longitude,
            }}>
          </Marker>
        </MapView>
      </View>
      <View style={styles.footer}>
        <View style={styles.BelowContainer} >
          <View style={styles.row1}>
            <View style={styles.left}>
              <View style={styles.imgB}>
                <Image
                  source={require('../../Application/pngs/Driver.png')}
                  style={{ width: 75, height: 75 }}
                />
              </View>
              <View style={styles.imgInfo}>
                <Text style={styles.text}>
                  Shaheryar Khalid
              </Text>
              </View>
            </View>
            <View style={styles.rightOut}>
              <View style={styles.right}>
                <Text style={styles.text}>Next Pickup: Shameel</Text>
                <Text style={styles.text}>Location: HOME</Text>
                <Text style={styles.text}>Drop-Off: School</Text>
                <Text style={styles.text}>Pickups Left: 10</Text>
              </View>
            </View>
          </View>
          <View style={styles.row2}>
            <View>
            {count_val==0?               <TouchableOpacity
                  style={styles.button2}
                  onPress={() => { handleButtonPress() }}
                ><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#23282e' }}>Start Ride</Text></TouchableOpacity>
            :<TouchableOpacity
            style={styles.button2}
            onPress={() => { handleButtonPress2() }}
          ><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#23282e' }}>Next Stop</Text></TouchableOpacity>
        }
              </View>


              
            
           

            <TouchableOpacity
              style={styles.button2}
            ><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#23282e' }}>Emergency</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  map: {
    width: Width,
    height: Height,
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
  footer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: Height * 0.3,
    width: Width,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 70,
    fontSize: 30,

  },
  left: {
    paddingLeft: 5,
    width: '45%',
    marginTop: 10,
    alignItems: "center",
    paddingTop: '8%'
  },
  BelowContainer: {
    backgroundColor: '#0b1e3a',
    width: Width,
    height: Height * 0.3,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row2: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  row3: {
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10
  },
  imgB: {
    backgroundColor: 'white',
    borderRadius: 100,
    height: 80,
    width: 80,
    alignItems: 'center'
  },
  rating: {
    flexDirection: 'row',
  },
  right: {
    justifyContent: 'space-evenly',
    borderColor: 'white',
    height: '50%',
    marginTop: '27.5%',
    marginRight: '15%'
  },
  rightOut: {
    width: '50%',
  },
  button2: {
    backgroundColor: '#55acee',
    width: Width * 0.35,
    height: Height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: '10%'
  },
  containerrow3: {
    alignItems: 'center',
    borderWidth: 2,
    width: Width,
    height: Height * 0.05,
    justifyContent: 'center'

  }
})