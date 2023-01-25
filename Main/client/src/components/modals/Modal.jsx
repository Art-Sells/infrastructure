import '../../css/components/Modal.css';

import React, {useState} from 'react';
const [modalOpen, setModalOpen] = useState(false);
export const toggleModal = () => {
  setModalOpen(!modalOpen);
}
const Modal = () => {
  return (
    <div id="Modal-Container">
        {modalOpen && (
        <div id="Modal-Content">
            <p id="Modal-Words"> Testing</p>
            <p id="Modal-Close" onClick={toggleModal}>Ok</p>
        </div>
        )}
    </div>
    
  );
}

export default Modal;