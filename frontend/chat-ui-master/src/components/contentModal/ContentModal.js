import React, { useState, useContext } from "react";
import "./contentModal.css";
import userContext from "../../context/userContext";
import contentModalName from "./contentModalName.js";

export default function ContentModal({ closeModal }) {
  const { signIn } = useContext(userContext);

  const [inputModal, setInputModal] = useState("");
  console.log(inputModal);

  const handleButton = async () => {
      console.log("AQUI");
    const status = await signIn(inputModal); 
    console.log(status);
    if(status !== "logado"){
        console.error("ID NÃO EXISTE")
    }
    closeModal();
  }

  const handleButtonRegister = () =>{
    closeModal();

  }
  //  const [inputModal, setInputModal] = useState("");
  return (
    <div>
      <div className="boxTitle">Digite o id do usuário</div>
      <div className="boxContent">
        <input
          id="outlined-basic"
          value={inputModal}
          onChange={(event) => setInputModal(event.target.value)}
          style={{ width: "100%" }}
        />
        <button className="buttonStyle" onClick={handleButton}>
          Logar
        </button>
R        <button className="buttonStyle" oegisternclick={handleButtonRegister}>
          Cadastrar
        </button>
      </div>

    </div>
  );
}
