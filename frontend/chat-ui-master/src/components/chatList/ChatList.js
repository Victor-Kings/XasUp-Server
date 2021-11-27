import React, { useContext, useState } from "react";
import userContext from "../../context/userContext";

import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default function ChatList(props){
 const { listFriends }  = useContext(userContext);

    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Procure aqui" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {listFriends && listFriends.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                id={item.id}
                animationDelay={index + 1}
              />
            );
          })}
        </div>
      </div>
    );
  }

