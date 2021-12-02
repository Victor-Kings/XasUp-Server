import React, { useState } from "react";
import { View, Modal, Text, TextInput, Pressable, TouchableOpacity, Image } from 'react-native';
import { styles } from './ModalStyle';

export default function ModalAddFriend({ showModal, closeModal }) {

    const [idInput, setIdInput] = useState("");

    const handleButtonAdd = async () => {
        console.log("ID do usuário para adicionar: ", idInput);
        closeModal();
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={() => closeModal()} style={styles.buttonClose}>
                        <Image style={styles.image} source={require('../../assets/images/x-mark.png')} />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Digite o ID do usuário: </Text>
                    <View style={styles.mainContainer}>
                        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(text) => setIdInput(text)} />
                    </View>
                    <Pressable
                        style={[styles.button]}
                        onPress={() => handleButtonAdd()}
                    >
                        <Text style={styles.textStyle}>Adicionar amigo</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}