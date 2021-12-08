import React, { createContext, useEffect, useState } from 'react'
import { FriendService } from '../services/FriendService/FriendService'
import { UserService } from '../services/User/UserService'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GroupService } from '../services/GroupService/GroupService';
import MqttController from '../services/mqttController';

const userContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [listFriends, setListFriends] = useState([])
  const [listGroups, setListGroups] = useState([])
  const [userMsg, setUserMsg] = useState([])
  const [groupMsg, setGroupMsg] = useState([])
  const [newFriend, setNewFriend] = useState(null)
  const [newMsg, setNewMsg] = useState({
    id: "213333000000", 
    newMessage: false,
    data: {
      user: 9999999999,
      time: "11:00",
      content: "message.data",
      name:"user.name"
    }
  })
  console.log(listFriends);
  //exemplo de obj
  // [
  //   {
  //     id: 2,
  //     newMessage: false,
  //     chatItms: [ 
  //                 {
  //                    user: 0,
  //                    time: "12:00",
  //                    content: "Hey",
  //                    name:"victor",
  //                    visualized: false
  //                  }
  //               ]
  //    }
  // ]
          
  const [currentChat, setCurrentChat] = useState(null)
  const signIn = async(id) => {
    AsyncStorage.clear();
    setUserMsg([]);
    setGroupMsg([]);
    const data = await new UserService().verifyUser(id) 
    
    if(data) {
      setUser({id: id, name: data})  
      const friends = await new FriendService().getFriends(id)
      console.log("friends", friends);
      const groups = await new GroupService().getGroups(id)
      setListFriends(friends)
      setListGroups(groups)
      await AsyncStorage.setItem('@newGroup', JSON.stringify(groups))
      return "logado"
    }
    return ""
  }

  const register = async(name) => {
    console.log("entrou na funcao register");
    AsyncStorage.clear();
    setUserMsg([]);
    setGroupMsg([]);
    const data = await new UserService().newUser(name)
    console.log("SAIU DO DATA", data);
    if(data){
      console.log("DATA.", data);
      setUser({id:`${data.id}`, name: name}) 
      setListFriends([])
      setListGroups([])
      return "logado"
    }
    return ""
  }

  const updateListFriends =(newFriends) => {
    setListFriends([...listFriends, newFriends])
  }

  const updateMsg = async(id, newMsg, isGroup=false) => {
    let auxArray = isGroup ? await AsyncStorage.getItem('@groupMsg') : await AsyncStorage.getItem('@userMsg')
    if(!auxArray){
      auxArray = []
    }else{
      if(auxArray != null){
      auxArray = JSON.parse(auxArray)}
    }
    let flag = 0

    auxArray.map((value, index)=>{
      if(`${value.id}` == `${id}`){
        flag = 1
        value.chatItms.push(newMsg)
      }
    })

    if(flag==0){
      auxArray=[...auxArray,{
				newMessage: false,
        id: `${id}`,
        chatItms:[newMsg]
      }]
    }
    isGroup ? await AsyncStorage.setItem('@groupMsg', JSON.stringify(auxArray)) : await AsyncStorage.setItem('@userMsg', JSON.stringify(auxArray))
    isGroup ? setGroupMsg(auxArray) : setUserMsg(auxArray)
  }

  const sendVisualizedMsg = (topicId) => {
    MqttController.sendMessage('baeldung', {
      originTopic: user.id,
      originName: user.name,
      topic: topicId,
      data: `${user.id}_Visualized`
    });
  }

  const setVisualizedMsg = async (originId) => {
    let auxArray = await AsyncStorage.getItem('@userMsg')
    if(auxArray!=null){
        auxArray = JSON.parse(auxArray)
    }
    auxArray.map((value) => {
      if(`${value.id}` == `${originId}`){
        value.chatItms.map((element)=>{
          element.visualized = true
        })
      }
    })
    
    await AsyncStorage.setItem('@userMsg', JSON.stringify(auxArray))
    setUserMsg(auxArray)
  }

  const attGroups= async(groupname, groupnameid) => {
    let auxArray = await AsyncStorage.getItem('@newGroup')
    let newGroups
    if(auxArray){
      auxArray = JSON.parse(auxArray)
      newGroups = [...auxArray, {groupname: groupname, groupnameid: groupnameid}]
    }else{
      newGroups = [{groupname: groupname, groupnameid: groupnameid}]
    }
    console.log("CHEGNADO AQUI - auxArray", auxArray);
    
    console.log("newGroups",newGroups);
    setListGroups(newGroups)
    await AsyncStorage.setItem('@newGroup', JSON.stringify(newGroups))
  }

  return (
    <userContext.Provider
      value={{
        signIn,
        user,
        updateListFriends,
        listFriends,
        updateMsg,
        userMsg,
        setCurrentChat,
        currentChat,
        setNewMsg,
        newMsg,
        listGroups,
        groupMsg,
        sendVisualizedMsg,
        setVisualizedMsg,
        register,
        setListFriends,
        setListGroups,
        newFriend,
        setNewFriend,
        attGroups
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext
