import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const authStyles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		backgroundColor: theme.colors.primary
	},
	form: {
		flex: 2
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	buttonRegister: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 30,
		paddingHorizontal: 10
	},
	signUp: {
		alignSelf: 'center',
		color: 'darkgray',
		fontSize: 14
	}
});

export const inputStyles = StyleSheet.create({
	mainContainer: {
		alignSelf: 'center',
		height: 50,
		backgroundColor: theme.colors.white,
		flexDirection: 'row',
		marginHorizontal: 30,
		paddingHorizontal: 10,
		marginVertical: 10
	}
});

export const fabStyles = StyleSheet.create({
	styleNewGroup: {
		alignItems: "center",
		justifyContent: "center",
		width: 60,
		height: 60,
		position: 'absolute',
		bottom: 80,
		right: 10,
		backgroundColor: "#4197e5",
		borderRadius: 100,
		elevation: 5,
		shadowColor: theme.colors.primary,
		shadowOpacity: 0.4,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	},
	styleAddFriend: {
		bottom: 10,
	},
	image: {
		display: "flex",
		height: '60%',
		width: '60%',
		resizeMode: 'stretch'
	}
})