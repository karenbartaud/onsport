/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.scss';

import {
  Button, Input, Modal, Form,
} from 'semantic-ui-react';

function UpdateProfilModal({ toggleUpdateProfilModal, isShowUpdateProfilModal }) {
  const [bio, setBio] = useState(null);
  const [age, setAge] = useState(null);
  const [locationID, setLocationId] = useState(null);
  const [listLocation, setListLocation] = useState([]);
  const [image, setImage] = useState(null);
  const [citySearch, setCitySearch] = useState(null);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3306/api/location/');
        setListLocation(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getCitiesFromSearch = async () => {
    if (citySearch.length < 3) return;
    try {
      const response = await axios.get(`http://localhost:3306/api/location?search=${citySearch}`);
      setListLocation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      bio,
      age,
      location_id: locationID,
    };

    // eslint-disable-next-line no-unused-vars
    const truthyFields = Object.entries(updatedData).filter(([key, value]) => value);
    const filteredData = Object.fromEntries(truthyFields);

    const form = new FormData();
    form.append('jsonAsString', JSON.stringify(filteredData));
    if (image) {
      form.append('photo', image);
    }

    try {
      console.log('form', form);

      const response = await axios({
        method: 'PATCH',
        url: `http://localhost:3306/api/user/profil/${userId}`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        data: form,
      });
      // eslint-disable-next-line no-console
      console.log('response', response.data);
    } catch (error) {
      console.log('error', error);
    }
    toggleUpdateProfilModal(false);
  };

  return (
    <Modal
      onClose={() => toggleUpdateProfilModal(false)}
      onOpen={() => toggleUpdateProfilModal(true)}
      open={isShowUpdateProfilModal}
    >
      <Modal.Header className="UpdateProfilModal__title">Modifier les informations de mon profil</Modal.Header>
      <Modal.Content className="UpdateProfilModal__content">
        <Modal.Description>
          <Input
            placeholder="Ajouter une bio"
            className="UpdateProfilModal__form--input--bio"
            type="text"
            id="bio"
            name="bio"
            value={bio || ''}
            onChange={(event) => setBio(event.target.value)}
          />
          <Input
            placeholder="Date de naissance"
            className="UpdateProfilModal__form--input"
            type="date"
            id="age"
            name="age"
            value={age || ''}
            onChange={(event) => setAge(event.target.value)}
          />
          <Form.Input
            placeholder="Entrer une ville"
            type="search"
            icon="search"
            onKeyUp={getCitiesFromSearch}
            onChange={(e) => setCitySearch(e.target.value)}
            value={citySearch || ''}
            className="autocomplete__input"
          />
          <ul className="autocomplete__ul">
            {/* liste des villes qui vont s'afficher */}
            {
                listLocation[0] && listLocation.map((location) => (
                  <li
                    data-id={location.id}
                    className="autocomplete__li"
                    key={location.id}
                    onClick={() => {
                      setCitySearch(location.name);
                      setLocationId(location.id);
                      setListLocation([]);
                    }}
                  >
                    {location.name}
                  </li>
                ))
            }
          </ul>
          <Form.Input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={(e) => setImage(e.target.files[0])}
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

UpdateProfilModal.propTypes = {
  toggleUpdateProfilModal: PropTypes.func.isRequired,
  isShowUpdateProfilModal: PropTypes.bool.isRequired,
};

export default UpdateProfilModal;
