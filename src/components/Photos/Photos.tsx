import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { Slider, Title } from './Photos.styled'

import cuarto from '../../images/cuarto.jpg';
import patio from '../../images/patio.jpg';
import sala from '../../images/sala.jpg';

const Photos: React.FC = (): JSX.Element => {
  const images = [cuarto, patio, sala, cuarto, patio, sala];
  const slidesToShow = isMobile ? 1 : 3;
  const centerPadding = isMobile ? '0px' : '60px';
  const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding,
    className: 'center',
    customPaging: (index: number) => (
      <img src={images[index]} width='100px' />
    ),
    dots: !isMobile,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow,
    speed: 500,
  };
  return (
    <>
      <Title>Bienvenido a casa</Title>
      <Slider {...settings}>
        { images.map((image: string, key: number) => <img src={image} key={`${key}-${image}`} />) }
      </Slider>
    </>
  )
};

export default Photos;
