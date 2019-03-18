import * as React from 'react';
import Slider from 'react-slick'

import Cuadrant from '../../components/Cuandrant'
import Information from '../../components/Information'
import Photos from '../../components/Photos'
import cuarto from '../../images/cuarto.jpg';
import patio from '../../images/patio.jpg';
import sala from '../../images/sala.jpg';
import './App.css';


class App extends React.Component {
  public render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="App">
        <Slider {...settings}>
          <Cuadrant backgroundImage={patio} />
          <Cuadrant backgroundImage={sala} />
          <Cuadrant backgroundImage={cuarto} />
        </Slider>
        <Information />
        <Photos />
      </div>
    );
  }
}

export default App;
