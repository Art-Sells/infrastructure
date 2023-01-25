import '../../css/components/Modal.css';

import React, {useState} from 'react';
const Modal = ({isOpen, toggle}) => {
  return (
    <div id="Modal-Container">
        {isOpen && (
        <div id="Modal-Content">
            <p id="Modal-Words"> Testing</p>
            <p id="Modal-Close" onClick={handleClose}>Ok</p>
        </div>
        )}
    </div>
    
  );
}

export default Modal;