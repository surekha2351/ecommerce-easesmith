import React from 'react';
import Modal from 'react-modal';

const AddToCartModal = ({ isOpen, onRequestClose, product }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>{product.name}</h2>
    <p>Price: ₹ {product.price}</p>
    <button onClick={onRequestClose}>Confirm</button>
  </Modal>
);

export default AddToCartModal;
