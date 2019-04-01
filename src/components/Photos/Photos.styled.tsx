import Slick from 'react-slick';
import styled from 'styled-components';

export const Slider = styled(Slick)`
  .slick-slide img {
    transition: all 0.4s ease-out;
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
    bottom: -80px;
    margin-bottom: -40px;
  }
  
  .slick-dots li {
    width: auto;
    margin-top: 20px;
    >img {
      filter: grayscale(100%);
    }
  }
  .slick-dots li.slick-active {
    >img {
      filter: grayscale(0%);
    }
  }
`;

export const Title = styled.h2`
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
