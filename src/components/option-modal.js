import React from 'react';
import Modal from 'react-modal';

const OptionModal = (prop) => (
    <Modal isOpen={!!prop.selectedOption} contentLabel="Selected Option" onRequestClose={prop.clearSelected} closeTimeoutMS={200} className='modal'>
        <h3>Selected Option</h3>
        {prop.selectedOption && <p>{prop.selectedOption}</p>}
        <button onClick={prop.clearSelected}>OK</button>
    </Modal>
);

export default OptionModal;