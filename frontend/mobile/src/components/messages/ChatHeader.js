import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { theme } from '../../theme';

const ChatHeader = ({ username, onPress }) => {
	return (
		<View style={styles.container}>
			<View style={styles.backButton} onPress={onPress}>
			</View>
			<View style={styles.profileOptions}>
				<View style={styles.profile}>
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{username}</Text>
					</View>
				</View>
				<View style={styles.options}> 
					<View style={{ paddingHorizontal: 5 }}>
					</View>
					<View style={{ paddingHorizontal: 20 }}>
					</View>
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
		fontWeight: 'bold',
		paddingBottom: 20
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