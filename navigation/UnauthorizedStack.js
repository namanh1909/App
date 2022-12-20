import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';

const UnauthorizedStackNavigator = createNativeStackNavigator();


const UnauthorizedStack = () => {
    return (
        
        <UnauthorizedStackNavigator.Navigator  >
            <UnauthorizedStackNavigator.Screen component={Login} name="LoginScreen" />
        </UnauthorizedStackNavigator.Navigator>
    )
}

export default UnauthorizedStack