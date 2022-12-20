import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import SearchScreen from '../screens/SearchScreen';
import BookingScreen from '../screens/BookingScreen';

import Icon from 'react-native-ionicons'


const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="home"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
      }} />
      <Tab.Screen name="Booking" component={BookingScreen} options={{
        tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="calendar"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="search"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
      }}/>
      <Tab.Screen name="Settings" component={SettingScreen}  options={{
        tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="settings"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
      }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})