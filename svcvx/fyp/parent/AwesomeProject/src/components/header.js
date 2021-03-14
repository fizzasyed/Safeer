import React from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Header({navigation}){
  return(
    <View style={styles.header}>                
        <View style={styles.left}>
        <Icon name="list" size={35} color="#0b1e3a" 
        onPress={()=>{
          navigation.openDrawer();
        }}
        />
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    marginTop:'4%',
    paddingLeft:'4%',
  },
})