export function ChatListItems () {
 
  const selectChat = (e: any) => {
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
        style={{ animationDelay: `0.2s` }}
        onClick={selectChat}
        className={`chatlist__item`}
      >
        <div className="userMeta">
          <p>Joaozinhop</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
    );
}
