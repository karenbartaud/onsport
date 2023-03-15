import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Button, Input, Modal,
} from 'semantic-ui-react';

function SignupModal({ toggleSignupModal, isShowSignupModal, setOpen }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios({
      method: 'post',
      url: 'https://ronaldfk-server.eddi.cloud:8443/api/auth/signup',
      headers: {
        headers,
      },
      data: {
        firstname: firstName,
        lastname: lastName,
        email,
        login: username,
        password,
      },
    });
    // eslint-disable-next-line no-console
    console.log(`SignupModal: ${response}`);
    toggleSignupModal(false);
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => toggleSignupModal(false)}
      onOpen={() => toggleSignupModal(true)}
      open={isShowSignupModal}
    >
      <Modal.Header>Créer un compte</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Input
            placeholder="Prénom"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Input
            placeholder="Nom"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <Input
            placeholder="Adresse email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Nom d'utilisateur"
            type="text"
            id="username"
            name="username"
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
          <Input
            placeholder="Confirmer le mot de passe"
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
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
    </Modal>
  );
}

SignupModal.propTypes = {
  toggleSignupModal: PropTypes.func.isRequired,
  isShowSignupModal: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SignupModal;
