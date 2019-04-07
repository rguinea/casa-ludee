import * as React from 'react';
import { DoubleGradient, Gradient } from './Cuadrant.styled';
import { IPropTypes } from './Cuadrant.types';

const Cuadrant: React.FC<IPropTypes> = (props): JSX.Element => {
  return props.isDouble ?
    <DoubleGradient background={props.backgroundImage}>
      { props.children }
    </DoubleGradient> :
    <Gradient background={props.backgroundImage}>
      { props.children }
    </Gradient>
};

export default Cuadrant;
