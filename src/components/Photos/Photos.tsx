import * as React from 'react';
import { Slider } from './Photos.styled'

import cuarto from '../../images/cuarto.jpg';
import patio from '../../images/patio.jpg';
import sala from '../../images/sala.jpg';

const Photos: React.FC = (): JSX.Element => {
  const images = [cuarto, patio, sala, cuarto, patio, sala];
  const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '60px',
    className: 'center',
    customPaging: (index: number) => (
      <img src={images[index]} width='100px' />
    ),
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <h1>Bienvenido a casa</h1>
      <Slider {...settings}>
        { images.map((image: string, key: number) => <img src={image} key={`${key}-${image}`} />) }
      </Slider>
    </>
  )
};

export default Photos;
