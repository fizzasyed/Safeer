import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/header-notifications';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Feather';
import Iconsss from 'react-native-vector-icons/FontAwesome5';
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Aboutus() {
  return (
    <View style={styles.container}>
      <Header header_name="About Us" />
      <View style={styles.list}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#23282e',
            borderBottomWidth: 3,
            borderBottomColor: '#23282e',
          }}>
          Our Terms And Policy{' '}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center',width:'95%'}}>
          <Iconssss name="arrow-right-thick" size={25} color={'#23282e'} />
          <Text>
            These Standard Terms & Conditions (the "Terms") are being displayed
            on electronic platforms, including, inter alia,
            ‘www.rideairlift.com’ (the “Website”) and/or ‘mobile applications’
            (the “Apps” and collectively with the Website as the “ Platforms”),
            which Platforms have been developed, and are owned and operated by
            Airlift Technologies (Pvt.) Limited (the "SafeJourn").
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',width:'95%'}}>
          <Iconssss name="arrow-right-thick" size={25} color={'#23282e'} />
          <Text>
          The Operator has temporarily offered, for booking and travel by any Passengers, the whole of her Vehicle (the “Relevant Vehicle”) that she may operate or cause to be operated through and plied by the Driver (the “Relevant Driver”) on a particular Operator Course (the “ Relevant Travel Course”) through the Platform and the seats available on the Relevant Vehicle for occupation by the Passenger (the “ Available Seats”), (the “Operators Terms”).
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',width:'95%'}}>
          <Iconssss name="arrow-right-thick" size={25} color={'#23282e'} />
          <Text>
          The Passengers have reviewed the particulars of the Operators Terms through the Platforms, and voluntarily shared with the said relevant Operator (the “Relevant Operator”) all information necessary for her Passenger Journey, including her personal information as a registered User of the Platforms (the “Relevant Passengers User Particulars”) and other information, including inter alia, particulars of the seat(s) that she intends to occupy from amongst the Available Seats (the “ Relevant Seat”) on the Relevant Vehicle that is offered by the Operator to be plied on the Relevant Travel Course between the a specific Boarding Point convenient for the Passenger (the “ Relevant Boarding Point”) and the available Disembarking Point convenient for the Passenger (the “Relevant Disembarking Point” and collectively with the Relevant Boarding Point as the “ Relevant Passenger Points”) that are both located on the Relevant Operator Course (collectively with the Relevant Seat, Relevant Vehicle and Relevant Passenger Points as the “Relevant Reservation Particulars ”).
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',width:'95%'}}>
          <Iconssss name="arrow-right-thick" size={25} color={'#23282e'} />
          <Text>
          The Users have exchanged and processed (as applicable) the afore-sated particulars/information amongst themselves voluntarily and consensually, and the Passenger is willing to book the whole Relevant Vehicle across the Relevant Operator Course and perform her Passenger Journey between the Relevant Passenger Points (as may be revised) in terms thereof, and subject to these Terms (the “Relevant Passenger Journey”).
          </Text>
        </View>
        <View style={{alignItems: 'center',marginTop:300}}>
          <Iconssss name="google-play" size={50} color={'#23282e'} />
          <Text style={{fontWeight:'bold',}}>Google Play</Text>
          <Text>Download Our Latest Version from the App Store</Text>
          </View>
          <View style={{alignItems: 'center',borderBottomWidth:3,borderBottomColor:'black'}}>
              <Text style={{color:'black',fontWeight:'bold'}}>CopyRights Reserved to SafeJourn.org</Text>
          </View>
        
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    backgroundColor: '#55acee',
    height: '100%',
    padding: '1%',
  },
  textt: {
    color: 'white',
    backgroundColor: '#55acee',
    marginBottom: '1%',
    height: 200,
    padding: '5%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    backgroundColor: 'grey',
  },
});
