import * as React from 'react';

import mouse from '../../images/mouse.svg';

import { Container, Image, Text } from './ScrollInfo.styled';


const ScrollInfo: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Image src={mouse} />
      <Text>
        Scroll para más información
      </Text>
    </Container>
  )
};

export default ScrollInfo;
