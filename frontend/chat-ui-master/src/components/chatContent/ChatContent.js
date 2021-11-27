import React, { useState, createRef, useContext, useEffect } from "react";
import userContext from "../../context/userContext";

import "./chatContent.css";
import ChatItem from "./ChatItem";
import { useSubscription  } from 'mqtt-react-hooks';

var chatItms = [
  {
    key: 1,
    type: "",
    msg: "Hi Tim, How are you?",
  },
  {
    key: 2,
    type: "other",
    msg: "I am fine.",
  },
  {
    key: 3,
    type: "other",
    msg: "What about you?",
  },
  {
    key: 4,
    type: "",
    msg: "Awesome these days.",
  },
  {
    key: 5,
    type: "other",
    msg: "Finally. What's the plan?",
  },
  {
    key: 6,
    type: "",
    msg: "what plan mate?",
  },
  {
    key: 7,
    type: "other",
    msg: "I'm taliking about the tutorial",
  },
];


export default function ChatContent(props){
  const { message } = useSubscription ('1');

  console.log("TESTE", message);

  
  useEffect(() => {
    if (message)console.log("message", message);;
  }, [message]);


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

