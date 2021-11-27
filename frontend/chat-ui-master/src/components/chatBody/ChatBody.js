import React from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import { Connector } from 'mqtt-react-hooks';

export default function ChatBody() {
    
    return (
      <div className="main__chatbody">
        <Connector brokerUrl="mqtt://192.168.0.103:1883">
          <ChatList />
          <ChatContent />
        </Connector>
      </div>
    );
  }

