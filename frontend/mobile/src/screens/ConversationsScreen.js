import React, { useState, useContext, useEffect } from "react";
import { View, Image, TouchableOpacity } from 'react-native'
import Conversations from '../components/Conversations';
import ModalAddFriend from "../components/Modals/ModalAddFriend";
import ModalNewGroup from "../components/Modals/ModalNewGroup";
import ModalNewFriend from "../components/Modals/ModalNewFriend";
import { theme } from '../theme';
import { fabStyles } from '../styles';
import userContext from "../context/userContext";


const ConversationsScreen = () => {
	const {newFriend} = useContext(userContext);

	const [showModalAddFriend, setShowModalAddFriend] = useState(false);
	const [showModalNewGroup, setShowModalNewGroup] = useState(false);
	const [removeFriend, setRemoveFriend] = useState(false);
	const [removeGroup, setRemoveGroup] = useState(false);
	const [showNewFriend, setShowNewFriend] = useState(false);

	const closeModalAddFriend = () => {
		setShowModalAddFriend(false)
	}

	const closeModalNewGroup = () => {
		setShowModalNewGroup(false)
	}

	const closeModalNewFriend = () => {
		setShowNewFriend(false)
	}

	useEffect(()=>{
		console.log("VAK)");
		if(newFriend!=null){
			setShowNewFriend(true)
		}
	},[newFriend])

	return (
		<View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
			<Conversations />
			<ModalNewFriend
				showModal={showNewFriend}
				closeModal={closeModalNewFriend}
				nameNewFriend={newFriend?.originName}
				idNewFriend={newFriend?.originTopic}
			/>
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