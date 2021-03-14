import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity,} from 'react-native';
import Header from '../components/header-notifications';
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/Feather'
import Iconsss from 'react-native-vector-icons/FontAwesome5'
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'


export default function help() {
    const[notification,setNotification]=useState([
        {icon:<Iconssss
            name="frequently-asked-questions"
            size={50}
            color={'white'}
            />,text:'Frequently Asked Questions', key: 1},
            {icon:<Iconssss
                name="contacts-outline"
                size={50}
                color={'white'}
                />,text:'Contact Us For Querries', key: 2},
                {icon:<Iconssss
                    name="read"
                    size={50}
                    color={'white'}
                    />,text:'Know About Our Services', key: 3},
                    {icon:<Iconssss
                        name="check-outline"
                        size={50}
                        color={'white'}
                        />,text:'We Appretiate Your Cooperation', key: 4},
         ]);
    return (
        <View style={styles.container}>
            <Header header_name="Help"   />
            <View style={styles.list}>
            <FlatList
            contentContainerStyle={{ paddingBottom: '12.5%'}}
            data={notification}
            renderItem={({item})=>(
              <TouchableOpacity>
                  <View style={styles.textt}>
                  {item.icon}
                <Text style={{color:'white',marginLeft:10,fontSize:25}} >{item.text}</Text>
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
        height:80,
        padding:'5%',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      row:{
        backgroundColor:'grey',

      }
    })