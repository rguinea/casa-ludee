import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
	justify-content: center;
  /* mobile phone */
  @media all and (max-width: 768px) {
    flex-flow: row-reverse wrap-reverse;
  }
`;

export const Text = styled.p`
	width: 507px;
	font-family: 'Source Sans Pro';
	font-size: 20px;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: justify;
	color: #171717;
	margin-left: 10vw;
  /* mobile phone */
  @media all and (max-width: 768px) {
    margin: 0 10px;
  }

`;

export const ImageContainer = styled.div`
  width: 20rem;
  height: 20rem;
  box-shadow: 20px 36px 52px 8px rgba(130,130,130,0.28);
  margin: auto;
`;

export const Image = styled.img`
  margin: 10px;
  max-width: 94%;
  max-height: 94%;
`;
