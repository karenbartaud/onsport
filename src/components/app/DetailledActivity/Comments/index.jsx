/* eslint-disable radix */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Form, Button, Comment, Header, Rating,
} from 'semantic-ui-react';
import Annotation from './Comment';

function Comments({ comments, activityId }) {
  const userId = localStorage.getItem('userId');
  const [rate, setRate] = React.useState('');
  const token = localStorage.getItem('token');

  const handleRate = (e, { rating }) => { setRate(rating); };

  const handleClick = async (e) => {
    const content = e.target.parentNode[0].value;
    const user_id = parseInt(userId);
    const activity_note = parseInt(rate);
    const activity_id = parseInt(activityId);

    try {
      const response = await axios.post(
        `http://localhost:3500/api/comment/activity/${activityId}`,
        {
          content,
          user_id,
          activity_note,
          activity_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="activity__comments">

      <Comment.Group>
        <Header as="h3" dividing>
          Commentaires
        </Header>

        {
       // eslint-disable-next-line react/jsx-props-no-spreading
       comments.map((comm) => <Annotation key={comm.id} {...comm} />)
      }

        <Form reply className="activity__add__comment">
          <Form.TextArea placeholder="Ajouter un commentaire" />
          <Rating maxRating={5} clearable onRate={handleRate.bind(this)} />
          <Button content="Commenter" labelPosition="right" icon="send" onClick={handleClick} />
        </Form>
      </Comment.Group>
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      activity_note: PropTypes.number,
      user_id: PropTypes.number,
      activity_id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  activityId: PropTypes.string.isRequired,
};

export default Comments;
