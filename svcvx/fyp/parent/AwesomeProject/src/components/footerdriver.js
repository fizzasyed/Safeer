import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Switch } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Footernormal() {
  const [isSwitchEnabled, setSwitch] = React.useState(false)
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
                Shaheryar Khalid
              </Text>
            </View>
          </View>
          <View style={styles.rightOut}>
            <View style={styles.right}>
              <Text style={styles.text}>Next Pickup: Shameel</Text>
              <Text style={styles.text}>Location: HOME</Text>
              <Text style={styles.text}>Drop-Off: School</Text>
              <Text style={styles.text}>Pickups Left: 10</Text>
            </View>
          </View>
        </View>
        <View style={styles.row2}>
          <Switch
            value={isSwitchEnabled}
            onValueChange={(value) => setSwitch(value)}
            marginLeft='7%'
          />
          <TouchableOpacity
            style={styles.button2}
          ><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#23282e' }}>Emergency</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: Height * 0.3,
    width: Width,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 70,
    fontSize: 30,

  },
  left: {
    paddingLeft: 5,
    width: '45%',
    marginTop: 10,
    alignItems: "center",
    paddingTop: '8%'
  },
  BelowContainer: {
    backgroundColor: '#0b1e3a',
    width: Width,
    height: Height * 0.3,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row2: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  row3: {
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10
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
  },
  right: {
    justifyContent: 'space-evenly',
    borderColor: 'white',
    height: '50%',
    marginTop: '27.5%',
    marginRight: '15%'
  },
  rightOut: {
    width: '50%',
  },
  button2: {
    backgroundColor: '#55acee',
    width: Width * 0.35,
    height: Height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: '15%'
  },
  containerrow3: {
    alignItems: 'center',
    borderWidth: 2,
    width: Width,
    height: Height * 0.05,
    justifyContent: 'center'

  }
})