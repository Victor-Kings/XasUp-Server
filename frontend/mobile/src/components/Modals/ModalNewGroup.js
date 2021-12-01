import React, { useState } from "react";
import { View, Modal, Text, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './ModalStyle';

export default function ModalNewGroup({ showModal, closeModal }) {

    const [groupName, setGroupName] = useState("");
    const [listUserIDs, setListUserIDs] = useState([])
    const [inputModal, setInputModal] = useState("")


    const handleButtonCreate = async () => {
        console.log(groupName);
        console.log(listUserIDs);
        closeModal();
    }

    const handleAddUser = async () => {
        console.log(listUserIDs);
        setListUserIDs([...listUserIDs, inputModal]);
        setInputModal("");
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, styles.modalViewGroup]}>
                    <Text style={[styles.modalText, styles.modalTextGroup]}>Digite o nome do grupo: </Text>
                    <View style={styles.mainContainerGroup}>
                        <TextInput style={[styles.input, styles.inputName]} onChangeText={(text) => setGroupName(text)} />
                    </View>
                    <Text style={[styles.modalText, styles.modalTextGroup]}>Digite o ID do usuário:</Text>
                    <View style={styles.mainContainer}>
                        <TextInput
                            id="outlined-basic"
                            value={inputModal}
                            onChangeText={(text) => setInputModal(text)}
                            style={[styles.input, styles.inputName]} />
                    </View>
                    <TouchableOpacity onPress={() => { handleAddUser() }} style={styles.buttonAddUser}>
                    </TouchableOpacity>
                    <ScrollView>
                        {
                            listUserIDs && listUserIDs.map((value, index) =>
                                <View
                                    key={index}
                                />
                            )
                        }
                    </ScrollView>
                    <Pressable
                        style={[styles.buttonNewGroup]}
                        onPress={() => handleButtonCreate()}
                    >
                        <Text style={styles.textStyle}>Criar Grupo</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}