import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


import { theme } from '../../theme';

const SearchInput = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TextInput style={styles.input} placeholder="Search" maxLength={10} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 30
	},
	row: {
		backgroundColor: theme.colors.searchBackground,
		flexDirection: 'row',
		borderRadius: 5,
		height: 45,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	input: {
		paddingHorizontal: 30,
		fontSize: 15,
		height: 45,
		flex: 1,
		color: theme.colors.searchText
	}
});

export default SearchInput