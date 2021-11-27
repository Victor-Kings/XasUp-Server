import React, { useState, createRef, useContext, useEffect } from "react";
import userContext from "../../context/userContext";

import "./chatContent.css";
import ChatItem from "./ChatItem";

import mqtt from "mqtt"

var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

var host = 'ws://localhost:9001/'



export default function ChatContent(props){
  const messagesEndRef = createRef(null);
  const {currentChat, userMsg, updateMsg} = useContext(userContext);
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

  var client = mqtt.connect(host)
  console.log('connecting mqtt client')

  client.on('error', function (err) {
    console.log(err)
    client.end()
  })
  
  client.on('connect', function () {
    console.log('client connected:' + clientId)
    client.subscribe('1', { qos: 0 })
   
  })
  
  client.on('message', function (topic, message, packet) {
    console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
  })

  const closeClient = () =>{
    client.on('close', function () {
      console.log(clientId + ' disconnected')
    })
  }

  const publishClient = (msg) => {
    client.on('connect', function () {
       client.publish('topic', msg, { qos: 0, retain: false })
    })
  }

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <p>Tim Hover</p>
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

