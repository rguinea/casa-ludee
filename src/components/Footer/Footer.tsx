import * as React from 'react';
import { Container } from './Footer.styled';

const Footer: React.FC = (): JSX.Element => {
  return <Container>Copyright©${new Date().getFullYear()} Casa Ludee</Container>
};

export default Footer;
