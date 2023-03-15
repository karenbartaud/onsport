/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {
 Button, Modal, Image,
} from 'semantic-ui-react';
import unlog from '../../../assets/unlog.png';
import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal';

function Unauthorized({ open, setOpen }) {
  const [isShowLoginModal, toggleLoginModal] = React.useState(false);
  const [isShowSignupModal, toggleSignupModal] = React.useState(false);

  const handleClickCreateAccount = () => {
    console.log('open SignupModal');
    toggleSignupModal(true);
    console.log(isShowSignupModal);
    console.log('close Unauthorized');
    // setOpen(false);
    console.log(isShowSignupModal);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content image>
        <Image size="medium" src={unlog} wrapped />
        <Modal.Description>
          <h1>
            Merci de créer un compte ou vous connecter pour acceder à cette page
          </h1>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={handleClickCreateAccount}>
          Je crée mon compte
        </Button>
        <Button
          content="Je me connecte"
          labelPosition="right"
          icon="checkmark"
          onClick={() => toggleLoginModal(true)}
          positive
        />
      </Modal.Actions>
      {isShowLoginModal && (
      <LoginModal
        toggleLoginModal={toggleLoginModal}
        isShowLoginModal={isShowLoginModal}
        setOpen={setOpen}
      />

)}
      {isShowSignupModal && (
        <SignupModal
          toggleSignupModal={toggleSignupModal}
          isShowSignupModal={isShowSignupModal}
          setOpen={setOpen}
        />
)}
    </Modal>

  );
}

Unauthorized.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Unauthorized;
