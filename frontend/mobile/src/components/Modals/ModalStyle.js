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
		backgroundColor: "white",
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
		height: 400,
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
		marginTop: 160,
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
		backgroundColor: theme.colors.black,
		borderRadius: 100,
		elevation: 5,
		shadowColor: theme.colors.primary,
		shadowOpacity: 0.4,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	}
});