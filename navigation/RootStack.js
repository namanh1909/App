import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
// import * as Font from 'expo-font';

import LoginScreen from '../screens/LoginScreen';

import { useState } from 'react';
import { useEffect } from 'react';

import firebase from 'firebase/app';
import "firebase/auth";
import SplashScreen from '../screens/SplashScreen';
import AuthorizedStack from './AuthorizedStack';
import Login from '../screens/LoginScreen';
import useAuthorized from '../hook/useAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';


let customFonts = {
	'HelveticaNeue-Bold': require('../assets/fonts/HelveticaNeue-Bold.ttf'),
	'HelveticaNeue-BoldItalic': require('../assets/fonts/HelveticaNeue-BoldItalic.ttf'),
	'HelveticaNeue-Italic': require('../assets/fonts/HelveticaNeue-Italic.ttf'),
	'HelveticaNeue-Medium': require('../assets/fonts/HelveticaNeue-Medium.ttf'),
	'HelveticaNeue-MediumItalic': require('../assets/fonts/HelveticaNeue-MediumItalic.ttf'),
	"HelveticaNeue": require('../assets/fonts/HelveticaNeue.ttf'),
};

const firebaseConfig = {
    apiKey: "AIzaSyDBSZa4gWkoIkJz7XvzZwRYb7MvLYJIwao",
    authDomain: "location-7270e.firebaseapp.com",
    projectId: "location-7270e",
    storageBucket: "location-7270e.appspot.com",
    messagingSenderId: "159546486173",
    appId: "1:159546486173:web:54906ee41ecbe613879374"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

const OPTIONS = {
	noHeader: {
		headerShown: false,
	},
};


const RootStackNavigator = createNativeStackNavigator();

const RootStack = () => {
	const { isAppInit, isAuthorized, isAuthorizing } = useAuthorized();
	const [fontsLoaded, setFontsLoaded] = useState(false);

	const _loadFontsAsync = async () => {
		Ionicons.loadFont().then()
		setFontsLoaded(true);
	};

	useEffect(() => {
		_loadFontsAsync();
	}, []);

	if (isAppInit || isAuthorizing  || !fontsLoaded ) {
		return (
			<RootStackNavigator.Navigator screenOptions={{ ...OPTIONS.noHeader }}>
				<RootStackNavigator.Screen
					component={SplashScreen}
					name="SplashScreen"
				/>
			</RootStackNavigator.Navigator>
		);
	}

	if (isAuthorized) {
		return (
			<RootStackNavigator.Navigator initialRouteName={'AuthorizedStack'}>
				<RootStackNavigator.Screen
					component={AuthorizedStack}
					name="AuthorizedStack"
					options={{
						...OPTIONS.noHeader,
					}}
				/>
				
			</RootStackNavigator.Navigator>
		);
	}

	return (
		<RootStackNavigator.Navigator initialRouteName={'SplashScreen'}>
			
			<RootStackNavigator.Screen
				component={Login}
				name="LoginScreen"
				options={{
					...OPTIONS.noHeader,
				}}
			/>
		
		</RootStackNavigator.Navigator>
	);
};

export default RootStack;


