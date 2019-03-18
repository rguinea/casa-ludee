import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
	justify-content: center;
`;

export const Text = styled.p`
	width: 507px;
	height: 410px;
	font-family: 'Source Sans Pro';
	font-size: 20px;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: justify;
	color: #171717;
	margin-left: 10vw;

`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: 20px 36px 52px 8px rgba(130,130,130,0.28);
  margin: auto;
`;

export const Image = styled.img`
  margin: 10px;
  max-width: 380px;
  max-height: 380px;
`;
