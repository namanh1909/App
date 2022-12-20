import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import TabNavigation from './TabNavigation';
import DrawerNavigator from './DrawerNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDraw';
import NotificationScreen from '../screens/NotificationScreen';


const AuthorizedStack = () => {
    const AuthorizedStackNavigator = createDrawerNavigator();

    return (
        <AuthorizedStackNavigator.Navigator drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{
            headerShown:false
        }}>
            <AuthorizedStackNavigator.Screen component={TabNavigation} name="Tab" />
            <AuthorizedStackNavigator.Screen component={NotificationScreen} name="noti" />
        </AuthorizedStackNavigator.Navigator>
    )

}

export default AuthorizedStack