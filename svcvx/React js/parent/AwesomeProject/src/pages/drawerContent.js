import React, { useState } from 'react';
import { StyleSheet, Text, TextComponent, View, StatusBar, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/Feather'
import Iconsss from 'react-native-vector-icons/FontAwesome5'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
export function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <View style={styles.img}>
                    <Image
                        source={require('../../Application/pngs/Driver.png')}
                        style={{ width: 120, height: 120 }}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Arbaz Sohail Khan</Text>
                </View>
            </View>
            <DrawerContentScrollView>

                <View style={styles.row2}>
                    <Drawer.Section style={styles.logout}>
                        <DrawerItem
                            icon={() => <Icons
                                name='home'
                                size={20}
                                color='white'
                            />
                            }
                            label="Home"
                            labelStyle={{ fontSize: 15, color: 'white' }}
                            onPress={() => { props.navigation.navigate('Map') }}
                        />
                    </Drawer.Section>
                </View>

                <View style={styles.row2}>
                    <Drawer.Section style={styles.logout}>
                        <DrawerItem
                            icon={() => <Icons
                                name='notification'
                                size={20}
                                color='white'
                            />
                            }
                            label="Notifications"
                            labelStyle={{ fontSize: 15, color: 'white' }}
                            onPress={() => { props.navigation.navigate('Notify') }}
                        />
                    </Drawer.Section>
                </View>
                <View style={styles.row2}>
                    <Drawer.Section style={styles.logout}>
                        <DrawerItem
                            icon={() => <Iconss
                                name='clipboard'
                                size={20}
                                color='white'
                            />
                            }
                            label="Attendance"
                            labelStyle={{ fontSize: 15, color: 'white' }}
                            onPress={() => { props.navigation.navigate('Attendance') }}
                        />
                    </Drawer.Section>
                </View>
                <View style={styles.row2}>
                    <Drawer.Section style={styles.logout}>
                        <DrawerItem
                            icon={() => <Iconsss
                                name='hands-helping'
                                size={20}
                                color='white'
                            />
                            }
                            label="Help"
                            labelStyle={{ fontSize: 15, color: 'white' }}
                            onPress={() => { props.navigation.navigate('Help') }}
                        />
                    </Drawer.Section>
                </View>
                <View style={styles.row2}>
                    <Drawer.Section style={styles.logout}>
                        <DrawerItem
                            icon={() => <Icon
                                name='info'
                                size={20}
                                color='white'
                            />
                            }
                            label="About Us"
                            labelStyle={{ fontSize: 15, color: 'white' }}
                            onPress={() => { props.navigation.navigate('About us') }}
                        />
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.logout}>
                <DrawerItem
                    icon={() => <Icons
                        name='logout'
                        size={20}
                        color='white'
                    />
                    }
                    label="Log Out"
                    labelStyle={{ fontSize: 15, color: 'white' }}
                    onPress={() => { props.navigation.navigate('Login') }}
                />
            </Drawer.Section>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55acee',
    },
    row1: {
        width: '100%',
        borderWidth: 1,
        height: 200, justifyContent: 'center',
        alignItems: 'center'
    },
    row2: {
        width: '100%',
        flexDirection: 'row',
    },
    img: {
        alignItems: 'center',
        width: 150,
        backgroundColor: 'white',
        borderRadius: 100,
        height: 150,
        justifyContent: 'center'
    },
    name: {
        alignItems: 'center',
        paddingTop: 10
    },
    logout: {
        width: 500
    }
})