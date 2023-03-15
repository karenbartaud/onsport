import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.scss';

import {
  Button, Input, Modal, Message,
} from 'semantic-ui-react';

function LoginModal({ toggleLoginModal, isShowLoginModal, setOpen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://ronaldfk-server.eddi.cloud:8443/api/auth/signin',
          headers: {
            headers,
          },
          data: {
            login: username,
            password,
          },
        });

        console.log(`connexion réussie - token enregistré : ${response.data.tokenUser.token}- userId enregistré : ${response.data.id}`);
        localStorage.setItem('token', response.data.tokenUser.token);
        localStorage.setItem('userId', response.data.id);
        window.location.reload();
        toggleLoginModal(false);
        setOpen(false);
      } catch (error) {
        setErrorMessage('Login ou mot de passe incorrect');
      }
    };
    fetchData();
  };

  return (
    <Modal
      onClose={() => toggleLoginModal(false)}
      onOpen={() => toggleLoginModal(true)}
      open={isShowLoginModal}
    >
      <Modal.Header>Connexion</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Input
            placeholder="Nom d'utilisateur"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          type="submit"
          content="Valider"
          labelPosition="right"
          icon="checkmark"
          positive
          onClick={handleSubmit}
        />
      </Modal.Actions>
      {errorMessage && (
      <Message attached negative className="create__activity__errorMessage">
        <Message.Item>{errorMessage}</Message.Item>
      </Message>
      )}
    </Modal>
  );
}

LoginModal.propTypes = {
  toggleLoginModal: PropTypes.func.isRequired,
  isShowLoginModal: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default LoginModal;
