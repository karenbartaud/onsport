import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Button, Modal,
} from 'semantic-ui-react';

function DisconnectionModal({ isShowDisconnectionModal, toggleDisconnectionModal }) {
  const navigate = useNavigate();
  const onConfirm = () => {
    toggleDisconnectionModal(false);
    localStorage.clear();
    navigate('/');
  };

  return (
    <Modal
      onClose={() => toggleDisconnectionModal(false)}
      onOpen={() => toggleDisconnectionModal(true)}
      open={isShowDisconnectionModal}
    >
      <Modal.Header>Souhaitez vous vous déconnecter ?</Modal.Header>
      <Modal.Actions>
        <Button color="black" onClick={() => toggleDisconnectionModal(false)}>
          Non
        </Button>
        <Button
          content="Oui"
          labelPosition="right"
          icon="checkmark"
          onClick={onConfirm}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

DisconnectionModal.propTypes = {
  isShowDisconnectionModal: PropTypes.bool.isRequired,
  toggleDisconnectionModal: PropTypes.func.isRequired,
};

export default DisconnectionModal;
