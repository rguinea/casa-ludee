import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-content: center;
`;

export const Title = styled.h4`
	font-family: SourceSansPro;
	font-size: 27.3px;
	font-weight: bold;
	letter-spacing: 8.2px;
	text-align: justify;
	color: #da7324;
	text-transform: uppercase;
  text-align: center;
  margin-bottom: 150px;
  /* mobile phone */
  @media all and (max-width: 768px) {
    margin-bottom: 50px;
	  font-size: 17.3px;
  }
`;

export const Logo = styled.img`
  height: 66px;
  width: 66px;
`;
