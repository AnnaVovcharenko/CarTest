import Modal from 'react-modal';
import PropTypes from 'prop-types';
// import React from 'react';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

export const ModalWindow = ({ isOpen, onRequestClose, largeImageURL, tags }) => {
    
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </div>
    );
  };


  ModalWindow.propTypes = {
    props: PropTypes.string,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }