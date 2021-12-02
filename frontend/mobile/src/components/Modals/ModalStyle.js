import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		height: 100
	},
	modalView: {
		margin: 10,
		borderRadius: 20,
		padding: 25,
		alignItems: "center",
		shadowColor: "#000000",
		height: 200,
		backgroundColor: theme.colors.primary,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	modalViewGroup: {
		height: 500,
		width: 250,
		padding: 20,
	},
	mainContainer: {
		flex: 1,
		maxHeight: 40,
		alignSelf: 'center',
		width: 70
	},
	mainContainerGroup: {
		flex: 1,
		maxHeight: 40,
		alignSelf: 'center',
		width: 200
	},
	input: {
		flex: 1,
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		width: '100%',
		fontSize: 15,
		borderRadius: 5
	},
	inputName: {
		fontSize: 12,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		color: "#ffffff",
		fontSize: 15,
		fontWeight: "bold"
	},
	modalTextGroup: {
		marginBottom: 5,
		marginTop: 10,
		fontSize: 11,
	},
	button: {
		marginTop: 35,
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#120a8f"
	},
	buttonNewGroup: {
		marginTop: 30,
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#120a8f"
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	buttonAddUser: {
		alignItems: "center",
		justifyContent: "center",
		width: 30,
		height: 30,
		position: 'absolute',
		top: 117,
		left: 170,
		backgroundColor: "#4197e5",
		borderRadius: 100,
		elevation: 5,
		shadowColor: theme.colors.primary,
		shadowOpacity: 0.4,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	},
	containerScrollView: {
		marginTop: 20,
		borderRadius: 10,
		shadowColor: "#000000",
		width: 200,
		height: 240,
		backgroundColor: "#FFFFFF",
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	userIdsOfGroup: {
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		backgroundColor: "#4197e5",
		borderRadius: 10,
		padding: 5,
		height: 30,
		width: 100,
		marginBottom: 5,
		alignSelf: "center",
	},
	textUserIds: {
		color: "#ffffff"
	},
	image: {
		display: "flex",
		height: '100%',
		width: '100%',
		resizeMode: 'stretch'
	}, 
	buttonClose: {
		alignItems: "center",
		justifyContent: "center",
		width: 20,
		height: 20,
		position: 'absolute',
		top: 8,
		right: 8,
		backgroundColor: "#4197e5",
		borderRadius: 100,
		elevation: 5,
		shadowColor: theme.colors.primary,
		shadowOpacity: 0.4,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	},
});