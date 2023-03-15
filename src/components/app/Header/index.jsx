import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LoginModal from '../../Modales/LoginModal';
import SignupModal from '../../Modales/SignupModal';
import DisconnectionModal from '../../Modales/DisconnectionModal';

import Logo from '../../../assets/OnSport_logo.png';
import './style.scss';

function Header() {
  const [isShowLoginModal, toggleLoginModal] = useState(false);
  const [isShowSignupModal, toggleSignupModal] = useState(false);
  const [isShowDisconnectionModal, toggleDisconnectionModal] = useState(false);
  const userId = localStorage.getItem('userId');

  return (
    <div className="Header">
      <Link to="/"><img className="Header__logo" src={Logo} alt="logo" /></Link>
      {userId ? (
        <>
          <button className="Header__button" type="button">
            {' '}
            <NavLink
              to={`/profile/${userId}`}
              className="menu-link"
            >
              Mon profil
            </NavLink>
          </button>
          <button
            className="Header__button"
            type="button"
            onClick={() => toggleDisconnectionModal(true)}
          >
            Déconnexion
          </button>
        </>
      ) : (
        <>
          <button
            className="Header__button"
            type="button"
            onClick={() => toggleLoginModal(true)}
          >
            Connexion
          </button>
          <button
            className="Header__button"
            type="button"
            onClick={() => toggleSignupModal(true)}
          >
            Créer un compte
          </button>
        </>
      )}
      {isShowDisconnectionModal && (
      <DisconnectionModal
        toggleDisconnectionModal={toggleDisconnectionModal}
        isShowDisconnectionModal={isShowDisconnectionModal}
      />
      )}
      {isShowLoginModal && (
      <LoginModal
        toggleLoginModal={toggleLoginModal}
        isShowLoginModal={isShowLoginModal}
      />
      )}
      {isShowSignupModal && (
        <SignupModal
          toggleSignupModal={toggleSignupModal}
          isShowSignupModal={isShowSignupModal}
        />
      )}
    </div>
  );
}

export default Header;
