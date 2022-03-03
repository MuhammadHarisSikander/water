import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ImageBackground, TextComponent } from 'react-native'
import Logo from '../component/img/logo.png'
import Speedometer from 'react-native-speedometer-chart';
// import firebase from 'firebase'
import { getAuth, signOut } from "firebase/auth";


const auth = getAuth();
const PhScreen = (props) => {
  const image = Logo
  const OnLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log(auth);
      props.navigation.navigate('Login')
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  const OnWaterPh = () => {
    props.navigation.navigate('Profile')
  }

  return (
    <View style={{ display: 'flex', justifyContent: 'space-evenly', flex: 1 }} >
      <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        <ImageBackground source={image} resizeMode="cover" style={{ width: 300, height: 300, justifyContent: 'center' }}></ImageBackground>
      </View>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30 }} >
          SMART AQUA DEVICE
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
        <TouchableOpacity onPress={() => OnWaterPh()} style={{ borderWidth: 1, padding: 10, borderRadius: 5, backgroundColor: '#ADD8E6', borderColor: '#ADD8E6', width: '40%', alignSelf: 'center' }}><Text style={{ color: 'white', textAlign: 'center' }}> DEVELOPER INFO </Text></TouchableOpacity>
        <TouchableOpacity onPress={() => OnLogout()} style={{ borderWidth: 1, padding: 10, borderRadius: 5, backgroundColor: '#e25822', borderColor: '#e25822', width: '30%', alignSelf: 'center' }}><Text style={{ color: 'white', textAlign: 'center' }} >Logout</Text></TouchableOpacity>

      </View>

    </View>
  )

}
export default PhScreen;