import React, { useState, createRef, useContext, useEffect } from "react";
import userContext from "../../context/userContext";

import "./chatContent.css";
import ChatItem from "./ChatItem";

import mqtt from "mqtt"

var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

var host = 'ws://localhost:9001/mqtt'



export default function ChatContent(props){
  const messagesEndRef = createRef(null);
  const {currentChat, userMsg, updateMsg,listFriends,user} = useContext(userContext);
  var client = mqtt.connect(host)
  const [isConnected, setIsConnected] = useState(false);
  const [chat, setChat] = useState(()=> {
    userMsg.map((value)=>{
      if(value.id == currentChat){
        return value.chatItms
      }
    })
    return []
  })
  const [msg, setMsg] = useState("")

  const walkChatToSet=()=>{
    let flag = 0
    userMsg.map((value, index) => {
      if(value.id == currentChat){
        flag= 1
        setChat(value.chatItms)
      }
    })
    if(flag == 0){
        setChat([])
    }
  }

  useEffect(()=>{
    walkChatToSet();
  },[currentChat])

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  const updateMessage = () => {
    if (msg !== "") {
      setChat([...chat, {
        key: 1,
        type: "",
        msg: msg,
      }])
      scrollToBottom();

      updateMsg(
        currentChat,
        {
          key: 1,
          type: "",
          msg: msg,
        }
      )
      mqttPublish(msg)
      setMsg("")
    }
    scrollToBottom();
  }

  const onStateChange = (e) => {
    setMsg(e.target.value)
  };


 const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      updateMessage()
    }
  }

  
  if(client){
  client.on('error', function (err) {
    console.log(err)
    setIsConnected(false)
  })
  if(isConnected==false){
  client.on('connect', function () {
    console.log('client connected:' + clientId)
    client.subscribe(user?.id||"", { qos: 0 })
    setIsConnected(true)
  })}
  
  client.on('message', function (topic, message, packet) {
    console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
  })
}
  const closeClient = () =>{
    client.on('close', function () {
      console.log(clientId + ' disconnected')
    })
  }

  const mqttPublish = (msg) => {
    if (client) {
      console.log("EÀ");
      client.publish('baeldung', JSON.stringify({topic: currentChat, data: msg}), { qos:0 }, error => {
        if (error) {
          console.error('Publish error: ', error);
        }
      });
      console.log("EÀD");
    }
  }

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <p>{listFriends.find((e)=>(e.id==currentChat))?.name||""}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content__body">
          <div className="chat__items">
            {chat.map((itm, index) => {
              return (
                <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                />
                );
              })}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="Digite uma mensagem aqui..."
              onChange={onStateChange}
              value={msg}
              onKeyPress={handleKeyPress}
              />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={updateMessage}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }

