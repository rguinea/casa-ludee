import styled from 'styled-components';

export const Text = styled.h1<{color: string}>`
	font-family: Oswald;
	font-size: 40px;
  margin-top: -54px;
	text-align: center;
	color: ${({color}) => color};
  text-transform: uppercase;
  /* mobile phone */
  @media all and (max-width: 768px) {
    font-size: 30px;
    margin-top: -34px;
  }
`;

export const CursiveText = styled.h1`
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
