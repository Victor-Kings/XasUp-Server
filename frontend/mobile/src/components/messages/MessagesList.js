import React, { useState, useRef, useContext, useEffect } from "react";
import { ScrollView } from "react-native";

import Message from "./Message";

import { theme } from "../../theme";
import userContext from "../../context/userContext";

const MessagesList = ({ onSwipeToReply, messages, isGroup = false }) => {
	const userRef = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages&&messages.map((message, index) => (
				<Message
					isGroup = {isGroup}
					key={index}
					time={message.time}
					isLeft={message.user !== userRef.current}
					message={message.content}
					onSwipe={onSwipeToReply}
					name={message.name}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;
