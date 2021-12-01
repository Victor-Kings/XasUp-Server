import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import MqttController from "../services/mqttController";

import ChatHeader from "../components/messages/ChatHeader";
import ChatInput from "../components/messages/ChatInput";
import MessagesList from "../components/messages/MessagesList";
import userContext from "../context/userContext";

const MessagesScreen = ({ navigation, route }) => {
	const { updateMsg, userMsg, user, sendVisualizedMsg, groupMsg } = useContext(userContext);
	const { username, id, isGroup, } = route.params;
	
	const [messages, setMessages] = useState([]);
	const [ alredyMount, setAlredyMount] = useState(false);
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

	const updateMessage = (msg) => {
		var currentTime = new Date();
		currentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

		if (msg !== "") {
			setMessages([...messages, {
				time: currentTime,
				user: 0,
				content: msg,
				name: user.name,
    		    visualized: false,
			}])
			updateMsg(
				`${id}`,
				{
					user: 0,
					time: currentTime,
					content: msg,
					name: user.name,
					visualized: false
				},
				isGroup
			)
			MqttController.sendMessage('baeldung', {
				originTopic: user.id,
				originName: user.name,
				topic: id,
				data: msg
			});
		}
	}

	const walkChatToSet=()=>{
		let flag = 0
		const arrayMsg = isGroup ? [...groupMsg] : [...userMsg]
		arrayMsg.map((value, index) => {
			if(`${value.id}` == `${id}`){
				flag = 1
				setMessages(value.chatItms)
			}
		})
		if(flag == 0){
			setMessages([])
		}
		setAlredyMount(true)
	}

	useEffect(()=>{
		walkChatToSet()
	}, [])

	useEffect(()=>{
		walkChatToSet()
		sendVisualizedMsg(`${id}`)
	}, [userMsg, groupMsg])

	return (
		<View style={{ flex: 1 }}>
			<ChatHeader
				onPress={() => {}}
				username={username}
			/>
			<MessagesList 
				isGroup={isGroup}
				onSwipeToReply={swipeToReply} 
				messages={messages}
			/>
			<ChatInput 
				reply={reply} 
				isLeft={isLeft} 
				closeReply={closeReply} 
				username={username} 
				sendMessage={updateMessage} 
			/>
		</View>
	);
};

export default MessagesScreen;
