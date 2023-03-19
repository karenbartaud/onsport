import React, { useState } from 'react';
import axios from 'axios';

import ProfilDetails from './ProfilDetails';
import ProfilHeader from './ProfilHeader';
import ActivitiesList from './ActivitiesList';
import Footer from '../Footer';

import './style.scss';

function ProfilPage() {
  const [UserInfos, setUserInfos] = useState({});

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    axios.get(`http://localhost:3306/api/user/profil/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setUserInfos(response.data))
      .catch((error) => {
        console(error);
      });
  }, [UserInfos]);

  return (
    <div className="ProfilPage">
      <ProfilHeader />
      <ProfilDetails loggedUser={UserInfos} />
      <ActivitiesList loggedUser={UserInfos} />
      <Footer />
    </div>
  );
}

export default ProfilPage;
