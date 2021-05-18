import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/header-notifications';
import axios from 'axios'
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Notifications() {

  useEffect(() => {

    axios.get(
      'http://192.168.18.3:5000/GetNotify',
      {withCredentials: true}
    ).then(function (response) {
      console.log(response.data);
      // valuee(response.data)/
      setNotification(response.data)
    })
      .catch((e) => {
        console.log("NotWorking");
      });

  }, []);
    const[notification,setNotification]=useState([
        {Message:'Tomorrow the departure is at 5:20pm',Timestamp:"", key: 1},
           ]);
  return (
    <View style={styles.container}>
        {/* <Header header_name="Notification"/> */}
        <View style={styles.list}>
        <FlatList
        contentContainerStyle={{ paddingBottom: '12.5%'}}
        data={notification}
        renderItem={({item})=>(
          <TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Text style={styles.textt}>{item.Message}</Text>
            <Text style={styles.textt}>{item.Timestamp}</Text>
            </View>
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