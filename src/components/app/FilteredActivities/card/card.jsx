/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';
import tag_image from '../../../../assets/family_tag.png';
import Unauthorized from '../../../Modales/Unauthorized';
import sports from '../../../../datas/sports';

function Card({
  title, sportID, family_tag, id, locationName, locationDepartment,
}) {
  const userId = localStorage.getItem('userId');
  const selectedSport = sports.find((sport) => sport.id === sportID);
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line no-console
  return (

    <div className="card">
      {open && <Unauthorized open={open} setOpen={setOpen} />}
      <img className="card-bg" src={`${selectedSport.bg}`} alt="" />
      <div className="card-bk" style={{ background: `${selectedSport.color}88` }} />
      <div className="card-logo">
        <img src={`${selectedSport.image_color}`} alt="" />
      </div>
      <div className="card-family">
        {family_tag ? <img src={tag_image} alt="" />
          : ''}
      </div>
      {/* <div className="family_tag1" style={{ color: `${color}` }}>SORTIE</div>
      <div className="family_tag2" style={{ color: `${color}` }}>FAMILLE</div> */}
      <div className="card-description">
        <p>{title}</p>
      </div>
      <div className="card-location">
        <p>{locationName}</p>
        <p>{locationDepartment}</p>
      </div>
      {userId ? <NavLink to={`/activity/${id}`} className="card-btn" style={{ color: `${selectedSport.color}` }}>En savoir plus</NavLink>
        // eslint-disable-next-line react/button-has-type
        : <button className="card-btn" style={{ color: `${selectedSport.color}` }} onClick={() => setOpen(true)}>En savoir plus</button>}

      {' '}
    </div>

  );
}

Card.propTypes = {
  title: Proptypes.string.isRequired,
  sportID: Proptypes.number.isRequired,
  family_tag: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired,
  locationName: Proptypes.string,
  locationDepartment: Proptypes.string,
};

Card.defaultProps = {
  locationName: '',
  locationDepartment: '',
};

export default Card;
