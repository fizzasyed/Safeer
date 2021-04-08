import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
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
        console.log('sdssdsd');
    }
    const [latitude, setLat] = useState(0)
    const [longitude, setLon] = useState(0)
    const [coordinates, setCoord] = useState([])
    // const { width, height } = Dimensions.get('window');
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCXHfUkhCtah937THC3I5jgeP3Z-_1ieSM';
    
    const stops = {
        latitude: 24.8746,
        longitude: 67.0398
    }
    const [initialPosition, setPosition] = useState({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    useEffect(() => {
        findCoordinates();
    },[]);
    const findCoordinates=()=>{
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
                 style={{width:Width,height:Height}}
                    origin={initialPosition}
                    destination={stops}
                    apikey={GOOGLE_MAPS_APIKEY}
                    // mode={"DRIVING"}
                />
                <Marker
                    coordinate={{
                        latitude: stops.latitude,
                        longitude: stops.longitude,
                    }}>
                </Marker>
            </MapView>
            </View>
            {/* <Footer /> */}
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
})