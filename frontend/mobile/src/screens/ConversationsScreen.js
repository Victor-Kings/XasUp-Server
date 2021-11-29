import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import MQTT from 'sp-react-native-mqtt';
import Conversations from '../components/Conversations';
import SearchInput from '../components/common/SearchInput';

import { theme } from '../theme';
import { fabStyles } from '../styles';

const ConversationsScreen = () => {

	// MQTT.createClient({
	// 	uri: 'mqtt://test.mosquitto.org:1883',
	// 	clientId: 'your_client_id'
	//   }).then(function(client) {
	  
	// 	client.on('closed', function() {
	// 	  console.log('mqtt.event.closed');
	// 	});
	  
	// 	client.on('error', function(msg) {
	// 	  console.log('mqtt.event.error', msg);
	// 	});
	  
	// 	client.on('message', function(msg) {
	// 	  console.log('mqtt.event.message', msg);
	// 	});
	  
	// 	client.on('connect', function() {
	// 	  console.log('connected');
	// 	  client.subscribe('/data', 0);
	// 	  client.publish('/data', "test", 0, false);
	// 	});
	  
	// 	client.connect();
	//   }).catch(function(err){
	// 	console.log(err);
	//   });
	return (
		<View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
			<Conversations>
				<SearchInput />
			</Conversations>
			<TouchableOpacity onPress={() => {}} style={fabStyles.style}>
			</TouchableOpacity>
		</View>
	)
}

export default ConversationsScreen