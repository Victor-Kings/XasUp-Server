import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/common/Header';

import MessagesScreen from '../screens/MessagesScreen';
import ConversationsScreen from "../screens/ConversationsScreen";
import MqttController from '../services/mqttController';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import userContext from '../context/userContext';

const Stack = createStackNavigator();

const RootNavigator = () => {
	const {user, updateMsg, setVisualizedMsg} = useContext(userContext);

	useEffect(()=>{
		MqttController.init({topic:user?.id||"s"}, updateMsg, setVisualizedMsg)
	},[user])

	return (
		<Stack.Navigator 
			initialRouteName="LoginScreen" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
			<Stack.Screen name="HomeScreen" component={ConversationsScreen} options={{
				headerShown: true,
				header: () => <Header title="Chat" />
			}} />
			<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
		</Stack.Navigator>
	)
}

export default RootNavigator;