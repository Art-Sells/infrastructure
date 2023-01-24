import React, {useState} from 'react';
const Modal = ({isOpen, toggle}) => {
  return (
    <div id="Modal-Container">
        {isOpen && (
        <div id="Modal-Content">
            <p id="Modal-Words"></p>
            <p id="Close" onClick={handleClose}>Ok</p>
        </div>
        )}
    </div>
    
  );
}

export default Modal;