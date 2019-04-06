import * as React from 'react';
import { isMobile } from 'react-device-detect';

import airbnb from '../../images/airbnb.png';

import { AirbnbIFrame, Button, ButtonContainer, Container, Logo, MoreInfo, Text, Title } from './Airbnb.styled';
import { IPropTypes } from './Airbnb.types';


const Airbnb: React.FC<IPropTypes> = (props): JSX.Element => {
  return <Container id={props.id}>
    <Logo src={airbnb}/>
    <Title>Disponibilidad</Title>
    <MoreInfo>
      Todas nuestras reservaciones están gestionadas por Airbnb; una de las aplicaciones
      más importantes de los últimos años en reserva de alojamientos por el mundo ¿Por qué?
      Porque queremos brindarte la máxima  seguridad a la hora de reservar en casa Ludee.
    </MoreInfo>
    <Text>
      ¡Conoce nuestra disponibilidad de fechas y precios a través de esta plataforma!
    </Text>
    { !isMobile &&
      <AirbnbIFrame className="airbnb-embed-frame" data-id="11677558" data-view="home">
        <a href="https://www.airbnb.com/rooms/11677558?s=51">
          View On Airbnb
        </a>
        <a href="https://www.airbnb.com/rooms/11677558?s=51" rel="nofollow">
          Casa Ludee
        </a>
      </AirbnbIFrame>
    }
    { isMobile &&
      <ButtonContainer>
        <Button href="https://www.airbnb.com/rooms/11677558" >RESERVAR</Button>
      </ButtonContainer>
    }
  </Container>
};

export default Airbnb;
