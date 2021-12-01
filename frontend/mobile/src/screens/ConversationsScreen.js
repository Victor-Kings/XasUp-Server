import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Conversations from '../components/Conversations';
import ModalAddFriend from "../components/Modals/ModalAddFriend";
import ModalNewGroup from "../components/Modals/ModalNewGroup";
import { theme } from '../theme';
import { fabStyles } from '../styles';

const ConversationsScreen = () => {


	const [showModalAddFriend, setShowModalAddFriend] = useState(false);
	const [showModalNewGroup, setShowModalNewGroup] = useState(true);

	const closeModalAddFriend = () => {
		setShowModalAddFriend(false)
	}

	const closeModalNewGroup = () => {
		setShowModalNewGroup(false)
	}

	return (
		<View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
			<Conversations/>
			<ModalAddFriend
				showModal={showModalAddFriend}
				closeModal={closeModalAddFriend}
			/>
			<ModalNewGroup
				showModal={showModalNewGroup}
				closeModal={closeModalNewGroup}
			/>
			<TouchableOpacity onPress={() => { }} style={fabStyles.styleNewGroup}/>
			<TouchableOpacity onPress={() => setShowModalAddFriend(true)} style={fabStyles.styleAddFriend}/>
		</View>
	)
}

export default ConversationsScreen