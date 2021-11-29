import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'

import { theme } from '../../theme';

const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>{title}</Text>
				<TouchableOpacity onPress={() => {}} style={styles.imageContainer}>
					<Image style={styles.image} source={{
						uri: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
					}} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.primary,
		paddingTop: 30,
		paddingBottom: 10
	},
	headerContainer: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
		position: 'relative',
		justifyContent: 'space-between',
		marginHorizontal: 15,
		marginVertical: 10
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: theme.colors.white,
		alignSelf: 'center'
	},
	imageContainer: {
		borderRadius: 20,
		height: 40,
		width: 40,
		overflow: 'hidden',
	},
	image: {
		height: 40,
		width: 40
	}
})

export default Header