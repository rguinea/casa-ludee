import styled from 'styled-components';

export const FlexItem = styled.div`
`;

export const FlexContainer = styled.div`
  display: flex;
	justify-content: space-around;
  margin: 100px 100px 0;
  ${FlexItem} + ${FlexItem} {
    
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
  height: 150px;
  width: 1px;
  box-shadow: 2px 2px 2px;
  border-radius: 1px;
`;
