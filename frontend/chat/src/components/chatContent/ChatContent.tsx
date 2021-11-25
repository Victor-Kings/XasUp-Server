import { useState, useEffect } from "react";
import "./chatContent.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

export function ChatContent(props:any) {
  /*var chatItem = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];*/

  const [message, updateMessage] = useState<string>("");
  const [messages, updateMessages] = useState<string[]>([]);

  const handleFormSubmit = () => {
    if (message !== "") {
      updateMessages([...messages, message]);
    }
  };

  useEffect(()=>{
    updateMessage("");
  },[messages])

  const onKeyPressHandler= ((e:any)=>{
    if(e.key==="Enter"){
      handleFormSubmit();
    }
  })

  return (
    <div className="main__chatcontent" style={{backgroundColor:"green"}}>
      <div className="content__header">
          <div className="current-chatting-user">
            <p id="tittle">Chat</p>
          </div>
          <div className="settings"></div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {messages.map((msg, index) => (
            <div>
              <li id="messageList" key={index}>
                <span id="message">{msg}</span>
              </li>
            </div>
          ))}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            onChange={(e) => updateMessage(e.target.value)}
            type="text"
            placeholder="Digite uma mensagem aqui..."
            value={message}
            onKeyPress={onKeyPressHandler}
          />
          <Button
            variant="text"
            id="sendMsgBtn"
            startIcon={<SendIcon />}
            onClick={handleFormSubmit}
          ></Button>
        </div>
      </div>
    </div>
  );
}