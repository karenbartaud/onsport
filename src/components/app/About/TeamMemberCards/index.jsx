/* eslint-disable import/no-unresolved */
import React from 'react';
import { Card } from 'semantic-ui-react';

import olivier from '../../../../assets/1.png';
import ronald from '../../../../assets/2.png';
import hugo from '../../../../assets/3.png';
import karen from '../../../../assets/4.png';
import ramazan from '../../../../assets/5.png';

import './style.scss';

function TeamMemberCards() {
  return (
    <Card.Group className="Cards__group" centered stackable>
      <Card
        image={karen}
        header="Karen Bartaud"
        meta="Lead Dev Front - Product Owner"
      />
      <Card
        image={hugo}
        header="Hugo Ganet"
        meta="Git Master"
      />
      <Card
        image={ramazan}
        header="Ramazan Cinar"
        meta="Référent Technique"
      />
      <Card
        image={olivier}
        header="Olivier Vinot"
        meta="Scrum Master"
      />
      <Card
        image={ronald}
        header="Ronald Fonlebeck"
        meta="Lead Dev Back"
      />
    </Card.Group>
  );
}

export default TeamMemberCards;
