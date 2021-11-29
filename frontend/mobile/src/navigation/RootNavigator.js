import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MessagesScreen from '../screens/MessagesScreen';

import HomeNavigator from './HomeNavigator';
import Header from '../components/common/Header';
import ConversationsScreen from "../screens/ConversationsScreen";


const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="HomeScreen" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="HomeScreen" component={ConversationsScreen} options={{
				headerShown: true,
				header: () => <Header title="Chat" />
			}} />
			<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
		</Stack.Navigator>
	)
}

export default RootNavigator;