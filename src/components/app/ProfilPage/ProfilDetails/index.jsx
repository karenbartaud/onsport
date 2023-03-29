import React from 'react';
import PropTypes from 'prop-types';

import defaultProfilePicture from '../../../../assets/default_profile_picture_icon.jpeg';
import location from '../../../../assets/location.png';
import age_img from '../../../../assets/age.png';

import './style.scss';

function ProfilDetails({ loggedUser }) {
  const userId = localStorage.getItem('userId');
  function calculateAge(birthdate) {
    // Split the birthdate string into day, month, and year components
    const [year, month, day] = birthdate.split('-');
    // Calculate the difference between the birth year and the current year
    const age = new Date().getFullYear() - year;
    // Check if the current month and day is before the birth month and day
    const birthdateThisYear = new Date(`${year}-${month}-${day}`);
    const now = new Date();
    if (now < birthdateThisYear) {
      // Subtract one year if the birthdate hasn't occurred yet this year
      return age - 1;
    }
    return age;
  }

  return (

    <div className="ProfilDetails">

      <div className="ProfilHeader__img--div">
        <img
          className="ProfilHeader__img"
          src={loggedUser.photo ? `http://localhost:3500/api/user/profil/${userId}/photo/${loggedUser.photo}` : defaultProfilePicture}
          alt="profilPicture"
        />
      </div>

      <div className="ProfilHeader__detail">
        <div className="profilName">
          {loggedUser.firstname}
          {' '}
          {loggedUser.lastname}
        </div>
        <p className="ProfilDetails__location">
          <div className="icone">
            <img alt="location" src={location} />
          </div>
          {/* 📍 */}
          {loggedUser.locationName}
          {' '}
          -
          {' '}
          {loggedUser.locationDepartment}
        </p>
        <p className="ProfilDetails__age">
          <div className="icone">
            <img alt="age" src={age_img} />
          </div>
          {loggedUser?.age && calculateAge(loggedUser.age)}
          {' '}
          ans
        </p>
      </div>

      <section className="ProfilDetails__bioAndPracticeSports">
        <div className="ProfilDetails__bio--div">
          <h2 className="ProfilDetails__bio--title">A propos de moi...</h2>
          <p className="ProfilDetails__bio--description">
            {loggedUser.bio}
          </p>
        </div>
      </section>
    </div>
  );
}

ProfilDetails.propTypes = {
  loggedUser: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([undefined]),
    ]),
    age: PropTypes.string,
    photo: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    location_id: PropTypes.number,
    locationName: PropTypes.string,
    locationDepartment: PropTypes.string,
    login: PropTypes.string,
    ListActivities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        note: PropTypes.number,
        description: PropTypes.string,
        photo: PropTypes.string,
        family_tag: PropTypes.bool,
        user_id: PropTypes.number,
        user_firstname: PropTypes.string,
        sportID: PropTypes.number,
        sportName: PropTypes.string,
        location_id: PropTypes.number,
        locationName: PropTypes.string,
        locationPostcode: PropTypes.number,
        locationDepartment: PropTypes.string,
      }).isRequired,
    ),
  }),
};

ProfilDetails.defaultProps = {
  loggedUser: {
    city: '',
    zip_code: '',
    address: '',
    phone_number: '',
    birthdate: '',
  },
};

export default ProfilDetails;
