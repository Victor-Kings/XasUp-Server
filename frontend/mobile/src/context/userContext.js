import React, { createContext, useEffect, useState } from 'react'
import { FriendService } from '../services/FriendService/FriendService'
import { UserService } from '../services/User/UserService'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GroupService } from '../services/GroupService/GroupService';

const userContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [listFriends, setListFriends] = useState([])
  const [listGroups, setListGroups] = useState([])
  const [userMsg, setUserMsg] = useState([])
  const [groupMsg, setGroupMsg] = useState([])
  const [newMsg, setNewMsg] = useState({
    id: "213333000000", 
    data: {
      user: 9999999999,
      time: "11:00",
      content: "message.data",
      name:"user.name"
    }
  })
  console.log("VENDO groupMSG",groupMsg);
    //exemplo de obj
    // [
    //   {
    //     id: 2,
    //     chatItms: [ 
      //   {
      //   user: 0,
      //   time: "12:00",
      //   content: "Hey",
      //   name:"victor"
      //     }
    //    ]
    // ]
          
  const [currentChat, setCurrentChat] = useState(null)
  const signIn = async(id) => {
    const data = await new UserService().verifyUser(id) 
    if(data)  {
      setUser({id: id, name: data})  
      const friends = await new FriendService().getFriends(id)
      const groups = await new GroupService().getGroups(id)
      setListFriends(friends)
      setListGroups(groups)
      return "logado"
    }
    return ""
  }

  const register = () => {

  }

  const updateListFriends =(newFriends) => {
    setListFriends([...listFriends, newFriends])
  }

  const updateMsg = async(id, newMsg,isGroup=false) => {
    let auxArray = isGroup ? await AsyncStorage.getItem('@groupMsg') : await AsyncStorage.getItem('@userMsg')
    if(!auxArray){
      auxArray = []
    }else{
      auxArray = JSON.parse(auxArray)
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
        id: `${id}`,
        chatItms:[newMsg]
      }]
    }
    isGroup ? await AsyncStorage.setItem('@groupMsg', JSON.stringify(auxArray)) : await AsyncStorage.setItem('@userMsg', JSON.stringify(auxArray))
    isGroup ? setGroupMsg(auxArray) : setUserMsg(auxArray)
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
        groupMsg
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext
