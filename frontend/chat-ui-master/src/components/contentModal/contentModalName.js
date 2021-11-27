import React, { useState, useContext } from "react";
import "./contentModal.css";
import userContext from "../../context/userContext";

export default function ContentModal({ closeModal }) {
  const { signIn } = useContext(userContext);

  const [inputModal, setInputModal] = useState("");
  
  const handleButton = () => {
    signIn(inputModal);
    closeModal();
  };

  //  const [inputModal, setInputModal] = useState("");
  return (
    <div>
      <div className="boxTitle">Digite o nome de usuário para cadastrar</div>
      <div className="boxContent">
        <input
          id="outlined-basic"
          value={inputModal}
          onChange={(event) => setInputModal(event.target.value)}
          style={{ width: "100%" }}
        />
        <button className="buttonStyle" onclick={handleButton}>
          Cadastrar
        </button>
      </div>

    </div>
  );
}