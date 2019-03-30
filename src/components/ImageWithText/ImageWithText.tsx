import * as React from 'react';
import { Container, Image, Text } from './ImageWithText.styled';
import { IPropTypes } from './ImageWithText.types';

const ImageWithText: React.FC<IPropTypes> = ({imageSrc, text}): JSX.Element => {
  return <Container>
    <Image src={imageSrc} />
    <Text>{text}</Text>
  </Container>
};

export default ImageWithText;
