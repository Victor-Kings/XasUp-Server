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

export default function ModalNewFriend({
  showModal,
  closeModal,
  nameNewFriend,
  idNewFriend
}) {
  const {user, listFriends, setListFriends, listGroups, setListGroups, setNewFriend} =
    useContext(userContext);

  const handleButtonAdd = async (status) => {
    if(status=="refuse"){
      await new DeleteFromGroup().deleteFriend(
        user.id,
        idNewFriend,
      );
      const newList = [...listFriends];
      const result = newList.filter(value => {
        return value.id != idNewFriend;
      });
      setListFriends([...result]);
      setNewFriend(null)
    } else {
      setListFriends([...listFriends, {name: nameNewFriend, id: idNewFriend}]);
      setNewFriend(null)
    }

    closeModal();
    setNewFriend(null)
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
            {`Aceitar amizade de ${nameNewFriend}?`}
          </Text>
          <View style={{flex:1, flexDirection:"row",maxHeight:80}}>
            <Pressable style={[styles.button]} onPress={() => handleButtonAdd("accept")}>
              <Text style={styles.textStyle}>
                Aceitar
              </Text>
            </Pressable>
            <Pressable style={[styles.button]} onPress={() => handleButtonAdd("refuse")}>
              <Text style={styles.textStyle}>
                Recusar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
