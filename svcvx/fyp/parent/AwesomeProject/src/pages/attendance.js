import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/header-notifications';

import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'
export default function attendance() {
    const[notification,setNotification]=useState([
        {Status:"Present",absent:15,day:'Mon', date:'01/02/2021', key: 1},
        {Status:"Present",absent:15,day:'Tue', date:'02/02/2021', key: 2},
        {Status:"Absent",absent:15,day:'Wed', date:'03/02/2021', key: 3},
        {Status:"Present",absent:15,day:'Thu', date:'04/02/2021', key: 4},
        {Status:"Absent",absent:15,day:'Fri', date:'05/02/2021',key: 5},
        {Status:"Absent",absent:15,day:'Mon', date:'06/02/2021', key: 6},
        {Status:"Present",absent:15,day:'Wed', date:'08/02/2021', key: 7},
        {Status:"Present",absent:15,day:'Thu', date:'09/02/2021', key: 8},
        {Status:"Present",absent:15,day:'Fri', date:'10/02/2021', key: 9},
        {Status:"Present",absent:15,day:'Mon', date:'11/02/2021', key: 10},
        {Status:"Present",absent:15,day:'Tue', date:'12/02/2021', key: 11},
        {Status:"Present",absent:15,day:'Wed', date:'13/02/2021', key: 12},   ]);
  return (
    <View style={styles.container}>
        <Header header_name="Attendance"/>
        <View style={styles.list}>
        <FlatList
        contentContainerStyle={{ paddingBottom: '12.5%'}}
        data={notification}
        renderItem={({item})=>(
            <View>
            
          <TouchableOpacity style={{height:50,backgroundColor:'#55acee'}}>
              
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:2}}>
              <Text style={{color:'white',backgroundColor:'#55acee',fontSize:25,padding:10}}>{item.day}</Text>
              <Text style={{color:'white',backgroundColor:'#55acee',fontSize:25,padding:10}}> {item.date}</Text>
              <Text style={{color:'#ffff',fontSize:25,padding:10}}>{item.Status} </Text>
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