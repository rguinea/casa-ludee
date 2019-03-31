import styled from 'styled-components';

export const BlueBackground = styled.div`
  height: calc(100vw*3/5);
  max-height: 95vh;
  background: rgba(118,201,249,1);
  padding: 0 32vw;
  @media all and (max-width: 768px) {
    padding: 0;
    height: 80vh;
  }
`;

export const Image = styled.div<{background: string | undefined}>`
  height: calc(100vw*2/3);
  max-height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, rgba(118,201,249,1) 0%, rgba(118,201,249,0) 20%, rgba(255,255,255,0) 90%, rgba(255,255,255,1) 100%), url("${({ background }) => background || '#FFF'}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
`;

export const Text = styled.p`
	font-family: SourceSansPro;
	font-size: 20px;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: justify;
	color: #ffffff;
	margin: 0 0 5vh 0;
  @media all and (max-width: 768px) {
	  font-size: 16px;
	  padding: 5px;
	  margin-bottom: 1vh;
  }
`;

export const Title = styled.p`
	font-family: Ailerons;
	font-size: 48px;
	text-align: right;
	color: #ffffff
	padding: 10vh 0 3vh 0;
	margin: 0;
  margin-bottom: 10vh;
  border-bottom: 2px solid #D97525;
  @media all and (max-width: 768px) {
	  font-size: 22px;
    margin-bottom: 2vh;
  }
`;
