import React from 'react'
import ReactModal from 'react-modal'
import "./Modal.css";

export default function Modal({ showModal, closeModal, content }) {
  return (
    <ReactModal 
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      className="modal_content"
      overlayClassName="modal_overlay"
    >
      {content}
    </ReactModal >
  )
}

