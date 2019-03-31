import styled from 'styled-components';

export const Title = styled.p`
	font-family: Gotham;
	font-size: 82.4px;
	font-weight: bold;
	text-align: right;
	color: rgba(255, 255, 255, 0.43);
	text-transform: uppercase;
  @media all and (max-width: 768px) {
    font-size: 20px;
    max-width: 100vw;
  }
`;

export const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  text-align: right;
  flex-flow: row wrap;
  align-items: center;
`;

export const Text = styled.p`
  margin-left: 30vw;
  max-width: 30vw;
  font-family: Colaborate;
  font-size: 29.6px;
  font-weight: 300;
  text-align: right;
  color: #ffffff;
  @media all and (max-width: 768px) {
    font-size: 23px;
    max-width: 100vw;
  }
`;


export const PolaroidContainer = styled.div`
  width: 19vw;
  @media all and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;
    width: 100vw;
    margin-bottom: 6vw;
  }
`;

export const TextContainer = styled.span`
  width: 50vw;
  margin-right: 10vw;
  @media all and (max-width: 768px) {
    width: 85vw;
  }
`;

export const Image = styled.img<{tilt: number | undefined}>`
  height: 25vh;
  width: 27vh;
  border-width: 1vh 1vh 4vh 1vh;
  border-style: solid solid solid solid;
  border-color:#ffffff #ffffff #ffffff #ffffff;
  transform: rotate(${({tilt}) => tilt}deg);
  @media all and (max-width: 768px) {
    height: 8vh;
    width: 10vh;
  }
`;
