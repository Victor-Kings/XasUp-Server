import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ProfileInfo from './common/ProfileInfo';

import { theme } from '../theme';
import userContext from '../context/userContext';
const ConversationItem = ({  username,  lastMessage, notification, id }) => {

	const navigation = useNavigation();
	const {setCurrentChat} = useContext(userContext);

	const showNotification = (type) => {
		if (notification && type === "number") {
			return (
				<View style={styles.notificationCircle}>
					<Text style={styles.notification}>{notification}</Text>
				</View>
			);
		} else if (notification && type === "imageCircle") {
			return {
				borderColor: theme.colors.primary
			}
		}
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.conversation}
			onPress={() => {
				navigation.navigate('MessagesScreen', {
					username: username,
					id:id
				})
				setCurrentChat(`${id}`)
			}}>
				<View style={{
						flex: 1,
						justifyContent: 'center'
					}}>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}>
						<Text numerOfLine={1} style={styles.username}>{username}</Text>
					</View>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}>
						<Text style={styles.message}>{lastMessage}</Text>
						{showNotification('number')}
					</View>
				</View>
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {

	},
	conversation: {
		flexDirection: 'row',
		paddingBottom: 25,
		paddingRight: 20,
		paddingLeft: 10
	},
	imageContainer: {
		marginRight: 15,
		borderRadius: 25,
		height: 50,
		width: 50,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center' 
	},
	image: {
		height: 55,
		width: 55
	},
	username: {
		fontSize: theme.fontSize.title,
		color: theme.colors.title,
		width: 210
	},
	message: {
		fontSize: theme.fontSize.message,
		width: 240,
		color: theme.colors.subTitle
	},
	time: {
		fontSize: theme.fontSize.subTitle,
		color: theme.colors.subTitle,
		fontWeight: '300'
	},
	notificationCircle: {
		backgroundColor: theme.colors.primary,
		borderRadius: 50,
		height: 20,
		width: 20,
		marginRight: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	notification: {
		color: theme.colors.white,
		fontWeight: 'bold',
		fontSize: 10
	}
})

export default ConversationItem