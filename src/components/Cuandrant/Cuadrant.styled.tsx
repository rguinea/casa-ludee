import styled from 'styled-components';

export const Container = styled.div<{background: string | undefined}>`
  background: white;
  background-image: url("${({ background }) => background || '#FFF'}");
  background: linear-gradient(to top, rgba(255,255,255,1),rgba(0,0,0,0) 20%), url("${({ background }) => background || '#FFF'}");
  background-size: 100% auto;
  height: calc(100vw*2/3);
  max-height: 100vh;
  &:after {
    content: '';
  }
`;
