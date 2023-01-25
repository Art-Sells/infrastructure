import '../../css/components/Modal.css';

import React, {useState} from 'react';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }
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