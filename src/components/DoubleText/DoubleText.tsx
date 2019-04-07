import * as React from 'react';
import { CursiveText, Text } from './DoubleText.styled';
import { IPropTypes } from './DoubleText.types';

const DoubleText: React.FC<IPropTypes> = (props): JSX.Element => (
  <>
    <CursiveText id={props.id}>
      { props.cursiveText }
    </CursiveText>
    <Text color={props.color}>
      { props.text }
    </Text>
  </>
);

export default DoubleText;
