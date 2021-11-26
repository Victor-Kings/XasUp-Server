import React, { useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default function ChatList(props){
 const  allChatUsers = [
    {
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     allChats: this.allChatUsers,
  //   };
  // }
  // eslint-disable-next-line
  const [allChats, setAllChats] = useState(allChatUsers);

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
          {allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    );
  }

