import React from "react";

export default function ChatListItems(props) {

  const selectChat = (e) => {
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
        className={`chatlist__item ${
          props.active ? props.active : ""
        } `}
      >
        <div className="userMeta">
          <p>{props.name}</p>
        </div>
      </div>
    );
  }

