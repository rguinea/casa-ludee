import * as React from 'react';
import ludee from '../../images/ludee.png';
import { Container, Image, ImageContainer, Text } from './Information.styled';

const Information: React.FC = (): JSX.Element => {
  return <Container>
    <Text>
      Ven a hospedarte con tu familia en nuestra encantadora casa y enamórate de ella.
      <br/>
      <br/>
      Nuestra casa cuenta con todo lo necesario para hacer de tu estadía lo más placentero posible, ya que cuidamos cada mínimo detalle en ella.
      <br/>
      <br/>
      Todo lo que encuentres en Casa Ludee esta diseñado para hacerte sentir como en tu hogar, desde sus amplíos espacios y sus áreas verdes y abiertas hasta la comodidad de nuestras camas pensadas solo en tu descanso.
      <br/>
      <br/>
     Desconectáte de todo y disfruta de la paz y tranquilidad que ofrece nuestro hogar.
    </Text>
    <ImageContainer>
      <Image src={ludee} alt='logo casa ludee'/>
    </ImageContainer>
  </Container>
};

export default Information;
