import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Conversations from '../components/Conversations';

import { theme } from '../theme';
import { fabStyles } from '../styles';

const ConversationsScreen = () => {


	return (
		<View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
				<Conversations>
				</Conversations>
				<TouchableOpacity onPress={() => { }} style={fabStyles.styleNewGroup}>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { }} style={fabStyles.styleAddFriend}>
				</TouchableOpacity>
		</View>
	)
}

export default ConversationsScreen