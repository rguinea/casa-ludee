import * as React from 'react';
import Slider from 'react-slick';

import Airbnb from '../../components/Airbnb'
import Amenities from '../../components/Amenities'
import Cuadrant from '../../components/Cuandrant'
import Header from '../../components/Header'
import Information from '../../components/Information'
import Photos from '../../components/Photos'
import SanMiguelArea from '../../components/SanMiguelArea'
import ShareMoments from '../../components/ShareMoments'
import Stats from '../../components/Stats'
import cuarto from '../../images/cuarto.jpg';
import prev from '../../images/left-arrow.svg';
import patio from '../../images/patio.jpg';
import next from '../../images/right-arrow.svg';
import sala from '../../images/sala.jpg';
import { AppContainer, Image } from './App.styled';


class App extends React.Component {
  public render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <Image src={next} />,
      prevArrow: <Image src={prev} />,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <AppContainer id="home">
        <Header />
        <Slider {...settings}>
          <Cuadrant backgroundImage={patio} />
          <Cuadrant backgroundImage={sala} />
          <Cuadrant backgroundImage={cuarto} />
        </Slider>
        <Information id="information" />
        <Photos />
        <Stats house={1} guests={10} rooms={4} beds={6} />
        <Amenities id="services" />
        <Cuadrant backgroundImage={patio} isDouble={true} >
          <ShareMoments />
        </Cuadrant>
        <SanMiguelArea id="location" />
        <Airbnb id="airbnb" />
      </AppContainer>
    );
  }
}

export default App;
