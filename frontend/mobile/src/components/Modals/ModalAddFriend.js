import React, {useContext, useState} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import userContext from '../../context/userContext';
import {FriendService} from '../../services/FriendService/FriendService';
import {styles} from './ModalStyle';
import {DeleteFromGroup} from '../../services/Delete/Delete';

export default function ModalAddFriend({
  showModal,
  closeModal,
  removeFriend,
  removeGroup,
  setRemoveFriend,
  setRemoveGroup,
}) {
  const [idInput, setIdInput] = useState('');
  const {user, listFriends, setListFriends, listGroups, setListGroups} =
    useContext(userContext);

  const handleButtonAdd = async () => {
    if (removeFriend) {
      const response = await new DeleteFromGroup().deleteFriend(
        user.id,
        idInput,
      );
      const newList = [...listFriends];
      const result = newList.filter(value => {
        return value.id != idInput;
      });
      setListFriends([...result]);
    } else if (removeGroup) {
      const response = await new DeleteFromGroup().deleteFromGroup(
        user.id,
        idInput,
      );
      const newList = [...listGroups];
      const result = newList.filter(value => {
        return value.id != user.id;
      });
      setListGroups([result]);
    } else {
      const userFriend = await new FriendService().newFriend(user.id, idInput);
      setListFriends([...listFriends, {name: userFriend.name, id: idInput}]);
    }
    setRemoveFriend(false);
    setRemoveGroup(false);
    closeModal();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              closeModal();
              setRemoveFriend(false);
              setRemoveGroup(false);
            }}
            style={styles.buttonClose}>
            <Image
              style={styles.image}
              source={require('../../assets/images/x-mark.png')}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>
            {removeGroup
              ? 'Digite o nome do grupo: '
              : 'Digite o ID do usuário: '}{' '}
          </Text>
          <View style={styles.mainContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => setIdInput(text)}
            />
          </View>
          <Pressable style={[styles.button]} onPress={() => handleButtonAdd()}>
            <Text style={styles.textStyle}>
              {removeFriend
                ? 'Remover amigo'
                : removeGroup
                ? 'Remover grupo'
                : 'Adicionar amigo'}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
