import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { theme } from '../../theme';

const ProfileInfo = ({ username, bio, picture, isBlocked, isMuted, hide }) => {
	return (
		<TouchableOpacity 
			style={styles.modalContainer}
			onPress={hide}
			activeOpacity={1}
		>
			<View style={styles.modalInnerContainer}>
				<TouchableOpacity activeOpacity={1}>
					<Image style={styles.image} source={{ uri: picture }} />
					<View style={styles.usernameContainer}>
						<Text style={styles.username}>{username}</Text>
					</View>
					<View style={styles.modalOptionsContainer}>
						<TouchableOpacity style={styles.modalIconContainer}>
						</TouchableOpacity>
						<TouchableOpacity style={styles.modalIconContainer}>
						</TouchableOpacity>
						<TouchableOpacity style={styles.modalIconContainer}>
						</TouchableOpacity>
					</View>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		shadowColor: '#000000',
		shadowOpacity: 0.3,
		shadowRadius: 10
	},
	modalInnerContainer: {
		backgroundColor: theme.colors.white,
		borderRadius: 20,
		elevation: 3,
		overflow: 'hidden' 
	},
	image: {
		width: 200,
		height: 200,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20
	},
	usernameContainer: {
		position: 'absolute',
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: '#5557',
		width: '100%',
		alignItems: 'center' 
	},
	username: {
		color: theme.colors.white,
		backgroundColor: 'transparent'
	},
	modalOptionsContainer: {
		backgroundColor: theme.colors.white,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	modalIconContainer: {
		paddingVertical: 5,
		paddingHorizontal: 10
	}
})

export default ProfileInfo