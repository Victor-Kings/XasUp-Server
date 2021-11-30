import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigation/RootNavigator';
import { UserProvider } from "./context/userContext";

const AppContainer = () => {
	return (
		<NavigationContainer>
			<UserProvider>
				<RootNavigator />
			</UserProvider>
		</NavigationContainer>
	)
}

export default AppContainer