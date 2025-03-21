import React from 'react';
import { Carousel } from 'react-bootstrap';
import baja2 from '../css/img/baja (3).jpg'
import baja3 from '../css/img/baja (2).jpg'
import baja4 from '../css/img/baja (5).jpg'

const CsanadCarousel = () => {
  return (
    <Carousel fade style={{ width: '100%', height: '100%' }}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={baja4}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={baja2}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={baja3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CsanadCarousel;
