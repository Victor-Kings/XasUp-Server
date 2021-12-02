import React, { useContext, useState } from "react";
import { View, Modal, Text, TextInput, Pressable, TouchableOpacity, ScrollView, Image } from 'react-native';
import userContext from "../../context/userContext";
import { GroupService } from "../../services/GroupService/GroupService";
import { styles } from './ModalStyle';

export default function ModalNewGroup({ showModal, closeModal }) {

    const [groupName, setGroupName] = useState("");
    const [friendListOfGroup, setFriendListOfGroup] = useState([])
    const [inputModal, setInputModal] = useState("")
    const {user, listGroups, setListGroups} = useContext(userContext)

    const handleButtonCreate = async () => {
        console.log("GRUPO CREATE",groupName, [...friendListOfGroup, user.id] );
        const groupId = await new GroupService().newGroup(groupName, [...friendListOfGroup, user.id])
        console.log("list grouop",[...listGroups,{groupname:groupName,groupnameid: groupId.id}]);
        setListGroups([...listGroups,{groupname:groupName, groupnameid: groupId.id}])
        closeModal();
    }

    const handleAddUser = async () => {
        if (inputModal != "") {
            setFriendListOfGroup([...friendListOfGroup, inputModal]);
            setInputModal("");
        }
    }

    const removeUserId = (index) => {
        const friendListOfGroupAux = friendListOfGroup.slice()
        friendListOfGroupAux.splice(index, 1)
        setFriendListOfGroup(friendListOfGroupAux)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, styles.modalViewGroup]}>
                <TouchableOpacity onPress={() => closeModal()} style={styles.buttonClose}>
                        <Image style={styles.image} source={require('../../assets/images/x-mark.png')} />
                    </TouchableOpacity>
                    <Text style={[styles.modalText, styles.modalTextGroup]}>Digite o nome do grupo: </Text>
                    <View style={styles.mainContainerGroup}>
                        <TextInput style={[styles.input, styles.inputName]} onChangeText={(text) => setGroupName(text)} />
                    </View>
                    <Text style={[styles.modalText, styles.modalTextGroup]}>Digite o ID do usuário:</Text>
                    <View style={styles.mainContainer}>
                        <TextInput
                            value={inputModal}
                            onChangeText={(text) => setInputModal(text)}
                            style={[styles.input, styles.inputName]} />
                    </View>
                    <TouchableOpacity onPress={() => { handleAddUser() }} style={styles.buttonAddUser}>
                        <Image style={styles.image} source={require('../../assets/images/plus.png')} />
                    </TouchableOpacity>
                    <View style={styles.containerScrollView}>
                        <ScrollView style={styles.containerScrollView}>
                            {
                                friendListOfGroup && friendListOfGroup.map((value, index) => (
                                    <View key={`${value}-${index}`}>
                                        <Pressable
                                            style={styles.userIdsOfGroup}
                                            onPress={() => removeUserId(index)}
                                        >
                                            <Text style={styles.textUserIds}> {value} </Text>
                                        </Pressable>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
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