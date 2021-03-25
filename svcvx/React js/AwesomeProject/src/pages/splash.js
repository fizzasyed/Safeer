import React, { useState,useEffect,useRef } from 'react';
import {Animated, StyleSheet, Text, TextComponent, View, StatusBar, FlatList, TouchableOpacity,Image,Button,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;



export default function Splash({navigation}) {

    const fadeAnim = useRef(new Animated.Value(0)).current;
        const [start1,fadein]=useState([]);

        useEffect(() => {
                // Will change fadeAnim value to 1 in 5 seconds
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 3000,
                  useNativeDriver: true,
                }).start();
                        }, [])
        

          const [start2,fadeout]=useState([]);
          const fadeOut = () => {
            // Will change fadeAnim value to 0 in 5 seconds
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 3000,
              useNativeDriver: true,
            }).start();
            navigation.navigate('Login')
          };


    return (

        <View style={styles.container}>
          <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0b1e3a"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim // Bind opacity to animated value
            }
          ]}
        >
           <View style={styles.container3}>
                  <Image
                      source={require('../assets/logo.png')}
                      style={{ width: Width, height: 310 }}
                  />
                  <View style={styles.container3}>
                  <Icon 
                  name="arrow-alt-circle-right"
                  size={80}
                  color='white'
                  onPress={fadeOut}
                  style={{marginTop:200}}
                  />
                  </View>
              </View>
  
        </Animated.View>
       
      </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#0b1e3a'
      },
    container3:{
        // paddingVertical:200,
        backgroundColor:'#0b1e3a',
        alignItems:'center',
        flexDirection:'column',
        // backgroundColor:'#00ff00',
        borderRadius:30,
        // flex:1
        width:Width
    
    }

})
