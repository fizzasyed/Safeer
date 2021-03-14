import React, { useState } from 'react';
import {StyleSheet,Text,View,Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderNotifications(props){
  const val=props.header_name
  console.log(val)
  // const [name_val,setName]=useState('')
  // setName(val)
  const navigation = useNavigation(); 
  return(
    <View style={styles.header}>     
        <View style={styles.left}>
        <Icon name="chevron-left" size={35} color="white" 
        onPress={() => navigation.goBack()
        }
        />
        </View>
        <Text style={styles.title}>{val}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
    backgroundColor:'#0b1e3a',
    height:'7%',
    width:'100%',
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  title:{
      paddingHorizontal:'30%',
      fontSize:30,
      color:'white',
  },
})