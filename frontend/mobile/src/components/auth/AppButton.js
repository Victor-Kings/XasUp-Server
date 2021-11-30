import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { theme } from '../../theme';

const AppButton = ({ title, color, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={[styles.title, { color: color }]}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20
	}
})

export default AppButton;