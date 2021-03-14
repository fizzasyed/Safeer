import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/header-notifications';

import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'
export default function attendance() {
    const[notification,setNotification]=useState([
        {Present:50,absent:15,day:'Mon', date:'01/02/2021', key: 1},
        {Present:45,absent:15,day:'Tue', date:'02/02/2021', key: 2},
        {Present:23,absent:15,day:'Wed', date:'03/02/2021', key: 3},
        {Present:45,absent:15,day:'Thu', date:'04/02/2021', key: 4},
        {Present:50,absent:15,day:'Fri', date:'05/02/2021',key: 5},
        {Present:23,absent:15,day:'Mon', date:'06/02/2021', key: 6},
        {Present:23,absent:15,day:'Tue', date:'07/02/2021', key: 5},
        {Present:50,absent:15,day:'Wed', date:'08/02/2021', key: 7},
        {Present:45,absent:15,day:'Thu', date:'09/02/2021', key: 8},
        {Present:33,absent:15,day:'Fri', date:'10/02/2021', key: 9},
        {Present:23,absent:15,day:'Mon', date:'11/02/2021', key: 10},
        {Present:50,absent:15,day:'Tue', date:'12/02/2021', key: 11},
        {Present:50,absent:15,day:'Wed', date:'13/02/2021', key: 12},   ]);
  return (
    <View style={styles.container}>
        <Header header_name="Attendance"/>
        <View style={styles.list}>
        <FlatList
        contentContainerStyle={{ paddingBottom: '12.5%'}}
        data={notification}
        renderItem={({item})=>(
            <View>
            
          <TouchableOpacity style={{height:60,backgroundColor:'#55acee',borderWidth:2}}>
              
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              <Text style={{color:'white',backgroundColor:'#55acee',fontSize:22}}>{item.day}  {item.date}</Text>
              <Text style={{color:'white',fontSize:25,padding:10}}>Present </Text>
              <Text style={{color:'white',fontSize:25,padding:10}}>{item.Present}</Text>
              <Text style={{color:'white',fontSize:25,padding:10}}>Absent </Text>
              <Text style={{color:'white',fontSize:25,padding:10}}>{item.absent}</Text>
            </View>
          </TouchableOpacity>
          </View>
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