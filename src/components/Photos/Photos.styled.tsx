import Slick from 'react-slick';
import styled from 'styled-components';

export const Slider = styled(Slick)`
  .slick-slide img {
    transition: all 0.4s ease-out;
    max-height: 19vw!important;
    @media all and (max-width: 768px) {
      max-height: 50vh!important;
    }
  }
  
  .slick-slide {
    max-height: 19vw!important;
    @media all and (max-width: 768px) {
      max-height: 50vh!important;
    }
  }
  
  .slick-center img {
    transition: all .5s ease-in-out;
    transform: scale(1.25);
  }
  
  .slick-list {
    overflow: visible;
    
    @media all and (max-width: 768px) {
      overflow: hidden;
    }
  }
  
  .slick-dots {
    position: relative;
    margin-top: 50px;
  }

  
  .slick-dots li {
    width: auto;
    margin-top: 20px;
    >img {
      filter: grayscale(100%);
      max-height: 66px;
    }
  }
  .slick-dots li.slick-active {
    >img {
      filter: grayscale(0%);
    }
  }
`;

export const Title = styled.h1`
	font-family: Gotham;
	font-weight: bold;
	letter-spacing: 19.7px;
	text-align: center;
	color: #e1e1e1;
	text-transform: uppercase;
  font-size: 4vw;
  margin: 36px;
  margin-top: 20vh;
  @media all and (max-width: 768px) {
	  font-size: 25.8px;
  }
`;

export const ArrowButton = styled.div`
  top: 10vw;
  width: 50px;
  height: 50px;
  margin: 0 50px;
  border-radius: 50%;
  background-color: rgba(140, 33, 18, 0.8)!important;
  @media all and (max-width: 768px) {
    margin: 0 75px;
    top: 25vh;
  }
`;

export const Image = styled.img`
  width: 20px;
  padding: 15px;
`;
