import styled from 'styled-components';

export const Text = styled.p`
	font-family: Colaborate;
	font-size: 17.7px;
	font-weight: 300;
	text-align: center;
	color: #11159a;
	text-transform: uppercase;
  margin: auto;
  margin-bottom: 100px;
  @media all and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 12.7px;
  }
`;

export const Image = styled.img`
  max-width: 70px;
  max-height: 70px;
`;

export const Container = styled.div`
  width: 20vw;
  /* mobile phone */
  @media all and (max-width: 768px) {
    width: 33vw;
  }
`;
