import React, { createContext, useState } from 'react'
import { FriendService } from '../services/FriendService/FriendService'
import { UserService } from '../services/User/UserService'
import AsyncStorage from '@react-native-async-storage/async-storage';

const userContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [listFriends, setListFriends] = useState([])
  const [userMsg, setUserMsg] = useState([])
  const [newMsg, setNewMsg] = useState({
    id: "213333000000", 
    data: {
      user: 9999999999,
      time: "11:00",
      content: "message.data",
    }
  })
  console.log("VENDO USERMSG",userMsg);
    //exemplo de obj
    // [
    //   {
    //     id: 2,
    //     chatItms: [ 
      //   {
      //   user: 0,
      //   time: "12:00",
      //   content: "Hey",
      //     }
    //    ]
    // ]
          
  const [currentChat, setCurrentChat] = useState(null)
  console.log("curr",currentChat);
  const signIn = async(id) => {
    const data = await new UserService().verifyUser(id) 
    if(data)  {
      setUser({id: id, name: data})  
      const friends = await new FriendService().getFriends(id)
      console.log("AQUFRIENDSI",friends);
      setListFriends(friends)
      return "logado"
    }
    return ""
  }

  const register = () => {

  }

  const updateListFriends =(newFriends) => {
    setListFriends([...listFriends, newFriends])
  }

  const updateMsg = async(id, newMsg) => {
    console.log("##############: ", userMsg, "@@@@: ", userMsg.length)
    let auxArray = await AsyncStorage.getItem('@userMsg')
    if(!auxArray){
      auxArray = []
    }else{
      auxArray = JSON.parse(auxArray)
    }
    let flag = 0
    console.log("\n\n\n\n\nAUXARRAY",newMsg,"sodadij",userMsg);
    auxArray.map((el)=>{
      console.log(el," -- ");
    })
    console.log("\n\n\n\n");
    console.log("EEEEEEEEEEEEEEEEEEEEEEE:", auxArray.length)
    auxArray.map((value, index)=>{
      console.log("WWWWWWW", value.id, " :SS: ", id)
      if(`${value.id}` == `${id}`){
        flag = 1
        console.log("XXX", newMsg);
        value.chatItms.push(newMsg)
      }
    })
    if(flag==0){
      auxArray=[...auxArray,{
        id: `${id}`,
        chatItms:[newMsg]
      }]
    }
    console.log("\n\nauxArray\n\n",auxArray);

    auxArray.map((el)=>{
      console.log(el," -- ");
    })
    console.log("\n\n\n\n");
    console.log("FFFFFFFFFFFFFFFFF", auxArray.length)
    await AsyncStorage.setItem('@userMsg', JSON.stringify(auxArray))
    setUserMsg(auxArray)
    
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
        newMsg
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext
