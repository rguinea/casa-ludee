import styled from 'styled-components';

export const Text = styled.div`
	font-family: SourceSansPro;
	font-size: 20px;
	font-weight: bold;
	line-height: 1.5;
	text-align: center;
	color: #959595;
`;

export const Title = styled.h4`
	font-family: thornsDemo-Regular;
	font-size: 60.8px;
	font-weight: 900;
	text-align: center;
	color: rgba(144, 144, 144, 0.43);
  @media all and (max-width: 768px) {
	  font-size: 24px;
  }
`;

export const Logo = styled.img`
	width: 20vw;
	margin-top: 10vh;
  @media all and (max-width: 768px) {
    width: 50vw;
  }
`;

export const MoreInfo = styled.p`
	font-family: SourceSansPro;
	font-size: 20px;
	line-height: 1.5;
	letter-spacing: 0.6px;
  text-align: center;
  color: #171717;
  width: 49vw;
  margin: auto;
  margin-bottom: 10vh;
  @media all and (max-width: 768px) {
	  font-size: 12px;
    width: 90%;
    margin-bottom: 2vh;
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 70vw;
  border-width: 0px 2px 0px 2px;
  border-style: solid solid solid solid;
  border-color: #11159a #11159a #11159a #11159a;
  @media all and (max-width: 768px) {
    width: 95vw;
    padding-bottom: 5vh;
    border-width: 0px 0px 0px 0px;
  }
`;

export const AirbnbIFrame = styled.div`
  width: 450px;
  height: 300px;
  margin: auto;
  @media all and (max-width: 768px) {
    transform: scale(0.7) translateX(-20vw) translateY(-15vh);
  }
`;

export const Button = styled.a`
	font-family: SourceSansPro;
	font-size: 30px;
	font-weight: bold;
	line-height: 1.5;
	letter-spacing: 3px;
	text-align: justify;
	color: #11159a;
	border: solid 3px #11159a;
  border-radius: 30px;
  text-decoration: none;
  padding: 0 30px;
`;

export const ButtonContainer = styled.div`
  margin-top: 5vh;
`;
