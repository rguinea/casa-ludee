import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { useScrollPosition } from 'react-use-scroll-position';


import logo from '../../images/logo-ludee.png';

import { Container, Logo, Option } from './Header.styled';

const options = [
  {name: "Estancia", id: "#home"},
  {name: "Servicios", id: "#services"},
  {name: "Ubicación", id: "#location"},
  {name: "Disponibilidad", id: "#airbnb"},
  {name: "Evaluaciones", id: "#evals"}
];

const Header: React.FC = (): JSX.Element => {
  const { y } = useScrollPosition();
  const threshold = 300;
  return (
    <Container isInitial={y <= threshold}>
      <Logo isInitial={y <= threshold} src={logo}/>
      {
        !isMobile && options.map((option) =>
          <li key={option.id} >
            <Option href={option.id} offset={100}>{option.name}</Option>
          </li>
        )
      }
      <li><Option>English</Option></li>
    </Container>
  )
};

export default Header;
