import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { theme } from '../../theme';

const ChatHeader = ({ username, bio, picture, onlineStatus, onPress }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={onPress}>
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					<Image style={styles.image} source={{ uri: picture }} />
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{username}</Text>
						<Text style={styles.onlineStatus}>{onlineStatus}</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.options}> 
					<TouchableOpacity style={{ paddingHorizontal: 5 }}>
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingHorizontal: 20 }}>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: theme.colors.primary,
		paddingTop: 40,
		paddingBottom: 10
	},
	backButton: {
		alignSelf: 'center',
		paddingHorizontal: 10
	},
	profileOptions: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#fff',
		flex: 4
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 32.5
	},
	usernameAndOnlineStatus: {
		flexDirection: 'column',
		justifyContent: 'center',
		paddingHorizontal: 10
	},
	username: {
		color: theme.colors.white,
		fontSize: 18,
		fontWeight: 'bold'
	},
	onlineStatus: {
		color: theme.colors.white,
		fontSize: 16
	},
	options: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
})

export default ChatHeader