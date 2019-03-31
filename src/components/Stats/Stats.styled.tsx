import styled from 'styled-components';

export const FlexItem = styled.div`
`;

export const FlexContainer = styled.div`
  display: flex;
	justify-content: space-around;
  margin: 100px 100px 0;
  align-items: center;
  flex-flow: row wrap;
  margin-top: 170px;
  /* mobile phone */
  @media all and (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const NumberText = styled.p`
	font-family: 'Source Sans Pro';
	font-size: 95px;
	font-weight: bold;
	letter-spacing: 1.9px;
	text-align: center;
	color: #da7324;
	margin: 0;
`;

export const Text = styled.p`
	font-family: Colaborate;
	font-size: 16.7px;
	font-weight: 300;
	letter-spacing: 5px;
	text-align: center;
	color: #11159a;
	text-transform: uppercase;
`;

export const Divider = styled.span`
  height: 218px;
  width: 1px;
  box-shadow: 2px 2px 2px;
  border-radius: 1px;
  /* mobile phone */
  @media all and (max-width: 768px) {
    display: none;
  }
`;

export const BlueText = styled.p`
	font-family: Oswald;
	font-size: 40px;
  margin-top: -50px;
	text-align: center;
	color: #11159a;
  text-transform: uppercase;
  /* mobile phone */
  @media all and (max-width: 768px) {
    font-size: 30px;
    margin-top: -34px;
  }
`;

export const CursiveText = styled.p`
  margin: 0;
	font-family: Allura;
	font-size: 94.3px;
	text-align: center;
	color: #e0dfdf;
  /* mobile phone */
  @media all and (max-width: 768px) {
    font-size: 50px;
  }
`;
