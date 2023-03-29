import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';
import {
  Button, Input, Modal, Message,
} from 'semantic-ui-react';
import carefull from '../../../assets/carefull.png';
function SignupModal({ toggleSignupModal, isShowSignupModal, setOpen }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
          url: 'http://localhost:3500/api/auth/signup',
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

        console.log(`SignupModal: ${response}`);
        toggleSignupModal(false);
        setOpen(false);
      } catch (error) {
        Object.keys(error).forEach(key => {
          console.log(key, error[key]);
        });

        setErrorMessage(JSON.parse(error.request.response));
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      }
    };
    fetchData();
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
      {errorMessage && (
      <Message negative>
      <img src={carefull} width="80px" alt="carefull" />
        <Message.Header>{errorMessage}</Message.Header>
      </Message>
      )}
    </Modal>
  );
}

SignupModal.propTypes = {
  toggleSignupModal: PropTypes.func.isRequired,
  isShowSignupModal: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SignupModal;
