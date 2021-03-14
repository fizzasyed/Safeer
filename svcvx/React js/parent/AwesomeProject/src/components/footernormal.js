import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/Entypo';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function Footernormal() {
  return (
    <View style={styles.footer}>

      <View style={styles.BelowContainer} >
        <View style={styles.row1}>
          <View style={styles.left}>
            <View style={styles.imgB}>
              <Image
                source={require('../../Application/pngs/Driver.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
            <View style={styles.imgInfo}>
              <Text style={styles.text}>
                Arbaz Sohail
                      </Text>
            </View>

          </View>
          <View style={styles.rightOut}>

            <View style={styles.right}>

              <Text style={styles.text}>Van No: 584-kml</Text>
              <Text style={styles.text}>PickUp: HOME</Text>
              <Text style={styles.text}>Drop-Off: School</Text>
              <Text style={styles.text}>Boarded: yes/no</Text>
            </View>
          </View>

        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.button}
          ><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#23282e' }}>Cancel Pickup</Text></TouchableOpacity>

        </View>
        <View style={styles.row3}>
          <View style={styles.containerrow3}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#ffff' }}>Keeping Your Child Safe</Text>
          </View>
        </View>


      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  footer: {
    // flex:1,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    // backgroundColor: 'grey',
    height: Height * 0.3,
    width: Width,
    // paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 70,
    fontSize: 30,

  },
  BelowContainer: {
    backgroundColor: '#0b1e3a',
    width: Width,
    height: Height * 0.3,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  
  row2: {
    flexDirection: 'column',
    padding: '1%',
  },
  row3: {
    flexDirection: 'row',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10
  },
  imgB: {
    backgroundColor: 'white',
    borderRadius: 100,
    height: 80,
    width: 80,
    alignItems: 'center'
  },
  rating: {
    flexDirection: 'row',
    // justifyContent:'space-evenly'
  },
  right: {
    // justifyContent: 'space-evenly',
    borderColor: 'white',
    borderWidth: 3,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '50%',
    // paddingLeft:10,
    // marginTop:20,
    marginRight: 10
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '8%',
    marginBottom:10
  },
  left: {
    // paddingLeft: 5,
    // borderWidth:1,
    width: '45%',
    // marginTop: 10,
    alignItems: "center",
    // paddingTop: '8%'
  },
  rightOut: {
    // paddingTop: '3%',
    width: '50%',
    // borderWidth: 2,
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // ali
    // height:'100%',
  },
  button: {
    backgroundColor: '#55acee',
    width: Width * 0.35,
    height: Height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  containerrow3: {
    alignItems: 'center',
    // borderWidth: 2,
    width: Width,
    height: Height * 0.05,
    justifyContent: 'center'

  }


})