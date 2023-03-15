/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import './style.scss';

import { Link } from 'react-router-dom';
import { Image, Button } from 'semantic-ui-react';
import errorImage from '../../../assets/error-image.png';
// import Header from '../Header';
// import Footer from '../Footer';

function NotFound() {
  return (
    <div className="error__div">
      <h1 className="error__title">Oups ! Il semblerait  que vous vous soyez perdu(e) dans notre site</h1>
      <Image centered src={errorImage} />
      <Link to="/">
        <Button primary size="big">
          Retourner à l'accueil
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
