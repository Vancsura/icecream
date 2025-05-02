import React from 'react';
import { Carousel } from 'react-bootstrap';
import baja2 from '../css/img/baja (3).jpg'
import baja3 from '../css/img/baja (2).jpg'
import baja4 from '../css/img/baja (5).jpg'

const BajaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={baja4}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={baja2}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={baja3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BajaCarousel;
