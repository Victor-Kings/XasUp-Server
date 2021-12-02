import React, { useContext, useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

import { authStyles, inputStyles } from '../styles';
import { theme } from '../theme';

import Header from '../components/auth/Header';
import AppButton from '../components/auth/AppButton';
import userContext from '../context/userContext';

const RegisterScreen = ({ navigation }) => {
	const {register} = useContext(userContext);
	const [nameInput, setNameInput] = useState();

	const eventRegister = async () =>{
		console.log("LOGANDO");
    	const status = await register(nameInput); 
		console.log("REGISTRANDO",status);
		if(status == "logado"){
			navigation.navigate("HomeScreen")
		}
	}

	return (
		<View style={authStyles.container}>
			<View style={authStyles.form}>
				<Header title="Cadastramento" />
                <View style={styles.mainContainer}>
                    <TextInput placeholder="nome" style={styles.input}  keyboardType='numeric' onChangeText={(text)=>setNameInput(text)}/>
                </View>
			</View>
			<View style={authStyles.buttonContainer}>
				<AppButton 
					onPress={() => eventRegister()} 
					color={theme.colors.primary} 
					title="Cadastrar" 
				/>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        maxHeight: 80,
        alignSelf: 'center',
        width: 200

    },
	input: {
		flex: 1,
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		width: '100%',
		fontSize: 20,
        borderRadius: 5,
        marginBottom: 30,
        textAlign: 'center'
	}
	
})

export default RegisterScreen;