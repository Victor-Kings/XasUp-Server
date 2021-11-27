import React, { useContext } from "react";
import userContext from "../../context/userContext";

export default function ChatListItems(props) {
  const {setCurrentChat} = useContext(userContext)

  const selectChat = (e) => {
    console.log("WWWWWWWWW",props.id)
    setCurrentChat(props.id);
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };


    return (
      <div
        style={{ animationDelay: `0.${props.animationDelay}s` }}
        onClick={selectChat}
        className={`chatlist__item`}
      >
        <div className="userMeta">
          <p>{props.name}</p>
        </div>
      </div>
    );
  }

