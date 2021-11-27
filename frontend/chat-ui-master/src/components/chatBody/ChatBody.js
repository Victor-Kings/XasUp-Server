import React from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";

export default function ChatBody() {
    
    return (
      <div className="main__chatbody">
          <ChatList />
          <ChatContent />
      </div>
    );
  }

