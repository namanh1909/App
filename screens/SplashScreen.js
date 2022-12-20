import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = () => {
  return (
    <LinearGradient colors={['#F7EFEE', '#F6E3DB', '#F6E3DB']} style={styles.linearGradient}>
      <Image source={require("../assets/location.png")} style={{width: 223, height: 223}} />
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: "center"
  },
})