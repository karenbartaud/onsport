/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Card from './card/card';

function Filtered({ ListActivities }) {
  return (
    <div className="cards">
      {
       ListActivities.map((activity) => <Card key={activity.id} {...activity} />)
      }

    </div>
  );
}

Filtered.propTypes = {
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
      locationPostcode: PropTypes.string,
      locationDepartment: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Filtered;
