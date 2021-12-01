import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigation/RootNavigator';
import { UserProvider } from "./context/userContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContainer = () => {
	const clearStorage = async ()=>{
		AsyncStorage.clear()
	
	}
	useEffect(()=>{
		return(()=>{
			clearStorage()
		})
	},[])
	return (
		<NavigationContainer>
			<UserProvider>
				<RootNavigator />
			</UserProvider>
		</NavigationContainer>
	)
}

export default AppContainer