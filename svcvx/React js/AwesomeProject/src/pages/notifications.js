import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/header-notifications';

import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Notifications() {
    const[notification,setNotification]=useState([
        {text:'Tomorrow the departure is at 5:20pm', key: 1},
        {text:'Dont Forget to Pick up your new passanger', key: 2},
        {text:'You Did it!!', key: 3},
        {text:'Departure at 1:30pm', key: 4},
        {text:'Departure at 1:30pm', key: 5},
        {text:'Pickup at 7:30am', key: 6},
        {text:'Departure at 1:30pm', key: 5},
        {text:'Pickup at 7:30am', key: 7},
        {text:'Departure at 1:30pm', key: 8},
        {text:'Pickup at 7:30am', key: 9},
        {text:'Departure at 1:30pm', key: 10},
        {text:'Pickup at 7:30am', key: 11},
        {text:'Departure at 1:30pm', key: 12},
        {text:'Pickup at 7:30am', key: 13},
        {text:'Departure at 1:30pm', key: 14},
        {text:'Pickup at 7:30am', key: 15},
        {text:'Departure at 1:30pm', key: 16},
        {text:'Pickup at 7:30am', key: 17},    ]);
  return (
    <View style={styles.container}>
        <Header header_name="Notification"/>
        <View style={styles.list}>
        <FlatList
        contentContainerStyle={{ paddingBottom: '12.5%'}}
        data={notification}
        renderItem={({item})=>(
          <TouchableOpacity>
            <Text style={styles.textt}>{item.text}</Text>
          </TouchableOpacity>
        )}   
        />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  list:{
      width:'100%',
      backgroundColor:'#0b1e3a',
      height:'100%',
      padding:'1%',
  },
  textt:{
    color:'white',
    backgroundColor:'#55acee',
    marginBottom:'1%',
    height:90,
    padding:'5%',
    borderRadius:5,
    textAlign:'center',
    fontSize:22
  },
})