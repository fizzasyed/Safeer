import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';




export default function Newmapscreen() {
    const coordinates = [{
        latitude:  24.814573,
        longitude: 67.032684
    }, {
        latitude: 24.8746,
        longitude: 67.0398
    }
    ]
    const { width, height } = Dimensions.get('window');

    const GOOGLE_MAPS_APIKEY = 'AIzaSyCXHfUkhCtah937THC3I5jgeP3Z-_1ieSM';

    return (
        <View style={{width:width,height:height}}>
            <MapView initialRegion={{
                latitude: 37.77,
                longitude: -122.4053769,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <MapViewDirections
                 style={{width:width,height:height}}
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                />
            </MapView>
        </View>
    );

}