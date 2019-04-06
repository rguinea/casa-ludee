import styled from 'styled-components';

export const Gradient = styled.div<{background: string | undefined}>`
  background: white;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%), url("${({ background }) => background || '#FFF'}");
  background-size: 100% auto;
  height: calc(100vw*2/3);
  max-height: 100vh;
  &:after {
    content: '';
  }
`;

export const DoubleGradient = styled.div<{background: string | undefined}>`
  background: white;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%, rgba(118,201,249,0) 70%, rgba(118,201,249,1) 100%), url("${({ background }) => background || '#FFF'}");
  filter: gray;
  background-size: 100% auto;
  height: calc(100vw*2/3);
  max-height: 100vh;
  &:after {
    content: '';
  }
`;
