import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const BookingScreen = ({navigation}) => {
  return (
    <MapView
    style={{
      flex: 1
    }}
     initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      
    }}
  />
  )
}

export default BookingScreen

const styles = StyleSheet.create({})