import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { ArrowButton, Image, Slider, Title } from './Photos.styled'

import prev from '../../images/left-arrow.svg';
import next from '../../images/right-arrow.svg';


const Photos: React.FC = (): JSX.Element => {
  const images: string[] = [];
  for (let i = 1; i <= 27; i++) {
    images.push(require(`../../images/unnamed-${i}.jpg`))
  }
  const slidesToShow = isMobile ? 1 : 3;
  const centerPadding = isMobile ? '0px' : '60px';
  const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding,
    className: 'center variable-width',
    customPaging: (index: number) => (
      <img src={images[index]} width='100px' />
    ),
    dots: !isMobile,
    infinite: true,
    nextArrow: <ArrowButton><Image src={next} /></ArrowButton>,
    prevArrow: <ArrowButton><Image src={prev} /></ArrowButton>,
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
