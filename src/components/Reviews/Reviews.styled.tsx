import styled from 'styled-components';

export const Image = styled.img`
  max-height: 10vh;
  width: auto;
  filter: brightness(0) invert(1) contrast(0.75);
`;

export const BlackText = styled.p``;
export const FiveStars = styled.span``;
export const Foto = styled.img`
  border-radius: 50%;
  margin: auto;
`;
export const Quote = styled.p`
	opacity: 0.08;
	font-family: Times-Roman;
	font-size: 289.2px;
	line-height: 1.5;
	letter-spacing: 8.7px;
	text-align: center;
	color: rgba(23, 23, 23, 0.08);
`;
export const Text = styled.p``;

export const ReviewContainer = styled.span`
  max-width: 50vw;
  text-align: center;
  @media all and (max-width: 768px) {
    width: 90vw;
  }
`;
