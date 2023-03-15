import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import Card from '../../FilteredActivities/card/card';

import './style.scss';

function ActivitiesList({ loggedUser: { activitiesList } }) {
  return (
    <div className="ActivitiesList">
      <div className="ActivitiesList__div--titleAndButton">
        <h2 className="ActivitiesList__title">Liste des activités créées</h2>
        <button type="button" className="ActivitiesList__button">
          {' '}
          <NavLink
            to="/activity"
            className="ActivitiesList__button"
          >
            🖊 créer une nouvelle activité
          </NavLink>
        </button>
      </div>
      <div className="ActivitiesList__card">
        {activitiesList
          ? activitiesList.map((activity) => (
            <Card
              key={activity.id}
              id={activity.id}
              title={activity.title}
              note={activity.note}
              description={activity.description}
              photo={activity.photo}
              family_tag={activity.family_tag}
              user_id={activity.user_id}
              user_firstname={activity.user_firstname}
              sportID={activity.sportID}
              sportName={activity.sportName}
              location_id={activity.location_id}
              locationName={activity.locationName}
              locationPostcode={activity.locationPostcode}
              locationDepartment={activity.locationDepartment}
            />
          ))
          : <p>Vous n&apos;avez pas encore créé d&apos;activité</p>}
      </div>
    </div>
  );
}

ActivitiesList.propTypes = {
  loggedUser: PropTypes.shape({
    activitiesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        note: PropTypes.string,
        description: PropTypes.string,
        photo: PropTypes.string,
        family_tag: PropTypes.bool,
        user_id: PropTypes.number,
        user_firstname: PropTypes.string,
        sportID: PropTypes.number,
        sportName: PropTypes.string,
        location_id: PropTypes.number,
        locationName: PropTypes.string,
        locationPostcode: PropTypes.string,
        locationDepartment: PropTypes.string,
      }),
    ),
  }),
};

ActivitiesList.defaultProps = {
  loggedUser: {
    activitiesList: [],
  },
};

export default ActivitiesList;
