import React, { createContext, useState } from 'react'
import { FriendService } from '../services/FriendService/FriendService'
import { UserService } from '../services/User/UserService'

const userContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [listFriends, setListFriends] = useState([])
  const [userMsg, setUserMsg] = useState([])
  console.log("VENDO USERMSG",userMsg);
  //exemplo de obj
    // [
    //   {
    //     id: 2,
    //     chatItms: [ 
    //       { 
    //           key: 1,
    //           type: "",
    //           msg: "Hi Tim, How are you?"
    //       },
    //       ]
    //   },
    //   {
    //     id: 3,
    //     chatItms: [ 
    //       { 
    //           key: 1,
    //           type: "",
    //           msg: "Hi Tim, How are you?"
    //       },
    //       ]
    //   }
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

  const updateMsg = (id, newMsg) => {
    let auxArray = [...userMsg]
    let flag = 0
    console.log("antesauxArray", auxArray);
    auxArray.map((value, index)=>{
      if(value.id == id){
        flag = 1
        value.chatItms.push(newMsg)
      }
    })
    if(flag==0){
      auxArray=[...auxArray,{
        id: id,
        chatItms:[newMsg]
      }]
    }
    console.log("auxArray",auxArray);
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
        currentChat
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext
