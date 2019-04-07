import * as React from 'react';
import Slider from 'react-slick';

import logo from '../../images/logo.png';
import review0 from '../../images/review-0.png';
import star from '../../images/star.svg';
import DoubleText from '../DoubleText';

import { BlackText, Container, FiveStars, Foto, Image, QuoteContainer, ReviewContainer, Star, Text } from './Reviews.styled';
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
    <Container>
      <DoubleText id={props.id} cursiveText='Impecable y única' text='Evaluaciones' color='#e35000' />
      <Image src={logo} />
      <Slider {...settings}>
        <ReviewContainer>
          <Foto src={review0}/>
          <QuoteContainer>
            <Text>
              La casa esta muy bonita, es rústica pero muy acogedora, tiene lo necesario para tu estancia, ideal para
              familias o grupos grandes.Lorena y Rodrigo son muy atentos y siempre están al pendiente de todo.Fue una muy
              buena experiencia y sin duda nos volveremos a hospedar con ellos en las próximas ocasiones.
            </Text>
          </QuoteContainer>
          <BlackText>Cony</BlackText>
          <BlackText>Junio 2018</BlackText>
          <FiveStars>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
          </FiveStars>
        </ReviewContainer>
      </Slider>
    </Container>
  )
};

export default Reviews;
