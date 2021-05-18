import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/header-notifications';
import axios from 'axios';
import Store from "react-native-fs-store";
 


import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Attendance() {
  const Storage = new Store('default');

  const valuee=async(val)=>{
    await Storage.setItem('unique_key', val);
    console.log(val+"zdfsfs")
    vale2();
  }
  const vale2=async()=>{
    const val= await Storage.getItem('unique_key');
    console.log(val)
    setNoty(val)

    // return val
  }
  useEffect(() => {

    axios.get(
      'http://192.168.18.3:5000/GetAttendance',
      {withCredentials: true}
    ).then(function (response) {
      console.log(response.data[0]);
      valuee(response.data[0][0])
      setNotification(response.data[0])
    })
      .catch((e) => {
        console.log("NotWorking");
      });

  }, []);

  const[notty,setNoty]=useState({})
    const[notification,setNotification]=useState([
        {FirstName:"",LastName:"", key: 1},
          ]);
  return (
    <View style={styles.container}>
                    <Text>{notty.FirstName+notty.LastName}</Text>

        {/* <Header header_name="Attendance"/> */}
        <View style={styles.list}>
          
        <FlatList
        contentContainerStyle={{ paddingBottom: '12.5%'}}
        data={notification}
        renderItem={({item})=>(
            <View>
            
          <TouchableOpacity style={{height:60,backgroundColor:'#55acee',borderWidth:2}}>
              
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              {/* <Text style={{color:'white',backgroundColor:'#55acee',fontSize:22}}>{item.day}  {item.date}</Text> */}
              <Text style={{color:'white',fontSize:25,padding:10}}>Present </Text>
              <Text style={{color:'white',fontSize:25,padding:10}}>{item.FirstName}</Text>
              {/* <Text style={{color:'white',fontSize:25,padding:10}}> </Text> */}
              <Text style={{color:'white',fontSize:25,padding:10}}>{item.LastName}</Text>
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