import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions, TextInput,Button,TouchableOpacity,ImageBackground ,Image,StatusBar} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import axios from 'axios';
import Store from "react-native-fs-store";

export default function Login({navigation}) {
  const Storage = new Store('default');

  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  const onpress=async()=>{
    // console.log(props)
    var array={
      username:username,
      password:password
    }
    axios.post(
      'http://192.168.18.3:5000/parentlogin',
      array,{withCredentials: true}
    ).then(async (response)=> {
      console.log(response.data);
      await Storage.setItem('LoginCred', array);
          // navigation.navigate('Dri');

      
    })
      .catch((e) => {
        console.log("NotWorking");
      });


 
  }
  const onpress2=async()=>{
    // navigation.openDrawer();

    var val=await Storage.getItem('LoginCred');
    console.log(val)
    axios.get(
      'http://192.168.18.3:5000/check',
      {withCredentials: true}
    ).then(function (response) {
      console.log(response.data[0]);
     
    })
      .catch((e) => {
        console.log("NotWorking");
      });

  } 
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0b1e3a"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.container2}>
        <View style={styles.imageinput}>
        <Image
         source={require('../../Application/pngs/Logo.png')}
         style={{width:300,height:300}}
        />
        </View>
        <View style={styles.textinput1}>
          <TextInput
            style={styles.textinput}
            placeholder='     Username'
            onChangeText={(val)=>{setusername(val)}}
          />
          <Text style={styles.forget}>Forgot Username</Text>
        </View>
        <View style={styles.textinput1}>
          <TextInput
            style={styles.textinput}
            placeholder='     Password'
            onChangeText={(val)=>{setpassword(val)}}
          />
          <Text style={styles.forget}>Forgot Password</Text>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity 
          style={styles.button}
          onPress={onpress}
          
          ><Text style={styles.text}>Sign In</Text></TouchableOpacity>
        </View>
        <View style={styles.addaccount}>
        <TouchableOpacity 
          style={styles.link}
          onPress={onpress2}
          ><Text style={{ color:'#ffff'}}>Do you have an account? Register</Text></TouchableOpacity>       
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1e3a',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0b1e3a',
    width:'80%',
    paddingTop: Height*0.002,
    justifyContent: 'space-evenly',
    paddingBottom:Height*0.1    
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'black',
    width: '95%',
    borderRadius: 16,
    height: 60,
    backgroundColor:'white'
  },
  textinput1: {
    paddingTop: 30
  },
  imageinput: {
    alignItems:'center'
  },
  forget: {
    paddingLeft: '54%',
    color:'white'
  },
  button:{
    backgroundColor:'#55acee',
    width:'60%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    height:40,
  },
  buttoncontainer:{
    paddingTop:Height*0.02
  },
  addaccount:{
    paddingTop:20,
    alignItems:'center'
  },
  text:{
    color:'#23282e',
    fontWeight:'bold'
  }
})