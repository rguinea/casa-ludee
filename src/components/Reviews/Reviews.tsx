import * as React from 'react';
import { isMobile } from 'react-device-detect';
import Slider from 'react-slick';

import logo from '../../images/logo.png';
import review0 from '../../images/review-0.png';
import DoubleText from '../DoubleText';

import { BlackText, FiveStars, Foto, Image, Quote, ReviewContainer, Text } from './Reviews.styled';
import { IPropTypes } from './Reviews.types';

const Reviews: React.FC<IPropTypes> = (props): JSX.Element => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <>
      <DoubleText id={props.id} cursiveText='Impecable y única' text='Evaluaciones' color='#e35000' />
      <Image src={logo} />
      { !isMobile && <Quote>“</Quote> }
      { !isMobile && <Slider {...settings}>
        <ReviewContainer>
          <Foto src={review0}/>
          <Text>La casa esta muy bonita, es rústica pero muy acogedora, tiene lo necesario para tu estancia, ideal para
            familias o grupos grandes.Lorena y Rodrigo son muy atentos y siempre están al pendiente de todo.Fue una muy
            buena experiencia y sin duda nos volveremos a hospedar con ellos en las próximas ocasiones.</Text>
          <BlackText>Cony</BlackText>
          <BlackText>Junio 2018</BlackText>
          <FiveStars/>
        </ReviewContainer>
      </Slider>
      }
      { !isMobile && <Quote>”</Quote> }
    </>
  )
};

export default Reviews;
