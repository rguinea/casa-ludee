import * as React from 'react';
import { Container } from './Cuadrant.styled';
import { IPropTypes } from './Cuadrant.types';

const Cuadrant: React.FC<IPropTypes> = (props): JSX.Element => {
  return <Container background={props.backgroundImage}>
    { props.children }
  </Container>
};

export default Cuadrant;
