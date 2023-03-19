/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import './style.scss';

import { Image } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
function Carrousel({ photos }) {
  return (

    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >

      {(() => {
        const arr = [];
        // eslint-disable-next-line no-plusplus
        for (const photo of photos) {
          arr.push(
            // eslint-disable-next-line react/jsx-props-no-spreading
            <SwiperSlide key={photo.name}><Image alt="" src={`http://localhost:3306/api/activity/16/photo/${photo.name}`} /></SwiperSlide>,
          );
        }
        return arr;
      })()}

    </Swiper>

  );
}

Carrousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,

};

export default Carrousel;
