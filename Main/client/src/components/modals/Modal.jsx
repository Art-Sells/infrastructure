import React from 'react';
const Modal = () => {
  return (
    <div id="Modal-Container">
        <div id="Modal-Content">
            <p id="Modal-Words"></p>
            <p id="Close" onClick={handleClose}>Ok</p>
        </div>
    </div>
    
  );
}