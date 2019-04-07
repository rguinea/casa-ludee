import styled from 'styled-components';

export const Image = styled.img`
  max-height: 10vh;
  margin-bottom: 10vh;
  width: auto;
  filter: brightness(0) invert(1) contrast(0.75);
`;

export const BlackText = styled.p`
  margin: 0;
	font-family: SourceSansPro;
	font-size: 20px;
	font-weight: bold;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: center;
	color: #171717;
`;

export const FiveStars = styled.span`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
export const Star = styled.img`
  height: 30px;
`;
export const Foto = styled.img`
  border-radius: 50%;
  margin: auto;
`;
export const Text = styled.p`
	margin: 10px;
	font-family: SourceSansPro;
	font-size: 20px;
	text-indent: 100px;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: justify;
	color: #171717;
	&::after {
    content: "”";
    position: absolute;
    font-family: Times-Roman;
    font-size: 289.2px;
    line-height: 1.5;
    color: rgba(23,23,23,0.08);
    top: -20%;
    @media all and (max-width: 768px) {
      top: unset;
      bottom: -108%;
    }
    right: 0;
	}
	&::before {
    content: "“";
    position: absolute;
    font-family: Times-Roman;
    font-size: 289.2px;
    line-height: 1.5;
    color: rgba(23,23,23,0.08);
    top: -163px;
    left: -100px;
	}
`;

export const QuoteContainer = styled.div`
  position: relative;
`;

export const ReviewContainer = styled.span`
  max-width: 50vw;
  text-align: center;
  @media all and (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const Container = styled.div`
  background-color: #f6f6f8;
  padding: 100px 0;
`;
