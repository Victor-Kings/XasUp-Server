import React, { useContext, useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

import { authStyles } from '../styles';
import { theme } from '../theme';

import Header from '../components/auth/Header';
import AppButton from '../components/auth/AppButton';
import userContext from '../context/userContext';

const LoginScreen = ({ navigation }) => {
	const { signIn } = useContext(userContext);
	const [idInput, setIdInput] = useState();

	const eventSignIn = async () => {
		console.log("LOGANDO");
		const status = await signIn(idInput);
		console.log(status);
		navigation.navigate("HomeScreen")
	}
	const eventRegister = async () => {
		console.log("Cadastrando");
		const status = await signIn(idInput);
		console.log(status);
		navigation.navigate("RegisterScreen")
	}
	return (
		<View style={authStyles.container}>
			<View style={authStyles.form}>
				<Header title="Login" />
				<View style={styles.mainContainer}>
					<TextInput style={styles.input} keyboardType='numeric' onChangeText={(text) => setIdInput(text)} />
				</View>
			</View>
			<Button
				style={authStyles.buttonRegister}
				onPress={() => eventRegister()}
				color={theme.colors.primary}
				title="Cadastrar"
			/>
			<View style={authStyles.buttonContainer}>
				<AppButton
					onPress={() => eventSignIn()}
					color={theme.colors.primary}
					title="Log in"
				/>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		maxHeight: 50,
		alignSelf: 'center',
		width: 100

	},
	input: {
		flex: 1,
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		width: '100%',
		fontSize: 20,
		borderRadius: 5
	}

})

export default LoginScreen;