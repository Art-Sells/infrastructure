import '../../css/components/Modal.css';

import React, {useState} from 'react';

const Modal = ({closeModal}) => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // }
  return (
    <div id="Modal-Container">
        <div id="Modal-Content">
            <p> Testing</p>
            <p id="Modal-Close" onClick={() => closeModal(false)}>Ok</p>
        </div>
    </div>
    
  );
}

export default Modal;