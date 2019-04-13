import * as React from 'react';

import ImageWithText from '../ImageWithText';

import { FlexContainer, Logo, MoreInfo, Title } from './Amenities.styled';
import { IPropTypes } from './Amenities.types';

import cerradura from '../../images/cerradura.svg';
import coche from '../../images/coche.svg';
import cocina from '../../images/cocina.svg';
import gas from '../../images/gas.svg';
import juegos from '../../images/juegos.svg';
import lavadora from '../../images/lavadora.svg';
import logo from '../../images/logo.png';
import patio from '../../images/patio.svg';
import toallas from '../../images/toallas.svg';
import tv from '../../images/tv.svg';
import wifi from '../../images/wifi.svg';

const Amenities: React.FC<IPropTypes> = (props): JSX.Element => {
  return <>
    <Logo src={logo} id={props.id}/>
    <Title>- Servicios completos durante tu estadía -</Title>
    <FlexContainer>
      <ImageWithText imageSrc={wifi} text='Wifi en toda la estancia' />
      <ImageWithText imageSrc={tv} text='Televisión por cable' />
      <ImageWithText imageSrc={lavadora} text='Cuarto de lavado y planchado' />
      <ImageWithText imageSrc={gas} text='Agua caliente' />
      <ImageWithText imageSrc={cocina} text='Cocina integral' />
      <ImageWithText imageSrc={juegos} text='Libros y juguetes para niños' />
      <ImageWithText imageSrc={toallas} text='Toallas y ropa de cama adicionales' />
      <ImageWithText imageSrc={cerradura} text='Cerradura inteligente' />
      <ImageWithText imageSrc={patio} text='Jardín y terraza familiar' />
      <ImageWithText imageSrc={coche} text='Estacionamiento para dos autos' />
    </FlexContainer>
    <MoreInfo>
      - LA CASA INCLUYE UN AMA DE LLAVES DURANTE TODA TU ESTADÍA PARA
      HACER MUCHO MÁS CONFORTABLE TUS DÍAS EN LA CASA -
    </MoreInfo>
  </>
};

export default Amenities;
