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
	const [removeFriend, setRemoveFriend] = useState(false);
	const [removeGroup, setRemoveGroup] = useState(false);
	
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
				removeFriend={removeFriend}
				setRemoveFriend={setRemoveFriend}
				removeGroup={removeGroup}
				setRemoveGroup={setRemoveGroup}
			/>
			<ModalNewGroup
				showModal={showModalNewGroup}
				closeModal={closeModalNewGroup}
			/>
			<TouchableOpacity 
				onPress={() => {
					setShowModalAddFriend(true)
					setRemoveGroup(true)
				}}
				style={[fabStyles.styleNewGroup, fabStyles.styleAddFriend4]}
			>
				<Image style={fabStyles.image} source={require('../assets/images/sub_group.png')} />
			</TouchableOpacity>
			<TouchableOpacity 
				onPress={() => {
					setShowModalAddFriend(true) 
					setRemoveFriend(true)
				}} 
				style={[fabStyles.styleNewGroup, fabStyles.styleAddFriend3]}
			>
				<Image style={fabStyles.image} source={require('../assets/images/sub_friend.png')} />
			</TouchableOpacity>
			<TouchableOpacity 
				onPress={() => {
					setShowModalNewGroup(true)
				}} 
				style={[fabStyles.styleNewGroup]}
			>
				<Image style={fabStyles.image} source={require('../assets/images/add_group.png')} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setShowModalAddFriend(true)} style={[fabStyles.styleNewGroup, fabStyles.styleAddFriend1]}>
				<Image style={fabStyles.image} source={require('../assets/images/add_friend.png')} />
			</TouchableOpacity>
		</View>
	)
}

export default ConversationsScreen