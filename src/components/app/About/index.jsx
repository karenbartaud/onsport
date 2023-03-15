/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import {
  Grid, Segment, Label,
} from 'semantic-ui-react';
import Header from '../Header';
import Footer from '../Footer';

import TeamMemberCards from './TeamMemberCards';

import './style.scss';

function About() {
  return (
    <>
      <Header />
      <Grid.Column>
        <Segment raised>
          <Label size="massive" as="a" ribbon>
            Présentation du projet
          </Label>
          <span className="projet__description">
            {' '}
            Notre application est un site communautaire permettant le partage d'expériences
            sportives. Notre site met en relation des sportifs du monde entier pour partager
            leurs bonnes adresses et leurs bons plans lorsqu'ils voyagent en France.
            Nous souhaitons répondre au besoin du sportif qui part en vacances et qui
            souhaite continuer à pratiquer des activités sportives. L'application permettra à
            un utilisateur de découvrir des activités dans la zone géographique où il se
            rendra grâce au partage d'expériences des autres utilisateurs.

          </span>

        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised>
          <Label size="massive" as="a" ribbon>
            À propos de nous
          </Label>
          <span className="projet__description">
            {' '}
            Nous sommes une équipe de cinq développeurs passionnés par la création de solutions
            informatiques innovantes. Nous avons travaillé ensemble sur notre projet de fin de
            formation et avons combiné nos compétences pour le mener à bien.
            Notre équipe est composée de trois développeurs front-end, qui se concentrent sur la
            création d'interfaces utilisateur élégantes et fonctionnelles, ainsi que de deux
            développeurs back-end, qui se chargent de la logique de traitement des données
            et de la gestion des serveurs. Nous sommes fiers de notre approche collaborative. Nous sommes toujours à la
            recherche de nouveaux défis pour nous pousser à aller plus loin et améliorer constamment
            notre savoir-faire. N'hésitez pas à nous contacter pour discuter de votre prochain
            projet informatique!

          </span>

        </Segment>
      </Grid.Column>

      <TeamMemberCards />

      <Footer />
    </>
  );
}

export default About;
