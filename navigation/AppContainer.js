import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

const AppNavigationContainer = () => {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
};

export default AppNavigationContainer;
