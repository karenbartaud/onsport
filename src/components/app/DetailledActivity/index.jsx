/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import {
  Rating, Label, Segment, Grid,
} from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';
import Carousel from './Carrousel/index';
import Comments from './Comments/index';

import defaultProfilePicture from '../../../assets/Tac-raoul-2.png';
import Filtered from '../FilteredActivities';

import './style.scss';

function DetailledActivity() {
  const activity = useParams();
  const [activityInfo, setActivityInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [ListActivities, setListActivities] = useState([]);
  const [ListActivitiesDpt, setListActivitiesDpt] = useState([]);
  const [ListActivitiesSport, setListActivitiesSport] = useState([]);
  const [user, setUser] = useState([]);
  const activityId = activity.id;
  const location = useLocation();
  const token = localStorage.getItem('token');

  React.useEffect(
    () => {
      window.scrollTo(0, 0);

      axios.get(`http://localhost:3500/api/activity/${activityId}`, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(
        (response) => { setActivityInfo(response.data); },
      ).catch((error) => {
        console(error);
      });


      axios.get(`http://localhost:3500/api/comment/activity/${activityId}`, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(
        (response) => setComments(response.data),
      ).catch((error) => {
        console(error);
      });

      axios.get('http://localhost:3500/api/activity', {

        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      }).then(
        (response) => { setListActivities(response.data); },
      ).catch((error) => {
        console(error);
      });
    },
    [location],
  );

  React.useEffect(() => {
    const filterDepartment = ListActivities.filter((loc) => loc.locationDepartment === activityInfo.locationDepartment);
    setListActivitiesDpt(filterDepartment);
    const filterSport = ListActivities.filter((sport) => sport.sportName === activityInfo.sportName);
    setListActivitiesSport(filterSport);
  }, [ListActivities, activityInfo]);

  React.useEffect(() => {

    axios.get(`http://localhost:3500/api/user/profil/${activityInfo.user_id}`, {

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => { setUser(response.data); },
    ).catch((error) => {
      console(error);
    });
  }, [activityInfo]);

  const note = Math.round(activityInfo.note);

  return (
    <>
      <Header />
      <div className="activity__content">
        {activityInfo.photos ? <Carousel photos={activityInfo.photos} /> : ''}

        <div className="animate__animated animate__fadeIn">
          <Grid.Column>
            <Segment raised>
              <Label as="a" color="blue" ribbon>
                <Rating icon="star" defaultRating={0} maxRating={5} rating={note} disabled size="large" />
              </Label>
              <span className="activity__title">{activityInfo.title}</span>

            </Segment>
          </Grid.Column>
        </div>
        <div />

        <div className="activity__author">
          <span className="proposed">Activité proposée par</span>

          <img alt="profile" className="photo_profile" width="50" height="50" src={user.photo ? `http://localhost:3500/api/user/profil/${user.id}/photo/${user.photo}` : defaultProfilePicture} />

          <span className="author">
            {user.firstname}
            {' '}
            {user.lastname}
          </span>
        </div>

        <div className="activity__description">
          <div className="activity__description__detail">
            <p>{activityInfo.description}</p>
          </div>
          <div className="activity__description__comments">
            <Comments comments={comments} activityId={activityId} />
          </div>
        </div>
      </div>

      <div className="filteredActivities">
        <span className="filteredActivities__title__dpt">AUTRES ACTIVITÉS AYANT LIEU DANS LE MÊME DÉPARTEMENT</span>
        <Filtered ListActivities={ListActivitiesDpt} />
        <span className="filteredActivities__title__sport">AUTRES ACTIVITÉS RELATIVES AU MÊME SPORT</span>
        <Filtered ListActivities={ListActivitiesSport} />
      </div>

      <Footer />
    </>
  );
}

export default DetailledActivity;
