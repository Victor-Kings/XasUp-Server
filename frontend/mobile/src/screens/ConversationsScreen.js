import React, { useState } from "react";
import { View, Image, TouchableOpacity } from 'react-native'
import Conversations from '../components/Conversations';
import ModalAddFriend from "../components/Modals/ModalAddFriend";
import ModalNewGroup from "../components/Modals/ModalNewGroup";
import { theme } from '../theme';
import { fabStyles } from '../styles';

const ConversationsScreen = () => {

	const [showModalAddFriend, setShowModalAddFriend] = useState(false);
	const [showModalNewGroup, setShowModalNewGroup] = useState(false);

	const closeModalAddFriend = () => {
		setShowModalAddFriend(false)
	}

	const closeModalNewGroup = () => {
		setShowModalNewGroup(false)
	}

	return (
		<View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
			<Conversations />
			<ModalAddFriend
				showModal={showModalAddFriend}
				closeModal={closeModalAddFriend}
			/>
			<ModalNewGroup
				showModal={showModalNewGroup}
				closeModal={closeModalNewGroup}
			/>
			<TouchableOpacity onPress={() => setShowModalNewGroup(true)} style={fabStyles.styleNewGroup}>
				<Image style={fabStyles.image} source={require('../assets/images/add_group.png')} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setShowModalAddFriend(true)} style={[fabStyles.styleNewGroup, fabStyles.styleAddFriend]}>
				<Image style={fabStyles.image} source={require('../assets/images/add_friend.png')} />
			</TouchableOpacity>
		</View>
	)
}

export default ConversationsScreen