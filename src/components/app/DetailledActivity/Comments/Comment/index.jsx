import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Rating, Comment,
} from 'semantic-ui-react';
import './style.scss';
import defaultProfilePicture from '../../../../../assets/Tac-raoul-2.png';

function Annotation({
  activity_note, content, user_id,
}) {
  const [userComment, setUserComment] = React.useState([]);
  const token = localStorage.getItem('token');

  React.useEffect(
    () => {
      axios.get(`http://localhost:3306/api/user/profil/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(
        (response) => { setUserComment(response.data); },
      ).catch((error) => {
        console(error);
      });
    },
    [],
  );
  return (
    <Comment>
      <Comment.Avatar src={userComment.photo ? `http://localhost:3306/api/user/profil/${user_id}/photo/${userComment.photo}` : defaultProfilePicture} />
      <Comment.Content>
        <Comment.Author as="a">
          {userComment.firstname}
          {' '}
          {userComment.lastname}
        </Comment.Author>
        <div>
          <Rating icon="star" defaultRating={activity_note} maxRating={5} size="mini" disabled />
        </div>
        <Comment.Text>{content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

Annotation.propTypes = {
  activity_note: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,

};

export default Annotation;
