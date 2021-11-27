import React, { useContext, useState } from "react";
import  Modal  from "../components/modal/Modal";
import ChatBody from "../components/chatBody/ChatBody";
import Nav from "../components/nav/Nav";
import userContext from "../context/userContext";
import ContentModal from "../components/contentModal/ContentModal";
function Main() {
    const { user } = useContext(userContext);
    const [isVisible, setIsVisible] = useState(user ? false : true);

    const closeModal = () => {
        setIsVisible(false)
    }

    return (
        <div className="__main">
            <Nav />
            <ChatBody />
            <Modal           
                showModal={isVisible}
                closeModal={closeModal}    
                content={<ContentModal closeModal={closeModal}/>}
                //{<div>aaa</div>}
            />
        </div>
    );
}

export default Main;
