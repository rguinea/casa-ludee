import Slick from 'react-slick';
import styled from 'styled-components';

export const Slider = styled(Slick)`
   
  .slick-track {
    padding: 0px 60px;
  }
  
  .slick-slide img {
    transition: all 0.4s ease-out;
  }
  
  .slick-center img {
    transition: all .5s ease-in-out;
    transform: scale(1.25);
  }
  
  .slick-dots {
    bottom: -80px;
  }
  
  .slick-dots li {
    width: auto;
    margin-top: 20px;
    >img {
      filter: grayscale(100%);
    }
  }
`;
