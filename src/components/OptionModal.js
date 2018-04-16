import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>(
  <Modal
  isOpen={!!props.active}
  ariaHideApp={false}
  onRequestClose={props.closeModal}
  closeTimeoutMS={200}
  contentLabel="Selected Option"
  className='modal'>
  <h3>You Should</h3>
  {props.active && <p>{props.active}</p>}
  <button onClick={props.closeModal} className='button'>Okay</button>
  </Modal>
);

export default OptionModal;