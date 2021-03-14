import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions, TextInput,Button,TouchableOpacity,ImageBackground ,Image,StatusBar,Alert} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Login({navigation}) {
  const [Password, setPassword] = useState("fffg");
  const [Username, setUsername] = useState("gfgg");
  const [showalert, setalert] = useState(false);
  const setval_u = (value) => {
    setUsername(value);
  };
  const setval_p = (value) => {
    setPassword(value);
  };

  const sendvalue = () => {
    var user = Username;
    var pass = Password;
    console.log(user);
    console.log(pass);
    var array = {
      username: user,
      password: pass,
    };
    const value = fetch("http://192.168.43.210:5000/parentlogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(array),
    })
      .then((response) => {
        response.json().then((val) => {
          console.log(val["data"][0][1]);
          if (val["data"][0][1] == user && val["data"][0][2] == pass) {
            console.log("WORKED");
            navigation.navigate('Dri');
          } else {
            console.log("nowork");
            Alert.alert(
              "Invalid Credentials ",
              "Want to try again?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
          }
        });
      })
      .catch((e) => {
        console.log("asdasdsa");
      });
  };
  const onpress=()=>{
    navigation.navigate('Dri');
  }
  const onpress2=()=>{
    navigation.openDrawer();
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
            onChangeText={(val)=>{setval_u(val)}}
          />
          <Text style={styles.forget}>Forgot Username</Text>
        </View>
        <View style={styles.textinput1}>
          <TextInput
            style={styles.textinput}
            placeholder='     Password'
            onChangeText={(val)=>{setval_p(val)}}
            
          />
          <Text style={styles.forget}>Forgot Password</Text>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity 
          style={styles.button}
          onPress={sendvalue}
          
          ><Text style={styles.text}>Sign In</Text></TouchableOpacity>
        </View>
        <View style={styles.addaccount}>
        <TouchableOpacity 
          style={styles.link}
          onpress={onpress2}
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